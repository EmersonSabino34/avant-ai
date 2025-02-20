import { number, string } from "zod"

export interface ILogin{
    email: string
    password: string
}