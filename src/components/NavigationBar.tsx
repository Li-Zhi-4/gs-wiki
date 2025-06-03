import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

import logo from '/src/assets/logo.svg'

/**
 * A navigation bar that sticks to the top of the screen
 * @returns navigation bar
 */
export function NavigationBar() {

    return (
        <div className="flex flex-row items-center justify-between sticky top-0 z-50 h-16 w-screen px-16 bg-white shadow-sm">

            {/* Left side of navigation bar */}
            <div className="flex flex-row gap-4 items-center">
                <img src={logo} alt="logo" className="h-8 w-8"/>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Coming soon!</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Coming soon!</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/docs'>Items</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Right side of navigation bar */}
            <div className="flex flex-row">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

        </div>
    )
}