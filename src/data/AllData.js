// 1. Import .json files
import shields from '/src/data/Shields.json';
import bronzeSet from '/src/data/BronzeSet.json';

// 2. Import image files
const modules = import.meta.glob(
  [
    '/src/assets/icons/shields/*.webp',                 // shields
    '/src/assets/icons/armour/bronze-set/*.webp'        // bronze-set
  ],
  { eager: true, as: 'url' }
);

// 3. Grabbing image sources from modules
const icons = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const fileName = path.split('/').pop(); 
    return [fileName, url];
  })
);

// 4. Consolidating datasets
const items = [
  ...shields,
  ...bronzeSet
]

// 5. Mapping datasets to images
const AllData = items.reduce((map, { key, iconURL, designURL, ...rest }) => {
  const iconFile   = iconURL?.split('/').pop();
  const designFile = designURL?.split('/').pop();
  map[key] = {
    ...rest,
    iconURL:   iconFile ? icons[iconFile] : null,
    designURL: designFile ? icons[designFile] : null
  };
  return map;
}, {});

export { AllData };