import { RowDataPacket } from "mysql2"

declare interface Island extends RowDataPacket{
    Id: number
    Name: string
    Description: string
    GridPrefix: string
    GridWidth: number
    GridHeight: number
}