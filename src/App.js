import React from 'react'

class App extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			data: 0
		}
		
		this.setNewNumber = this.setNewNumber.bind(this)
	}
	
	setNewNumber() {		
		this.setState({
			data: parseInt(this.state.data) + 1
		})
	}
	
	render() {
		return(
			<div>
				<button onClick={this.setNewNumber}>INCREMENT</button>
				<Content myNumber={this.state.data} />
			</div>
		)
	}
}

class Content extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			data: 0
		}
	}
	
	//-- component mount
	
	componentWillMount() {
		this.setState({data: this.props.myNumber})
		console.log('componentWillMount')
	}
	
	componentDidMount() {
		this.setState({data: this.props.myNumber})
		console.log('componentDicMount')
	}
	
	//-- before render
	
	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps', newProps)
	}
	
	//-- should render
	
	shouldComponentUpdate(newPops, newState) {
		console.log('shouldComponentUpdate', newPops, newState)
		return true
	}
	
	//---component update
	
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate', nextProps, nextState)
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate', prevProps, prevState)
	}
	
	//--- component unmount
	
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
	
	render() {
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		)
	}
}

export default App