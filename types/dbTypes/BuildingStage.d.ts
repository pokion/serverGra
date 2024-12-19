import { RowDataPacket } from "mysql2"
import { Item } from "./Item"
import { Building } from "./Building"

declare interface BuildingStage extends RowDataPacket{
    Id: number
    Description: string
    Stage: number
    ItemID?: number
    Item?: Item
    BuildingID?: number
    Building?: Building
    ItemQuantity: number
}