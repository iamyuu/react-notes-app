import React from "react";

const Notes = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card__title">{title}</h4>

        {note}

        <div className="card__action">
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onEdit(index)}>Edit</button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">Tidak ada catatan</p>
  );

export default Notes;
