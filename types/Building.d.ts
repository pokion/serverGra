import { RowDataPacket } from "mysql2"

declare interface Building extends RowDataPacket{
    id: number
    name: string
    description: string
    stages: number
}