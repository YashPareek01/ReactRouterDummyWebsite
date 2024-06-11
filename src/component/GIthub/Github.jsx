import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/YashPareek01')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='justify-center items-center gap-4 flex'>
        Github Followers : {data.followers}
        <img src={data.avatar_url}  alt="git picture" />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () =>{
 const response = await  fetch('https://api.github.com/users/YashPareek01')
 return response.json()
}