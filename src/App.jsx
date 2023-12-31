import { useState } from 'react'
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);
  const [readingTime, setReadingTime] =useState(0);

  const handleAddToBookmark =  blog =>{
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  };
  return (
    <>
    
    
    <div className='max-w-screen-xl px-4 mx-auto my-10'>
    <Header></Header>
     <div className='md:flex'>
     <Blogs handleAddToBookmark= {handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks  bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </div>
    </>
  )
}

export default App
