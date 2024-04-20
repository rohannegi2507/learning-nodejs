import { createUser, getUserByEmail } from '../db/users'
import express from  'express'

export const register = async (req: express.Request, res: express.Response) => {
      console.log('register', req.body)
      try
      {

        const { email, userName, password} = req.body

        if(!email || !userName || !password){
          return res.sendStatus(400)
        }

        const existingUser = await getUserByEmail(email)

        if(existingUser)
        {
          return res.sendStatus(400)
        }

       const user = await createUser({email,password, userName})
       if(user)
        {
          return res.sendStatus(200)
        }

      }catch(error){
        return res.sendStatus(400)
      }
}

export const login = async (req:express.Request, res:express.Response) => {
  try
  {
    const {email, password} =  req.body
    
    if(!email || !password)
    {
      return res.sendStatus(400)
    }

    const existingUser = await getUserByEmail(email)

    if(existingUser.password === password) {
      return res.sendStatus(200)
    }else{
      return res.sendStatus(400)
    }


  } catch (error){
    return res.sendStatus(400)
  }

}