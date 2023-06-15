import React from 'react'

const getAllProducts = () => {
   
            
  return ( fetch('https://dummyjson.com/products')
  .then(res => res.json())
    
  )
}

export default getAllProducts