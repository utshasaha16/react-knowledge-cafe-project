import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import BookMarks from './assets/components/BookMarks/BookMarks'
import Header from './assets/components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleToAddBookMark = blog => {
    const newBookMark = [...bookmark, blog];
    setBookmark(newBookMark)
  }

  const handleMarksAsRead = ( id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove book mark', id);

    const remainingBookmark = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5 w-11/12 mx-auto'>
      <Blogs handleToAddBookMark={handleToAddBookMark}
      handleMarksAsRead={handleMarksAsRead}></Blogs>
      <BookMarks bookmark={bookmark} readingTime={readingTime}></BookMarks>
      </main>
    </>
  )
}

export default App
