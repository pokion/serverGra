import { RowDataPacket } from "mysql2"

declare global{
    namespace Express {
        export interface User extends RowDataPacket{
            id: number
            username: string
            hashed_password: Blob
        }
    }
}