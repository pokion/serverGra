import { RowDataPacket } from "mysql2"

declare interface Crop extends RowDataPacket{
    Id: number
    Name: string
    Description: string
    GrowthTime: number
    ItemHarvest: number
    HarvestQuantity: number
}