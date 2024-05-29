import React from 'react'
import {useParams} from "react-router-dom"
function User() {
    const {id}=useParams()
  return (
    <div className="font-bold text-center text-2xl text-blue-950">
      User:{id}
    </div>
  )
}

export default User
