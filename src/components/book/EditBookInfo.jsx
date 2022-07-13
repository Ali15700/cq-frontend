import React, { Fragment, useState } from "react";

const EditBookInfo = ({ book }) => {
  
  
  const [borrow_by, setBorrow_by] = useState(book.borrow_by);
  const [borrow_date, setBorrow_date] = useState(book.borrow_date);
  const [return_date, setReturn_date] = useState(book.return_date);

  

  //edit Book Info function

  const updateBookInfo = async e => {
    e.preventDefault();
    try {
      const body = { borrow_by, borrow_date, return_date};
      const response = await fetch(
        `http://localhost:5000/book/${book.book_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

     
      
      window.location = "/#book";
      
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.book_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${book.book_id}`}
      
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit book Details</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setBorrow_by(book.borrow_by)
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              
              <input
                type="text"
                className="form-control"
                value={borrow_by}
                onChange={e => setBorrow_by(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder='ReturnDate MM/DD/YYYY'
                value={borrow_date}
                onChange={e => setBorrow_date(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder='ReturnDate MM/DD/YYYY'
                value={return_date}
                onChange={e => setReturn_date(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateBookInfo(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() =>setBorrow_by(book.borrow_by)
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBookInfo;