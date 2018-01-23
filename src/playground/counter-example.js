class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		try {
			const count = parseInt(localStorage.getItem('Count'), 10);
			if(!isNaN(count)){
				this.setState(() => ({count}));
			}
		} catch (e) {
			//do nothing here
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.count !== prevState.count)
			localStorage.setItem('Count', this.state.count)
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
			);
	}
}


ReactDOM.render(<Counter />, document.getElementById('app'));

/// let count = 0;

// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };

// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };

// const reset = () => {
// 	count=0;
// 	renderCounterApp();
// };




// const renderCounterApp = () => {
// const templateTwo = (
// 	<div>
// 		<h1>Count: {count}</h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={minusOne}>-1</button>
// 		<button onClick={reset}>reset</button>
// 	</div>
// );

// // Challenge
// // Make button "-1" - setup minusOne func and register - log minusOne
// // Make reset button "reset" - setup reset function - log reset

// ReactDOM.render(templateTwo, appRoot);

// }

// renderCounterApp();