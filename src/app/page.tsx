import {Fetchdata} from '../app/api/page'
import React from 'react'

export default async function Home1() {
  const book: Books[]= await Fetchdata()
  return (
    <>
    <div>
      Books 
    
    {book?.map((item:any)=>(
      <div className=" bg-green-300 m-5 " key={item.id}>
        <h3>{item.id}</h3>
       <h1> {item.name}</h1>
       <h2>{item.type}</h2>
       <h4>{item.available}</h4>
         </div>
      
    )

    )}
  </div>
    </>
  )
}




