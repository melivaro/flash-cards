import React from 'react'
import { SuperButton } from '../../../../s1-main/m1-ui/u0-common/c2-SuperButton/SuperButton'
import { useDispatch } from 'react-redux'

type PropsType = {
   name: string | null
   email: string | null
   logout: () => void
}

export const Profile = ({ name, email, logout }: PropsType) => {
   return (
      <div>
         <h2>Profile</h2>
         <span>Name: {name}</span>
         <span>Email: {email}</span>
         <SuperButton onClick={logout}>Log out</SuperButton>
      </div>
   )
}