import React, { Fragment, useState } from "react";


const EditStudent = ({ student }) => {
  const [first_name, setFirst_name] = useState(student.first_name);
  const [last_name, setLast_name] = useState(student.last_name);

  //edit Name function

  const updateName = async e => {
    e.preventDefault();
    try {
      const body = { first_name, last_name};
      const response = await fetch(
        `http://localhost:5000/student/${student.student_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/#student";
      
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
    <div className="edit">
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${student.student_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${student.student_id}`}
       
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Student Details</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setFirst_name(student.first_name) + setLast_name(student.last_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={e => setFirst_name(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={e => setLast_name(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFirst_name(student.first_name) + setLast_name(student.last_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default EditStudent;