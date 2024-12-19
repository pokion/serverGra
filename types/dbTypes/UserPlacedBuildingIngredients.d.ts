import { RowDataPacket } from "mysql2"
import { UserPlacedBuilding } from "./UserPlacedBuilding"
import { Item } from "./Item"

declare interface UserPlacedBuildingIngredients extends RowDataPacket{
    Id: string
    UserPlacedBuildingID?: string
    UserPlacedBuilding?: UserPlacedBuilding
    ItemID?: number
    Item?: Item
}