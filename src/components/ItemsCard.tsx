import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"


interface ItemsCardProps {
  title: string;
  description: string;
  data: Record<string, string>;
}

export function ItemsCard({ title, description, data }: ItemsCardProps) {

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col w-full items-start">
                        {Object.entries(data).map( ([key,value]) => (
                            <NavigationMenuItem key={key}>
                                <NavigationMenuLink asChild>
                                    <Link to={value} className="block w-full px-2 py-1">{key}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </CardContent>
        </Card>
    )
}
