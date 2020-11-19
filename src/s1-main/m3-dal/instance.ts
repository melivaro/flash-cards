import axios from 'axios'

// Ig heroku
export const baseURL = 'https://neko-back.herokuapp.com/2.0'

// localhost
// export const baseURL = 'http://localhost:7542/2.0/'

export const instance = axios.create({
   baseURL,
   withCredentials: true,
})

export type ResType = {
   _id: string
   email: string
   name: string
   avatar?: string
   publicCardPacksCount: number
   created: Date
   updated: Date
   isAdmin: boolean
   verified: boolean
   rememberMe: boolean
   error: string
}