import logo from "./logo.svg";
import "./App.css";
import { moviesData } from "./Data";
import AddMovie from "./componenets/AddMovie";
import { useState } from "react";
import MovieCard from "./componenets/MovieCard";
import Filter from "./componenets/Filter";
import MovieList from "./componenets/MovieList";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Descreption from "./componenets/Descreption";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("")
  const [rating, setRating] = useState(1)

const handleRating = (x) => setRating(x)
const handleChange = (e) => setText(e.target.value)
const handleAdd = (newMovie) => setMovies([...movies,newMovie])

  return (
    <div className='App'>
  <BrowserRouter>
  <Filter text={text} handleRating={handleRating} rating={rating} handleChange={handleChange} />
  <Routes>
<Route path="/" element={<MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())
   && el.rating >= rating)} />} />
  <Route path="/trailer/:id" element={<Descreption film={movies} />} />
   </Routes>
   </BrowserRouter>
   <AddMovie add={handleAdd} />
   </div>
  )
 
}

export default App;