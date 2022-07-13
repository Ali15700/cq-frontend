import React, { Fragment, useState } from "react";
import './detail.css'


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
      let breakCondition = true;
      const body = { first_name, last_name };
      if(first_name === "" && last_name === "") {
        alert("Please Enter name");
        breakCondition=false;
      }
      else if(last_name === "") {
        alert("Please enter last name");
        breakCondition=false;
      }
      else if(first_name === "") {
        alert("Please enter first name");
        breakCondition=false;
      }
      else if(breakCondition) {
      const response = await fetch("http://localhost:5000/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/#student";
      window.location.reload();
    }
    } 
   
    catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm_book = async e => {
    e.preventDefault();
    try {
     
      let breakCondition = true;
      const body = { book_name, author, borrow_by, borrow_date, return_date};
      if(book_name === '' && author === ''){
        alert('Please fill it in');
        breakCondition = false;
      }
      else if(book_name ===''){
        alert('Please enter a book name');
        breakCondition = false;
      }
      else if(author === ''){
        alert('Please enter a author');
        breakCondition = false;
      }
      else if(breakCondition){
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/#book";
      
      window.location.reload();
      
    }
    
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment >
      <div className="detail" id="detail">
       <div class="one">
                   <h1>Add Information</h1>
        </div>
      <h1 className="text-left mt-5 text-center">Student Details</h1>
     
      
      
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <div className="container ">
      <div className="row mx-auto form-div1">
        <input
          type="text"
          className="form-control form-control-1  mb-2 mx-auto"
          value={first_name}
          placeholder='First Name'
          onChange={e => setFirst_name(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-1"
          value={last_name}
          placeholder='Last Name'
          onChange={e => setLast_name(e.target.value)}
        />
       
        <button class="button-7 mx-auto">Submit</button>
        </div>
        </div>
      </form>
    

      <h1 className="text-left mt-5 text-center">Book Details</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm_book}>
      <div className="container ">
      <div className="row mx-auto form-div1">
        <input
          type="text"
          className="form-control form-control-1  mb-2 mx-auto"
          value={book_name}
          placeholder='Book Name'
          onChange={e => setBook_name(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-1  mb-2 mx-auto"
          placeholder='Author Name'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        
         <input
          type="text"
          className="form-control form-control-1  mb-2 mx-auto"
          placeholder='Borrow By'
          value={borrow_by}
          onChange={e => setBorrow_by(e.target.value)}
        />
        <input
          type="text" 
          onfocus="(this.type='date')"
          className="form-control form-control-1  mb-2 mx-auto"
          placeholder='BorrowDate MM/DD/YYYY'
          value={borrow_date}
          onChange={e => setBorrow_date(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-1  mb-2 mx-auto"
          placeholder='ReturnDate MM/DD/YYYY'
          value={return_date}
          onChange={e => setReturn_date(e.target.value)}
        />
        
         <button class="button-7 mb-5">Submit</button>
         </div>
         </div>
      </form>
      </div>
    </Fragment>
  );
};

export default Detail;