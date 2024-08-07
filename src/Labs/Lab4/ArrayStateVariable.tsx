import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success mb-2"
        onClick={addElement}>Add Element</button>

      <ul className="list-group">
        <div className="row">
          {array.map((item, index) => (
            <div key={index} >
              <li className="list-group-item col-3 m-1">

                {item}
                <button className="btn btn-danger btn-sm ms-2 float-end"
                  onClick={() => deleteElement(index)}
                  id="wd-delete-element-click">
                  Delete</button>
              </li>
            </div>
          ))}
        </div>
      </ul>
      <hr />
    </div>
  );
}
