'use client'
import React from 'react'

const Search = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    console.log(e.target.value);
    
  }
  
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    console.log('Searched!');
  }
  return (
    <div className='flex gap-2 items-center justify-start md:justify-between'>
      <span>Query Text</span>
      <input onChange={handleChange} className='md:w-96 w-full accent-emerald-500 bg-[rgb(30,30,30)] border-none outline-emerald-500 focus:outline-none p-2 rounded-full' type="search" name="search" id="search" placeholder='Search here'/>
    </div>
  )
}

export default Search