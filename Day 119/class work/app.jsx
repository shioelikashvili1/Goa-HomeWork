import React from 'react'
import { Link, Route, Routes, } from 'react-router'
import Layout from './components/layout'
import Books from './components/Books'
import Movies from './components/Movies'
import BookNew from './components/BookNew'
import BooksId from './components/BooksId'

export default function App() {
  return (
    <>
      <ul>
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <Link to={"/books"}>
          <li>books</li>
        </Link>
        <Link to={"/movies"}>
          <li>movies</li>
        </Link>
        <Link to={"/books/new"}>
          <li>new books</li>
        </Link>
      </ul>

      <div>
        <Routes>
          <Route path='/' />
          <Route path='/movies' element={<Movies />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BooksId />} />
          <Route path='/books/new' element={<BookNew />} />
        </Routes>
      </div>
    </>
  )
}