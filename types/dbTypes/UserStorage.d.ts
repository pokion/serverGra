import { RowDataPacket } from "mysql2"
import { Item } from "./Item"

declare interface UserStorage extends RowDataPacket{
    Id: string
    UserID?: string
    User?: Express.User
    ItemID?: number
    Item: Item
    Quantity: number
}