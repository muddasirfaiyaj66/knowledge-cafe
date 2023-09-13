import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
    
    
    <div className='max-w-screen-xl mx-auto my-10'>
    <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </div>
    </>
  )
}

export default App
