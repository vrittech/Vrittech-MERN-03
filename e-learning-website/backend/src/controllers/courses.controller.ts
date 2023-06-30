import { Request, Response } from "express"

export const createCourses = (req: Request, res: Response,) => {
    try {
        const data = req.body;
    } catch (error) {
        console.log(error)
    }
}