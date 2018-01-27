import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

///
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

//Como usar el nuevo plugin de properties class ES6:
// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }

//     getGreeting() {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// const getGreeting2= newSyntax.getGreeting;
// console.log(getGreeting2());