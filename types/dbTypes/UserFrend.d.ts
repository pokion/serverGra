import { RowDataPacket } from "mysql2"

declare interface UserFrend extends RowDataPacket{
    Id: number
    UserID?: string
    User?: Express.User
    FrendID?: string
    Frend?: Express.User
    Accepted: boolean
}