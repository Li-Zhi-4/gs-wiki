import { NavigationBar } from "@/components/NavigationBar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ShieldInfoBox } from "@/components/ShieldInfoBox"
import { ArmourInfoBox } from "@/components/ArmourInfoBox"
import { WeaponInfoBox } from "@/components/WeaponInfoBox"
import type { Weapon, Armour, Shield } from "@/components/ItemsIndexTable/columns"

import shieldJson from '@/data/Shields.json'
import armourJson from '@/data/Armour.json'


const DATA = Object.fromEntries(
    [...shieldJson, ...armourJson].map((item) => [item.key, item])
);


export function ItemPage() {
    const { itemsID } = useParams();
    const item = itemsID ? DATA[itemsID] : undefined;
    let infobox;
    if (!item) return <p>Loading…</p>;
    
    switch(item.type) {
        case 'shield':
            console.log("item type is shield");
            infobox = <ShieldInfoBox item={item as Shield} />;
            break;
        case 'armour':
            console.log("item type is armour");
            infobox = <ArmourInfoBox item={item as Armour} />;
            break;
        case 'weapon':
            console.log("item type is weapon");
            infobox = <WeaponInfoBox item={item as unknown as Weapon} />;
            break;
    };

    return (
        <div className="flex flex-col items-center px-4 sm:px-16">
            <NavigationBar />

            <div className="flex flex-col py-16 max-w-3xl w-full">
                <Breadcrumb className="pb-2 w-full">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/items">Items</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{item?.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="pb-2 w-full text-5xl font-semibold">{item?.name}</h1>
                
                {/* Content goes here */}
                <div className="flex flex-col sm:flex-row gap-8 w-full h-full">
                    <div className="flex flex-col gap-8 h-fit order-2 sm:order-1">
                        <blockquote className="blockquote-style">{item?.description}</blockquote>

                        <div className="flex flex-col gap-2">
                            <h2 className="header-2">Use</h2>
                            <span>{"use" in item ? item.use : null}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="header-2">Crafting</h2>
                            <ul className="list-disc pl-5">
                                {item?.crafting && Object.entries(item.crafting).map(
                                    ([material, amount]) => (
                                        <li key={material}>{amount ? `${amount}x` : null} {material}</li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="header-2">Obtained</h2>
                            <ul className="list-disc pl-5">
                                {item?.obtained && item.obtained.map(
                                    (obtain, idx) => (
                                        <li key={idx}>{obtain}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Infobox goes here */}
                    <div className="flex justify-center order-1 sm:order-2">{infobox}</div>
                    
                </div>
            </div>
        </div>
    )
}