import { NavigationBar } from "@/components/NavigationBar"
import grimSoulWiki from '/src/assets/grim-soul-wiki.svg'
import { ItemsCard } from "@/components/ItemsCard"


const ITEMS = {
    'Weapons': '/items',
    'Shields': '/items',
    'Armour': '/items',
    'Tools': '/tools',
    'Items': '/items'
}

const TOOLS = {
    'Tools': '/tools/damage-reduction-calculator'
}


export function HomePage() {

    return (
        <div className="flex flex-col items-center px-4 sm:px-16">
            <NavigationBar />

            <div className="flex justify-center py-16 w-full">
                <img src={grimSoulWiki} alt="grim soul wiki" className="w-lg"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 pb-16 max-w-3xl w-full">
                <ItemsCard title="Items" description="This card is for items." data={ITEMS}></ItemsCard>
                <ItemsCard title="Tools" description="This card is for tools." data={TOOLS}></ItemsCard>
            </div>
        </div>
    )
}