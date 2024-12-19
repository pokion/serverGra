import { RowDataPacket } from "mysql2"
import { Item } from "./Item"
import { Building } from "./Building"

declare interface BuildingCrafting extends RowDataPacket{
    Id: number
    ItemID?: number
    Item?: Item
    BuildingID?: number
    Building?: Building
    CraftedQuantity: number
}