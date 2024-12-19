import { RowDataPacket } from "mysql2"
import { Crop } from "./Crop"
import { Island } from "./Island"

declare interface UserPlacedCrop extends RowDataPacket{
    Id: string
    UserID?: string
    User?: Express.User
    CropID?: number
    Crop?: Crop
    PlantTime: Date
    IslandID?: number
    Island?: Island
    HarvestTime: Date
}