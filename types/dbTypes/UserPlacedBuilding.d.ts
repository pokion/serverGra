import { RowDataPacket } from "mysql2"
import { Building } from "./Building"
import { Island } from "./Island"

declare interface UserPlacedBuilding extends RowDataPacket{
    Id: string
    UserID?: string
    User?: Express.User
    BuildingID?: number
    Building?: Building
    Stage: number
    IslandID?: number
    Island?: Island
}