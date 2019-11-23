import React from "react";

function Form({ onCreate, onUpdate, onInputChange, mode, item = {} }) {
  const handleSubmit = e => {
    e.preventDefault();

    mode === "create" ? onCreate() : onUpdate();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            value={item.title}
            placeholder="Title"
            onChange={e => onInputChange("title", e.target.value)}
          />
        </label>

        <label htmlFor="note">
          <textarea
            required
            value={item.note}
            placeholder="Take a note..."
            onChange={e => onInputChange("note", e.target.value)}
          />
        </label>

        <button>{mode === "create" ? "Create" : "Save"}</button>
      </form>
    </div>
  );
}

export default Form;
