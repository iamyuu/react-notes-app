import React, { useState } from "react";
import Card from "components/card";
import Form from "components/form";
import initialState from "./items";

function App() {
  const [mode, setMode] = useState("create");
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

  const handleEdit = index => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleUpdate = () => {
    const index = items.findIndex(item => item.id === formItem.id);
    const updatedItems = [...items];
    updatedItems[index] = formItem;

    setMode("create");
    setItems(updatedItems);
    setFormItem({ title: "", note: "" });
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  return (
    <>
      <Form
        mode={mode}
        item={formItem}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onInputChange={handleInputChange}
      />

      <br />

      <Card items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default App;
