// VisibilityToggle - render, constructor, handleToggleVisilibity
// visibility -> false

class Visibility extends React.Component {
	
	constructor(props){
		super(props);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.state = {
			visibility: false
		}
	}

	toggleVisibility() {
		this.setState((prevState) => {
			console.log(prevState);
			return {
				visibility: !prevState.visibility
			};
		});
	}


	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleVisibility}>
					{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{this.state.visibility && (
					<p>{'Here are some details.'}</p>
				)}
			</div>
		);
	}
}

ReactDOM.render(<Visibility />, document.getElementById('app'));