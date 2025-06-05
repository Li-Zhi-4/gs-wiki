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

import { 
    InfoBox,
    InfoBoxImageSection,
    InfoBoxImage,
    InfoBoxDataSection,
    InfoBoxDataContent,
    InfoBoxDividerVariants,
    InfoBoxDivider,
    InfoBoxDataVariants,
    InfoBoxDataItem,
    InfoBoxDataHeader,
    InfoBoxDataLabel
} from "@/components/InfoBox"
import helmet from '/src/assets/img/Chainscaly_Hat_Icon.webp'


export function ItemPage() {

    return (
        <div className="flex flex-col items-center px-4 sm:px-16">
            <NavigationBar />

            <div className="flex flex-col max-w-3xl w-full">
                <Breadcrumb className="pt-16 pb-2 w-full">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/items">Item Index</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Item Name</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <span className="pb-2 w-full text-5xl">Title</span>
                
                {/* stuff goes here */}
                <InfoBox>

            {/* Image Section */}
            <InfoBoxImageSection>
                <InfoBoxDivider variant="down" />
                <InfoBoxImage src={helmet} alt="helmet" />
                <InfoBoxDivider variant="up" />
            </InfoBoxImageSection>

            <InfoBoxDataSection>
                <InfoBoxDivider variant="down" />
                <InfoBoxDataContent>

                    <InfoBoxDataItem>
                        <InfoBoxDataHeader>Header</InfoBoxDataHeader>
                        <InfoBoxDataLabel>32</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                    <InfoBoxDivider />

                    <InfoBoxDataItem variant="long">
                        <InfoBoxDataHeader>This is a header</InfoBoxDataHeader>
                        <InfoBoxDataLabel>This is a Content blah blah blah blah blah</InfoBoxDataLabel>
                    </InfoBoxDataItem>

                </InfoBoxDataContent>
                <InfoBoxDivider variant="up" />
            </InfoBoxDataSection>
        </InfoBox>

            </div>
        </div>
    )
}