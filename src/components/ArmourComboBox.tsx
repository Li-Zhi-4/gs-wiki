import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import armourJson from '@/data/Armour.json'

/**
 * Filters armourJson for the specific piece of equipment
 * @param dataType "helm" | "chest" | "gauntlets" | "trousers" | "boots"
 * @returns a filtered list of data
 */
function filterData( dataType: string ) {
    const filteredData = armourJson.filter( (item) => item.piece === dataType )
    return filteredData;
}


/**
 * Provides a combobox for armour data
 * To extend this for other data, create a new prop for selecting the data
 * Add logic for passing the correct data into filterData() 
 * or just add a new function for a separate combo box
 */
type ArmourComboBoxProps = {
    onSelect: (value: string) => void;
    dataType: string; 
};

export function ArmourComboBox({ onSelect, dataType }: ArmourComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (selectedValue: string) => {
        onSelect(selectedValue);
        setValue(selectedValue === value ? "" : selectedValue)
        setOpen(false)
    }

    const data = filterData(dataType);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <div className="flex flex-row items-center justify-between px-3 py-2 w-3xs border border-neutral-200 rounded-lg small [color:var(--accent-foreground)]">
                    {value ? data.find((item) => item.name === value)?.name : "Select framework..."}
                    <ChevronsUpDown className="opacity-50 w-[18px] h-[18px]" />
                </div>
            </PopoverTrigger>

            <PopoverContent className="w-3xs p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {data.map((item) => (
                                <CommandItem
                                    key={item.key}
                                    value={item.name}
                                    onSelect={handleChange}
                                >
                                    {item.name}
                                <Check
                                    className={cn(
                                        "ml-auto",
                                        value === item.name ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>

    )
}

