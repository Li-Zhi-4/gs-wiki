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
import { ArmourComboBox } from "@/components/ArmourComboBox"
import { useState } from "react"
import { ArmourCard, DamageReductionCard } from "@/components/ArmourCards"

export function DamageReductionCalculatorPage() {
    const [selectedHelm, setHelm] = useState<string | null>(null);
    const [selectedChest, setChest] = useState<string | null>(null);
    const [selectGloves, setGloves] = useState<string | null>(null);
    const [selectPants, setPants] = useState<string | null>(null);
    const [selectBoots, setBoots] = useState<string | null>(null);

    const handleHelmSelect = (item: string | null) => { setHelm(item); };
    const handleChestSelect = (item: string | null) => { setChest(item); };
    const handleGlovesSelect = (item: string | null) => { setGloves(item); };
    const handlePantsSelect = (item: string | null) => { setPants(item); };
    const handleBootsSelect = (item: string | null) => { setBoots(item); };

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
                            <BreadcrumbPage>Tools</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Damage Reduction Calculator</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="pb-2 w-full text-5xl font-semibold">Damage Reduction Calculator</h1>
                <span className="py-2 pb-8">
                    <p className="paragraph [color:var(--muted-foreground)]">Select a full set of armour or individual pieces to calculate damage reduction properties.</p>
                </span>

                {/* Content goes here */}
                <div className="flex flex-col gap-4">
                    <h2 className="header-2">Select Equipment</h2>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="header-3">Helmet</h3>
                                <ArmourComboBox onSelect={handleHelmSelect} dataType="helm"/>
                                <p>You selected: {selectedHelm}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="header-3">Chest</h3>
                                <ArmourComboBox onSelect={handleChestSelect} dataType="chest"/>
                                <p>You selected: {selectedChest}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="header-3">Gloves</h3>
                                <ArmourComboBox onSelect={handleGlovesSelect} dataType="gauntlets"/>
                                <p>You selected: {selectGloves}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="header-3">Pants</h3>
                                <ArmourComboBox onSelect={handlePantsSelect} dataType="trousers"/>
                                <p>You selected: {selectPants}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="header-3">Boots</h3>
                                <ArmourComboBox onSelect={handleBootsSelect} dataType="boots"/>
                                <p>You selected: {selectBoots}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 h-fit">
                            <ArmourCard helm={selectedHelm} chest={selectedChest} gauntlets={selectGloves} trousers={selectPants} boots={selectBoots}/>
                            <DamageReductionCard helm={selectedHelm} chest={selectedChest} gauntlets={selectGloves} trousers={selectPants} boots={selectBoots}/>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}