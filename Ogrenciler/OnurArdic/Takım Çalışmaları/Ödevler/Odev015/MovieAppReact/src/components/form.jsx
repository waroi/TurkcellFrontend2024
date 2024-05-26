/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const Form = ({ addMovie, movieToEdit, onEdit }) => {
  const [onName, setMovieName] = useState('')
  const [onDirector, setOnDirector] = useState('')
  const [onMovieYear, setMovieYear] = useState('')
  const [onCategories, setOnCategories] = useState('')
  const [onPoster, setOnPoster] = useState('')

  useEffect(() => {
    if (movieToEdit) {
      setMovieName(movieToEdit.movieName)
      setOnDirector(movieToEdit.movieDirector)
      setMovieYear(movieToEdit.movieYear)
      setOnCategories(movieToEdit.movieCategories)
      setOnPoster(movieToEdit.moviePoster)
    }
  }, [movieToEdit])

  const submitHandler = (e) => {
    e.preventDefault()

    const movie = {
      id: movieToEdit ? movieToEdit.id : Math.floor(Math.random() * 1000).toString(),
      movieName: onName,
      movieDirector: onDirector,
      movieYear: onMovieYear,
      movieCategories: onCategories,
      moviePoster: onPoster,
    }

    if (movieToEdit) {
      fetch(`http://localhost:3000/movie/${movie.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      })
        .then((response) => response.json())
        .then((data) => {
          onEdit(data)
          resetForm()
        })
    } else {
      fetch('http://localhost:3000/movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      })
        .then((response) => response.json())
        .then((data) => {
          addMovie(data)
          resetForm()
        })
    }
  }

  const resetForm = () => {
    setMovieName('')
    setOnDirector('')
    setMovieYear('')
    setOnCategories('')
    setOnPoster('')
  }

  return (
    <form onSubmit={submitHandler} className="flex gap-1 justify-center">
      <div className="form-input">
        <input
          type="text"
          placeholder="Film Adı"
          className="border p-1"
          value={onName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>
      <div className="form-input">
        <input
          type="text"
          placeholder="Film Yönetmeni"
          className="border p-1"
          value={onDirector}
          onChange={(e) => setOnDirector(e.target.value)}
        />
      </div>
      <div className="form-input">
        <select
          className="border p-1"
          value={onCategories}
          onChange={(e) => setOnCategories(e.target.value)}
        >
          <option value="">Kategori Seç</option>
          <option value="Aksiyon">Aksiyon</option>
          <option value="Drama">Drama</option>
          <option value="Gerilim">Gerilim</option>
        </select>
      </div>
      <div className="form-input">
        <input
          type="text"
          placeholder="Filmin çıkış yılı"
          className="border p-1"
          value={onMovieYear}
          onChange={(e) => setMovieYear(e.target.value)}
        />
      </div>
      <div className="form-input">
        <input
          type="text"
          placeholder="Afiş Resmi"
          className="border p-1"
          value={onPoster}
          onChange={(e) => setOnPoster(e.target.value)}
        />
      </div>
      <div className="form-input">
        <button type="submit" className="p-1 border bg-slate-300">
          {movieToEdit ? 'Güncelle' : 'Filmi Kaydet'}
        </button>
      </div>
    </form>
  )
}

export default Form
