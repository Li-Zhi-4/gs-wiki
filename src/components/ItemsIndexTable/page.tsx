import { columns, type Item, type Shield, type Armour } from "./columns"
import { DataTable } from "./data-table"

import shieldJson from '@/data/Shields.json'
import armourJson from '@/data/Armour.json'

/**
 * File for rendering table with data.
 */

const DATA: Item[] = [
  ...shieldJson as Shield[],
  ...armourJson as Armour[],
]

export default function ItemsIndexTable() {

  return (
    <div className="w-full">
      <DataTable columns={columns} data={DATA} />
    </div>
  )
}