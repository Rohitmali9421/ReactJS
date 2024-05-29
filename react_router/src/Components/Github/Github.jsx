import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const Data =useLoaderData()
  return (
    <div className="bg-gray-600 text-center" >
      <h1 className='text-white font-bold '>Github:{Data.followers}</h1>
      <img className='h-36 w-36 rounded-full m-auto' src={Data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export  const githubInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/hiteshChoudhary")
  return response.json()
}