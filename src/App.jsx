import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import BookMarks from './assets/components/BookMarks/BookMarks'
import Header from './assets/components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleToAddBookMark = blog => {
    const newBookMark = [...bookmark, blog];
    setBookmark(newBookMark)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5 w-11/12 mx-auto'>
      <Blogs handleToAddBookMark={handleToAddBookMark}></Blogs>
      <BookMarks bookmark={bookmark}></BookMarks>
      </main>
    </>
  )
}

export default App
