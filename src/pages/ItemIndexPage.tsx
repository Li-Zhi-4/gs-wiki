import { NavigationBar } from "@/components/NavigationBar"

import DemoPage from "@/components/ItemsIndexTable/page"

export function ItemIndexPage() {

    return (
        <div className="flex flex-col items-center">
            <NavigationBar />
            <DemoPage></DemoPage>
        </div>
    )
}