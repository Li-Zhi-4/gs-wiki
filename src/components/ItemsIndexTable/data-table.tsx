import * as React from "react"
import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge";

/**
 * File for creating the data table component with pagination, filtering, and searching.
 */

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>( {columns,data}: DataTableProps<TData, TValue> ) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [typeFilter, setTypeFilter] = React.useState<string | null>(null);
    const [rarityFilter, setRarityFilter] = React.useState<string | null>(null);

    const typeTags = ["armour", "weapon", "shield"];
    const rarityTags = ["normal", "rare", "unique", "legendary"];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:            getCoreRowModel(),
        getPaginationRowModel:      getPaginationRowModel(),
        onColumnFiltersChange:      setColumnFilters,
        getFilteredRowModel:        getFilteredRowModel(),
        state: {
            columnFilters,
        },
    })

    return (
        <div>

            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col py-1">

                    {/* Type tags */}
                    <div className="flex gap-2 py-1">
                        {typeTags.map((tag) => (
                            <Badge
                                key={tag}
                                variant={typeFilter === tag ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => {
                                    const isActive = typeFilter === tag;
                                    const newFilter = isActive ? null : tag;
                                    setTypeFilter(newFilter);
                                    table.getColumn("type")?.setFilterValue(newFilter);
                                }}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    {/* Rarity tags */}
                    <div className="flex gap-2 py-1">
                        {rarityTags.map((tag) => (
                            <Badge
                                key={tag}
                                variant={rarityFilter === tag ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => {
                                    const isActive = rarityFilter === tag;
                                    const newFilter = isActive ? null : tag;
                                    setRarityFilter(newFilter);
                                    table.getColumn("rarity")?.setFilterValue(newFilter);
                                }}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>

                </div>
                
                {/* Search Bar */}
                <div className="flex items-end py-2">
                    <Input
                        placeholder="Search item..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
            </div>


            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                <TableHead key={header.id} style={{ width: header.getSize() }}>
                                    {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </TableHead>
                                )
                            })}
                            </TableRow>
                        ))}
                    </TableHeader>

                    {/* If there are results, load them. Else, load "No results." */}
                    <TableBody>
                        {table.getRowModel().rows?.length ? ( 
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>


            {/* Pagination Controls */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}