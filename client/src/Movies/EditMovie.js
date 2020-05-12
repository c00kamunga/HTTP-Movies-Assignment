import React, { useState } from "react";

const { title, director, metascore, stars } = props.movies;

const EditMovie = () => {
  const [edit, setEdit] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: "",
  });

  const changeHandler = (e) => {
    setMovie({ ...edit, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" value={edit.title} onChange={changeHandler} />
        <input type="text" name="director" value={edit.director} onChange={changeHandler}/>
        <input type="text" name="metascore" value={edit.metascore} onChange={changeHandler}/>
        <input type="text" name="stars" value={edit.stars} onChange={changeHandler}/>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditMovie;
