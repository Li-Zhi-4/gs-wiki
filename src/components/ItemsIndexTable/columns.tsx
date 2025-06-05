import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

/**
 * File for defining the data in the table and the column headers of the table.
 */

interface BaseItem {
    key:            string,
    name:           string,
    iconURL:        string | null,
    designURL:      string | null,
    description:    string,
    obtained:       string[],
    type:           "shield" | "weapon" | "armour",
    rarity:         "normal" | "rare" | "unique" | "legendary",
    itemEffect:     string,
    durability:     number,
    crafting:       Record<string, number | null | undefined>
}

export interface Shield extends BaseItem {
    type:           "shield",
    combatMastery:  string,
    use:            string,
    blockCost:      number,
    recharge:       number,
    armour:         number
}

export interface Armour extends BaseItem {
    type:           "armour",
    elementType:    string,
    elementValue:   number | string,
    armour:         number,
    piece:          "helm" | "chest" | "gauntlets" | "trousers" | "boots",
    set:            string,
    fullSetEffect:  string,
    runSpeed:       number,
    tier:           number
}

export interface Weapon extends BaseItem {
    type:           "weapon",
    combatMastery:  string,
    use:            string,
    elementType:    string,
    elementValue:   number | string,
    weaponType:     "melee" | "ranged",
    sharpen:        boolean,
    damage:         number,
    attackSpeed:    number,
    range:          number,
    dps:            number
}

export type Item = Shield | Armour | Weapon;

export const columns: ColumnDef<Item>[] = [
    {
        accessorKey: "name",
        header: "Name",
        size: 400,
        cell: ({ row }) => {
            const name = row.getValue("name") as string;
            const id = row.original.key;

            return (
                <Link to={`/items/${id}`} className="underline hover:text-neutral-900">
                    {name}
                </Link>
            );
        }
    },
    {
        accessorKey: "type",
        header: () => <div className="text-left">Type</div>,
        cell: ({row}) => <div className="text-left">{row.getValue("type")}</div>,
        size: 200,
        minSize: 200
    },
    {
        accessorKey: "rarity",
        header: () => <div className="text-left">Rarity</div>,
        cell: ({row}) => <div className="text-left">{row.getValue("rarity")}</div>,
        size: 200,
        minSize: 200
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original
    
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.key)}>
                            Copy Item ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Other Options</DropdownMenuItem>
                        <DropdownMenuItem>More Options</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        size: 50
    },
]