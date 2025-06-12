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
import { TileGrid } from "@/components/Tables/TileGrid"




export function BaseBlueprintPage() {

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
                            <BreadcrumbPage>Base Blueprint Designer</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="pb-2 w-full text-5xl font-semibold">Base Blueprint Designer</h1>
                <span className="py-2 pb-8">
                    <p className="paragraph [color:var(--muted-foreground)]">Build a base blueprint template and calculate its' crafting resources.</p>
                </span>

                {/* Content goes here */}
                
                <TileGrid></TileGrid>
            </div>
        </div>
    )
}