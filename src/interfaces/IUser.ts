import { number, string } from "zod"

export interface IUsers{
    id: number
    name: string
    email: string
    password: string
}