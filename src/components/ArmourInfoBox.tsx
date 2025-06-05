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
import type { Armour } from "./ItemsIndexTable/columns";

export function ArmourInfoBox({ item }: { item: Armour }) {
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
                        <InfoBoxDataHeader>Piece</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.piece}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Rarity</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.rarity}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem variant="long">
                        <InfoBoxDataHeader>Set</InfoBoxDataHeader>
                        <InfoBoxDataLabel variant="long">{item.set}</InfoBoxDataLabel>
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
                        <InfoBoxDataHeader>Elemental</InfoBoxDataHeader>
                        <InfoBoxDataLabel>{item.elementType == 'N/A' ? "N/A" : `${item.elementType} ${item.elementValue}`}</InfoBoxDataLabel>
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

                    <InfoBoxDivider />

                    <InfoBoxDataItem variant="long">
                        <InfoBoxDataHeader>Full Set Effect</InfoBoxDataHeader>
                        <InfoBoxDataLabel variant="long">{item.fullSetEffect}</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                </InfoBoxDataContent>
                <InfoBoxDivider variant="up" />
            </InfoBoxDataSection>
        </InfoBox>
    )
}