import React, { Fragment, useEffect, useState } from "react";
import './edit.css';
import EditStudent from "./EditStudent";

const ListStudent = () => {
  const [student, setStudent] = useState([]);

  //delete student function

  const deleteStudent = async id => {
    try {
      const deleteStudent = await fetch(`http://localhost:5000/student/${id}`, {
        method: "DELETE"
      });

      setStudent(student.filter(student => student.student_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getStudent = async () => {
    try {
      const response = await fetch("http://localhost:5000/student");
      const jsonData = await response.json();

      setStudent(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  console.log(student);

  return (
    <Fragment >
     <div className="list" id="student">
     <div class="one">
                   <h1>Student List</h1>
        </div>
      <table class="table mt-5 text-center">
        <thead>
          <tr class="p-3 mb-2 bg-primary text-white">
            <th >First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {student.map(student => (
            <tr key={student.student_id}>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>
                <EditStudent student={student} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStudent(student.student_id)}
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

export default ListStudent;