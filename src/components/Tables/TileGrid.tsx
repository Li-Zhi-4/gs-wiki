import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import reactLogo from '/src/assets/react.svg'

export class Tile {
    x: number;
    y: number;
    type: string;
    properties: string;
    logo: string;
    

    constructor(x: number, y: number, type = "", properties = "", logo = "") {
        this.x = x;
        this.y = y;
        this.type = type;
        this.properties = properties;
        this.logo = logo;
    }

}

export function TileGrid() {
    const [typeOfTile, setTypeOfTile] = useState("");
    const [grid, setGrid] = useState<Tile[]>([new Tile(0,0), new Tile(0,1), new Tile(1,0), new Tile(1,1)]);

    const baseProperties = "flex justify-center p-1 h-[30px] w-[30px] border border-neutral-200 cursor-pointer"

    const handleClick = (index: number) => {
        // grab grid
        const newTiles = [...grid];
        const tile = newTiles[index];

        // set new values
        tile.type = typeOfTile;
        switch (tile.type) {
            case "Item":
                tile.properties = "bg-neutral-500"
                tile.logo = reactLogo;
                break;
            default:
                tile.properties = "bg-white";
                tile.logo = "";
        }

        // re-render grid
        setGrid(newTiles); 
    };

    return (
        <div>
            <div className="grid grid-rows-2 grid-cols-2 w-fit">
                <div onClick={() => handleClick(0)} className={`${grid[0].properties} ${baseProperties}`}>
                    <img src={grid[0].logo} alt="" />
                </div>
                <div onClick={() => handleClick(1)} className={`${grid[1].properties} ${baseProperties}`}>
                    <img src={grid[1].logo} alt="" />
                </div>
                <div onClick={() => handleClick(2)} className={`${grid[2].properties} ${baseProperties}`}>
                    <img src={grid[2].logo} alt="" />
                </div>
                <div onClick={() => handleClick(3)} className={`${grid[3].properties} ${baseProperties}`}>
                    <img src={grid[3].logo} alt="" />
                </div>
            </div>
            <Toggle variant="outline" aria-label="Toggle" onClick={() => setTypeOfTile(typeOfTile === "" ? "Item" : "")}>Item</Toggle>
        </div>
    )
}