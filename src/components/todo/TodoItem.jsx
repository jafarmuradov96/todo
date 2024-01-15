import { useState } from "react";
import Button from "../UI/Button";
import "./TodoItem.css";

const TodoItem = ({ item, handleCheckboxChange, deleteRow, handleEditModal, select}) => {
  const [dateInfo, setDateInfo] = useState({
    id: item.id,
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });


  return (
    <>
      <li className="list" key={item.id}>
        <div className="list-left">
          <div className="checkbox">
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </div>
          <div className="list-content">
            <span className={`title ${item.isChecked ? "checked" : ""}`}>
              {item.title}
              </span>
          </div>
        </div>

        <div className="btns">
        <div className="new-date" key={dateInfo.id}>
            <span className="clock">
              {dateInfo.hour < 10 ? "0" + dateInfo.hour : dateInfo.hour}:
              {dateInfo.minute < 10 ? "0" + dateInfo.minute : dateInfo.minute}
            </span>
            <span className="date">
              {dateInfo.date < 10 ? "0" + dateInfo.date : dateInfo.date}/
              {dateInfo.month < 10 ? "0" + dateInfo.month : dateInfo.month}/
              {dateInfo.year}
            </span>
          </div>

          <div
            className={`result ${item.isChecked ? "completed" : "incompleted"}`}
          >
            {item.isChecked ? "Complete" : "Incomplete"}
          </div>

          <Button className="delete" onClick={() => deleteRow(item.id)}>
            {" "}
            Delete{" "}
          </Button>
          <Button
            className="edit"
            onClick={() =>
              handleEditModal(item.id, item.title, item.select, item.isChecked)
            }
          >
            Edit
          </Button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
