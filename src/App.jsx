

import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Heder/Header'

function App() {

  const [bookmarks, setBooksmarks]= useState([]);
  const [readingTime, setReadingTime]=useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks =[...bookmarks, blog];
    setBooksmarks(newBookmarks);
  }
  
  const handleMarksAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove book murk ', id);
    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !==id);
    setBooksmarks(remainingBookmarks)
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarksAsRead={handleMarksAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    
    </>
  )
}

export default App
