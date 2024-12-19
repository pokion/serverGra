import { Request, Response, NextFunction } from "express"

export default function isAuthenticated (req: Request, res: Response, next: NextFunction) {
	//@ts-ignore
	if (req.session.passport) next() //TODO nie wiem czemu tutaj passport jest źle :(
	else res.status(403).send('Forbidden')
}