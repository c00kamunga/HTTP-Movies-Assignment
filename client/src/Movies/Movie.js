import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";



function Movie(props) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory();


console.log(params)

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    props.addToSavedList(movie);
  };

  const editMovie = () => {
    history.push(`/update-movie/${params.id}`)
  }

  const removeMovie = () => {
    axios
    .delete(`http://localhost:5000/api/movies/${params.id}`)
    .then(() => {
props.setMovieList(state => state.filter(movie => movie.id != params.id  ))
props.history.push("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <div className="edit-button" onClick={editMovie}>
        Edit
      </div>
        <div className="delete-button" onClick={removeMovie}>
          Delete
      </div>
    </div>
  );
}

export default Movie;
