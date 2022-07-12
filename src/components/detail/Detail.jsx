import React, { Fragment, useState } from "react";

const Detail = () => {
  //student attributes
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  //Book attributes
  const [book_name, setBook_name] = useState("");
  const [author, setAuthor] = useState("");
  const [borrow_by, setBorrow_by] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [return_date, setReturn_date] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { first_name, last_name };
    
      const response = await fetch("http://localhost:5000/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } 
   
    catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm_book = async e => {
    e.preventDefault();
    try {
      const body = { book_name, author, borrow_by, borrow_date, return_date};
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
      <h1 className="text-center mt-5">Detail Page</h1>
      <h1 className="text-left mt-5">Student Details</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={first_name}
          placeholder='First Name'
          onChange={e => setFirst_name(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={last_name}
          placeholder='Last Name'
          onChange={e => setLast_name(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>


      <h1 className="text-left mt-5">Book Details</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm_book}>
        <input
          type="text"
          className="form-control"
          value={book_name}
          onChange={e => setBook_name(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        
         <input
          type="text"
          className="form-control"
          value={borrow_by}
          onChange={e => setBorrow_by(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={borrow_date}
          onChange={e => setBorrow_date(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={return_date}
          onChange={e => setReturn_date(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default Detail;