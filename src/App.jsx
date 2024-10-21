import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import BookMark from './assets/components/BookMark/BookMark'
import Header from './assets/components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex w-11/12 mx-auto'>
      <Blogs></Blogs>
      <BookMark></BookMark>
      </main>
    </>
  )
}

export default App
