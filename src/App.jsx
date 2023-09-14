import { useState } from 'react'
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);

  const handleAddToBookmark =  blog =>{
    console.log("BOOKmark adding soon");
  }
  return (
    <>
    
    
    <div className='max-w-screen-xl px-4 mx-auto my-10'>
    <Header></Header>
     <div className='md:flex'>
     <Blogs handleAddToBookmark= {handleAddToBookmark} ></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </div>
    </>
  )
}

export default App
