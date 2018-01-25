// import {square, add } from './utils.js';
// import isSenior, {isAdult, canDrink } from './person.js';
// //para los default:
// //import defaultnamethatyouwant, {square, add} from './utils.js';

// console.log('webpack configuration test');

// console.log(square(5));
// console.log(add(50, 50));

// //Challenge: create person.js
// //named export isAdult(18) - true if adult, otherwise false
// //named export canDrink(18) - true if 21 and over, otherwise false
// //import isAdult and canDrin
// //use both printing result to the console
// console.log('I am an adult ', isAdult(19));
// console.log('Can i drink? ', canDrink(19));
// console.log('Am i too old? ', isSenior(61));

//import npm modules
//install -> import -> use
// import validator from 'validator';

// console.log(validator.isEmail('test@mail.com'));

class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			if(options) {
				this.setState(() => ({options}));
			}	
		} catch (e) {
			//do nothing here
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ( {
			options: prevState.options.filter((option) => optionToRemove !== option )
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if(!option) {
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}

	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action 
				 hasOptions={this.state.options.length > 0}
				 handlePick={this.handlePick}
				/>
				<Options 
				 options={this.state.options}
				 handleDeleteOptions={this.handleDeleteOptions}
				 handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption 
				 handleAddOption={this.handleAddOption}
				/>
			</div>
			)
	}
}
///
const Header = (props) => {
		return (
			<div>
				<h1>{props.title}</h1>
				<h2>{props.subtitle}</h2>
			</div>
		);
};
///
const Action = (props) => {
	return (
		<div>
			<button 
			 onClick={props.handlePick}
			 disabled={!props.hasOptions}
			>What should I do?</button>
		</div>
	);
};
//
const Options = (props) => {
		return (
			<div>
				<button onClick={props.handleDeleteOptions}>Remove All</button>
				{props.options.length === 0 && <p>Please add an option to get started!</p>}
				{
					props.options.map((option) => (
					<Option 
					 key={option} 
					 optionText={option}
					 handleDeleteOption={props.handleDeleteOption}
					/>))
				}
			</div>
		);
};

//
const Option = (props) => {
		return (
			<div>
				{props.optionText}
				<button onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
				>
				Remove</button>
			</div>
		);
};

/// Setup the form with the text input and submit button
// wire up onSubmit
// handleAddOption -> fetch the value typed -> if value then alert

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();
		
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState(() => ({ error }));

		if(!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
				<input type='text' name='option'/>
				<button>Add Option</button>
				</form>
			</div>
		)
	}
}

//Stateless functional component example
/*
const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};
*/
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));