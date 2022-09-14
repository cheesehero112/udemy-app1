import React from "react";
import ReactDOM from "react-dom/client";
import IndescisionApp from "./components/IndescisionApp";

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IndescisionApp />);

// // this is the old way
// class OldSyntax {
//   constructor() {
//     this.name = "Mike";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // this is the new way!

// class NewSyntax {
//   name = "Jen";
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`;
//   };
// }
// const newSyntax = new NewSyntax();
// const newGetgreeting = newSyntax.getGreeting;
// console.log(newGetgreeting());
