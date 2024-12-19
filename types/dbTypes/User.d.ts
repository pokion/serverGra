import { RowDataPacket } from "mysql2"

declare global{
    namespace Express {
        export interface User extends RowDataPacket{
            Id: string
            Provider: string
            DisplayName: string
            Email: string
            Password: Blob
        }
    }
}