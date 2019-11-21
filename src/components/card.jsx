import React from "react";

// Functional Component or Stateless component
const Card = ({ items, onEdit, onDelete }) =>
  items.map(({ id, title, note }, index) => (
    <div key={id} className="card">
      <h4 className="card__title">{title}</h4>

      {note}

      <div className="card__action">
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onEdit(index)}>Edit</button>
      </div>
    </div>
  ));

// Class component or statefull component
// class Card extends React.Component {
//   render() {
//     const { items, onEdit, onDelete } = this.props;

//     return items.map(({ id, title, note }, index) => (
//       <div key={id} className="card">
//         <h4 className="card__title">{title}</h4>

//         {note}

//         <div className="card__action">
//           <button onClick={() => onDelete(id)}>Delete</button>
//           <button onClick={() => onEdit(index)}>Edit</button>
//         </div>
//       </div>
//     ));
//   }
// }

export default Card;
