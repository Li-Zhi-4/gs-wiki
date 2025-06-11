import { NavigationBar } from "@/components/NavigationBar"
import MonsterIndexTable from "@/components/Tables/MonsterIndexTable/page"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"

export function MonsterIndexPage() {

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
                            <BreadcrumbPage>Monsters</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="pb-2 w-full text-5xl font-semibold">Monster Index</h1>
                <MonsterIndexTable />
            </div>
        </div>
    )
}