import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditMovie = (props) => {
  const [edit, setEdit] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: "",
  });

  const params = useParams();

  const hiztory = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${params.id}`)
      .then((res) => {
        setEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${params.id}`, edit)
      .then((res) => {
        hiztory.push("/");
      });
  };

  const changeHandler = (e) => {
    if (e.target.name === "stars") {
      setEdit({ ...edit, [e.target.name]: e.target.value.split(",") });
    } else {
      //first setEdit is for parsing string to an array
      setEdit({ ...edit, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={edit.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="director"
          value={edit.director}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="metascore"
          value={edit.metascore}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="stars"
          value={edit.stars}
          onChange={changeHandler}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditMovie;
