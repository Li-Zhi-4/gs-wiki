import { columns, type Item, type Shield, type Armour } from "./columns"
import { DataTable } from "./data-table"

import shieldJson from '@/data/Shields.json'
import armourJson from '@/data/BronzeSet.json'

const DATA: Item[] = [
  ...shieldJson as Shield[],
  ...armourJson as Armour[],
]

export default function DemoPage() {

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={DATA} />
    </div>
  )
}