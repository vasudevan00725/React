import React from "react";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
        checked={item.checked}
      >
        {item.item}
      </label>

      <button type="checkbox" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default LineItem;
