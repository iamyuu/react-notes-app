import React from "react";
import Notes from "components/notes";
import Form from "components/form";
import initialState from "./items";

class App extends React.Component {
  constructor() {
    super();

    this.handleEdit = this.handleEdit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    mode: "create",
    items: initialState,
    formItem: {
      title: "",
      note: ""
    }
  };

  handleInputChange(name, value) {
    const { formItem } = this.state;
    const newFormitem = { ...formItem, [name]: value };

    this.setState({ formItem: newFormitem });
  }

  handleCreate() {
    const { items, formItem } = this.state;
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title,
      note
    };

    this.setState({
      items: [...items, newItems],
      formItem: { title: "", note: "" }
    });
  }

  handleUpdate() {
    const { items, formItem } = this.state;
    const index = items.findIndex(item => item.id === formItem.id);

    const updatedItems = [...items];
    updatedItems[index] = formItem;

    this.setState({
      mode: "create",
      items: updatedItems,
      formItem: { title: "", note: "" }
    });
  }

  handleEdit(index) {
    const { items } = this.state;

    this.setState({
      mode: "edit",
      formItem: items[index]
    });
  }

  handleDelete(id) {
    const { items } = this.state;
    const newItems = items.filter(item => item.id !== id);

    this.setState({
      items: newItems,
      formItem: { title: "", note: "" }
    });
  }

  render() {
    const { mode, items, formItem } = this.state;

    return (
      <>
        <Form
          mode={mode}
          item={formItem}
          onCreate={this.handleCreate}
          onUpdate={this.handleUpdate}
          onInputChange={this.handleInputChange}
        />

        <br />

        <Notes
          items={items}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
