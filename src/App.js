import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getemploymentsAction,
  addemploymentAction,
  deleteemploymentAction,
  updateemploymentAction,
} from "./redux/actions";
const App = ({
  getemployments,
  employments,
  addemployment,
  delemployment,
  editemployment,
}) => {
  const [input, setInput] = useState("");
  const [employment, setemployment] = useState({});

  const [editemployments, setEditemployments] = useState({
    isEdit: false,
    key: 0,
  });

  useEffect(() => {
    getemployments();
    // eslint-disable-next-line
  }, []);
  const handleClick = () => {
    if (input !== "") {
      addemployment({
        id: Math.random(),
        title: input,
      });
      setInput("");
    }
  };
  const editHandle = (employment, key) => {
    setEditemployments({ isEdit: true, key: key });
    setemployment(employment);
    setInput(employment.title);
  };
  const editemploymentHandle = () => {
    let temp = employment;
    temp.title = input;
    setemployment(temp);
    editemployment(employment, editemployments.key);
    setEditemployments({ isEdit: false });
    setInput("");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <input
            placeholder="employment"
            value={input}
            onChange={handleInput}
          />
          {editemployments.isEdit ? (
            <button onClick={editemploymentHandle}>edit employment</button>
          ) : (
            <button onClick={handleClick}>add employment</button>
          )}
        </div>
        <ul>
          {employments.map((employment, key, index) => (
            <li key={key}>
              <span>{employment.title}</span>
              <button onClick={(data) => delemployment(employment, key)}>
                Del
              </button>
              <button onClick={() => editHandle(employment, key)}> Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employments: state.employments,
});

const mapDispatchToProps = (dispatch) => ({
  getemployments: () => dispatch(getemploymentsAction()),
  addemployment: (data) => dispatch(addemploymentAction(data)),
  delemployment: (data, key) => dispatch(deleteemploymentAction(data, key)),
  editemployment: (data, key) => dispatch(updateemploymentAction(data, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
