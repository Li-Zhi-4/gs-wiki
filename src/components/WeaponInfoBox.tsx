import { 
    InfoBox,
    InfoBoxImageSection,
    InfoBoxImage,
    InfoBoxDataSection,
    InfoBoxDataContent,
    InfoBoxDivider,
    InfoBoxDataItem,
    InfoBoxDataHeader,
    InfoBoxDataLabel
} from "@/components/ui/InfoBox"
import type { Weapon } from "./Tables/ItemsIndexTable/columns";

export function WeaponInfoBox({ item }: { item: Weapon }) {
    return (
        <InfoBox>
            <InfoBoxImageSection>
                <InfoBoxDivider variant="down" />
                <InfoBoxImage src={item.iconURL ?? undefined} />
                <InfoBoxDivider variant="up" />
            </InfoBoxImageSection>

            <InfoBoxDataSection>
                <InfoBoxDivider variant="down" />
                <InfoBoxDataContent>

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Type</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.type}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Rarity</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.rarity}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Sharpen</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.sharpen}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem variant="long">
                        <InfoBoxDataHeader>Combat Mastery</InfoBoxDataHeader>
                        <InfoBoxDataLabel variant="long">{item.combatMastery}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                </InfoBoxDataContent>
                <InfoBoxDivider variant="up" />
            </InfoBoxDataSection>

            <InfoBoxDataSection>
                <InfoBoxDivider variant="down" />
                <InfoBoxDataContent>

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Damage</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.damage}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Elemental</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.elementType == 'N/A' ? "N/A" : `${item.elementType} ${item.elementValue}`}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Attack Speed</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.attackSpeed}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Range</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.range}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>DPS</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.dps}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Durability</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.durability}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem variant="long">
                        <InfoBoxDataHeader>Effect</InfoBoxDataHeader>
                        <InfoBoxDataLabel variant="long">{item.itemEffect}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                </InfoBoxDataContent>
                <InfoBoxDivider variant="up" />
            </InfoBoxDataSection>
        </InfoBox>
    )
}