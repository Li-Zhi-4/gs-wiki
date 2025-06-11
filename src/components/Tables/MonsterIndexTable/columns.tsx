import { type ColumnDef } from "@tanstack/react-table"
// import { Link } from "react-router-dom"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Monster {
    key: string,
    name: string,
    normalHealth: number | null,
    heroicHealth: number | null,
    legendaryHealth: number | null,
    normalArmour: number | null,
    heroicArmour: number | null,
    legendaryArmour: number | null,
    normalDamageReduction: number | null,
    heroicDamageReduction: number | null,
    legendaryDamageReduction: number | null,
    normalPhysicalAttack: number | null,
    heroicPhysicalAttack: number | null,
    legendaryPhysicalAttack: number | null,
    elementType: string | null,
    normalElementalAttack: number | null,
    heroicElementalAttack: number | null,
    legendaryElementalAttack: number | null,
    specialMechanics: string | null,
    locations: string | null
}

export const columns: ColumnDef<Monster>[] = [
    {
        accessorKey: "name",
        header: "Name",
        size: 500,
        minSize: 500,
        cell: ({ row }) => {
            const name = row.getValue("name") as string;
            // const id = row.original.key;

            return (
                // <Link to={`/monsters/${id}`} className="underline hover:text-neutral-900">
                //     {name}
                // </Link>
                <div>{name}</div>
            );
        }
    },
    {
        accessorKey: "normalHealth",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Health (N, H, L)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const normal = row.original.normalHealth;
            const heroic = row.original.heroicHealth;
            const legendary = row.original.legendaryHealth;
            return (
                <div className="text-center">
                    {normal} {heroic ? `/ ${heroic}` : ""} {legendary ? `/ ${legendary}` : ""}
                </div>
            );
        },
        size: 200,
        minSize: 200,
        maxSize: 200
    },
    {
        accessorKey: "normalArmour",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Armour (N, H, L)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const normal = row.original.normalArmour;
            const heroic = row.original.heroicArmour;
            const legendary = row.original.legendaryArmour;
            return (
                <div className="text-center">
                    {normal} {heroic ? `/ ${heroic}` : ""} {legendary ? `/ ${legendary}` : ""}
                </div>
            );
        },
        size: 200,
        minSize: 200,
        maxSize: 200
    },
    {
        accessorKey: "normalDamageReduction",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Damage Reduction (N, H, L)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const normal = row.original.normalDamageReduction;
            const heroic = row.original.heroicDamageReduction;
            const legendary = row.original.legendaryDamageReduction;
            return (
                <div className="text-center">
                    {normal} {heroic ? `/ ${heroic}` : ""} {legendary ? `/ ${legendary}` : ""}
                </div>
            );
        },
        size: 200,
        minSize: 200,
        maxSize: 200
    },
    {
        accessorKey: "normalPhysicalAttack",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Physical Attack (N, H, L)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const normal = row.original.normalPhysicalAttack;
            const heroic = row.original.heroicPhysicalAttack
            const legendary = row.original.legendaryPhysicalAttack;
            return (
                <div className="text-center">
                    {normal} {heroic ? `/ ${heroic}` : ""} {legendary ? `/ ${legendary}` : ""}
                </div>
            );
        },
        size: 200,
        minSize: 200,
        maxSize: 200
    },
    {
        accessorKey: "normalElementalAttack",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Elemental Attack (N, H, L)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const elementType = row.original.elementType;
            const normal = row.original.normalElementalAttack;
            const heroic = row.original.heroicElementalAttack;
            const legendary = row.original.legendaryElementalAttack;
            return (
                <div className="text-center">
                    {elementType} {normal} {heroic ? `/ ${heroic}` : ""} {legendary ? `/ ${legendary}` : ""}
                </div>
            );
        },
        size: 200,
        minSize: 200,
        maxSize: 200
    },
    {
        accessorKey: "locations",
        header: () => <div className="text-left">Locations</div>,
        cell: ({row}) => <div className="text-left">{row.getValue("locations")}</div>,
        size: 200,
        minSize: 200
    },
    {
        accessorKey: "specialMechanics",
        header: () => <div className="text-left">Special Mechanics</div>,
        cell: ({row}) => <div className="text-left">{row.getValue("specialMechanics")}</div>,
        size: 200,
        minSize: 200
    },
]