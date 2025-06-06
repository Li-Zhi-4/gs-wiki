import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

// 1. Read excel sheet
const workbook  = XLSX.readFile('src/data/Armour.xlsx');  // INPUT FILD SOURCE HERE
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
// Sets empty cells as null
const rows      = XLSX.utils.sheet_to_json(worksheet, { defval: null });

// 2. Transforms data
const formatted = rows.map(item => {

    const recipeValues = [];
    if (item.crafting != null) recipeValues.push(item.crafting);
    for (const key of Object.keys(item)) {
        if (key.startsWith('__EMPTY')) {
            recipeValues.push(item[key]);
        }
    }

    let finalRecipe;
    if (recipeValues.length === 1 && recipeValues[0] === 'Not craftable') {
        finalRecipe = { 'Not craftable': '' };
    } else {
        const recipe = {};
        for (let i = 0; i < recipeValues.length; i += 2) {
            const name = recipeValues[i];
            const qty  = recipeValues[i+1];
            if (name) recipe[name] = qty;
        }
        finalRecipe = recipe;
    }

    let obtainedList = [];
    if (item.obtained != null) {
        obtainedList = item.obtained
            .toString()
            .split(/\r?\n/)         // split on line breaks
            .map(line => line.trim())
            .filter(line => line);  // drop empty strings
    }

    const output = { ...item };
    delete output.crafting;
    for (const key of Object.keys(item)) {
        if (key.startsWith('__EMPTY')) delete output[key];
    }

    output.crafting = finalRecipe;
    output.obtained = obtainedList;

    return output;
});

// 3. Write data to file
const outPath    = path.resolve('src/data', 'Armour.json');  // INPUT FILE OUTPUT NAME HERE
const jsonString = JSON.stringify(formatted, null, 2);
fs.writeFileSync(outPath, jsonString, 'utf8');

console.log(`Wrote ${formatted.length} items to ${outPath}`);