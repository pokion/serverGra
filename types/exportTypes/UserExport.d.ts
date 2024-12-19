import { RowDataPacket } from "mysql2"

declare interface UserExport extends RowDataPacket{
    Id: string
    Name: string
}