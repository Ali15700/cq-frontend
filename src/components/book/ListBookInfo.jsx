import React, { Fragment, useEffect, useState } from "react";
import './bookinfo.css';
import EditBookInfo from "./EditBookInfo";

const ListBookInfo = () => {
  const [book, setBook] = useState([]);

  //delete Book function

  const deleteBook = async id => {
    try {
      const deleteBook = await fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE"
      });

      setBook(book.filter(book => book.book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBook = async () => {
    try {
      const response = await fetch("http://localhost:5000/book");
      const jsonData = await response.json();

      setBook(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBook();
  }, []);



  return (
    <Fragment>
      {" "}
       
           <div>        
      <h1 class=" text-center">Book Details</h1>
      <table class="table mt-5 text-center">
        
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Borrow By</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {book.map(book => (
            <tr key={book.book_id}>
              <td>{book.book_name}</td>
              <td>{book.author}</td>
              <td>{book.borrow_by}</td>
              <td>{book.borrow_date}</td>
              <td>{book.return_date}</td>
              <td>
              <EditBookInfo book={book} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.book_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default ListBookInfo;