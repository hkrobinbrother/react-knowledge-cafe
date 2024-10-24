

import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Heder/Header'

function App() {

  const [bookmarks, setBooksmarks]= useState([]);

  const handleAddToBookmark = blog =>{
    console.log('book mark adding soon');
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    
    </>
  )
}

export default App
