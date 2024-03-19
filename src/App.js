import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItems from "./SearchItems";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: " Item01 " },
    { id: 2, checked: true, item: " Item02 " },
    { id: 3, checked: true, item: " Item03 " },
  ]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItems = { id, checked: false, item };
    const listItems = [...items, addNewItems];
    setItems(listItems);
    localStorage.setItem = ("todo_list", JSON.stringify(listItems));
  };

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem = ("todo_list", JSON.stringify(listItems));
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem = ("todo_list", JSON.stringify(listItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="Ap">
      <Header title="My Todo App" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}
export default App;
