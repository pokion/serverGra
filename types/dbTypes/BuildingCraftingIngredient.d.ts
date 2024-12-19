import { RowDataPacket } from "mysql2"
import { BuildingCrafting } from "./BuildingCrafting"
import { Item } from "./Item"

declare interface BuildingCraftingIngredients extends RowDataPacket{
    Id: number
    BuildingCraftingID?: number
    BuildingCrafting?: BuildingCrafting
    ItemID?: number
    Item?: Item
    Quantity: number
}