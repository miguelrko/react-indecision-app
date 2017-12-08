console.log('React app is running');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

//only render the subtitle (and p tag) if subtitle exist - logical AND operator
//render new p tag -if options.length > 0 "here are your options" "no options" - ternare operator

const onFormSubmit = (e) => {
	e.preventDefault();
	console.log(e);

	const option = e.target.elements.option.value;

	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderRefresh();
	};

};

const resetArray = () => {
	app.options = [];
	renderRefresh();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};


const appRoot = document.getElementById('app');


// JSF - Javascript XML
const renderRefresh = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
			<button onClick={resetArray}>Remove All</button>
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button> Add Option</button>
			</form>
		</div>
	);


	ReactDOM.render(template, appRoot);
}

renderRefresh();