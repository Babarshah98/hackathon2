 import { NextResponse } from "next/server"
 
 export async function Fetchdata() {
    
    
    const response= await fetch('https://simple-books-api.glitch.me/books')
    const library= await response.json()
    console.log(library)
    return library

     
    
    
        
    
}








 
    
    

    
  



