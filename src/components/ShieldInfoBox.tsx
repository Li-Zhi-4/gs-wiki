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
import type { Shield } from "./ItemsIndexTable/columns";

export function ShieldInfoBox({ item }: { item: Shield }) {
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
                        <InfoBoxDataHeader>Armour</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.armour}</InfoBoxDataLabel>
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