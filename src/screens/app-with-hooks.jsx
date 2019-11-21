import React, { useState } from "react";
import Card from "../components/card";
import Form from "../components/form";
import initialState from "./items";

function App() {
  const [items, setItems] = useState(initialState);
  const [formItem, setFormItem] = useState({ title: "", note: "" });

  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };

  const handleCreate = () => {
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title,
      note
    };

    setItems([...items, newItems]);
    setFormItem({ title: "", note: "" });
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  return (
    <>
      <Form
        mode="create"
        item={formItem}
        onCreate={handleCreate}
        onUpdate={console.log}
        onInputChange={handleInputChange}
      />

      <br />

      {items.length ? (
        <Card items={items} onDelete={handleDelete} />
      ) : (
        <p className="text-center">Tidak ada data</p>
      )}
    </>
  );
}

export default App;
