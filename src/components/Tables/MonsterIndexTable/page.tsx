import { columns, type Monster } from "./columns"
import { DataTable } from "./data-table"

import monsterJson from '@/data/Monsters.json'

/**
 * File for rendering table with data.
 */

const DATA: Monster[] = [
  ...monsterJson as Monster[],
]

export default function MonsterIndexTable() {

  return (
    <div className="w-full">
      <DataTable columns={columns} data={DATA} />
    </div>
  )
}