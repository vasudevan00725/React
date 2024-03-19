import React from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <lable htmlfor="addItem"> </lable>
      <input
        type="text"
        autoFocus
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddItem;
