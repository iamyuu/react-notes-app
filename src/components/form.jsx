import React from "react";

// Functional Component or Stateless component
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

// Class component or statefull component
// class Form extends React.Component {
//   constructor() {
//     super();

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const { mode, onCreate, onUpdate } = this.props;

//     mode === "create" ? onCreate() : onUpdate();
//   }

//   render() {
//     const { onInputChange, mode, item } = this.props;

//     return (
//       <div className="card">
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="title">
//             <input
//               type="text"
//               value={item.title}
//               placeholder="Title"
//               onChange={e => onInputChange("title", e.target.value)}
//             />
//           </label>

//           <label htmlFor="note">
//             <textarea
//               required
//               value={item.note}
//               placeholder="Take a note..."
//               onChange={e => onInputChange("note", e.target.value)}
//             />
//           </label>

//           <button>{mode === "create" ? "Create" : "Save"}</button>
//         </form>
//       </div>
//     );
//   }
// }

export default Form;
