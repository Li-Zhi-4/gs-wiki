import { NavigationBar } from "@/components/NavigationBar"
import ItemsIndexTable from "@/components/ItemsIndexTable/page"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"

export function ItemIndexPage() {

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
                            <BreadcrumbPage>Items</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <span className="pb-2 w-full text-5xl">Items Index</span>
                <ItemsIndexTable />
            </div>
        </div>
    )
}