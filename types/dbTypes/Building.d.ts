import { RowDataPacket } from "mysql2"

declare interface Building extends RowDataPacket{
    Id: number
    Name: string
    Description: string
    Stages: number
    GridHeight: number
    GridWidth: number
}