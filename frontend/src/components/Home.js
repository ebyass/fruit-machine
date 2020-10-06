import React from 'react'
// import {Route, Redirect} from 'react-router-dom'

class Home extends React.Component {

	state = {
		float: [],
		slot1: [ 'black', 'white', 'green', 'yellow'],
		slot2: [ 'black', 'white', 'green', 'yellow'],
		slot3: [ 'black', 'white', 'green', 'yellow'],
		slot4: [ 'black', 'white', 'green', 'yellow'],
		result: []
	}

shuffle = (array) => {
	return array[Math.floor(Math.random()*array.length)]
}

	handleClick = async event => {
		console.log('hello')
		let newSlot1 = this.shuffle(this.state.slot1)
		let newSlot2 = this.shuffle(this.state.slot2)
		let newSlot3 = this.shuffle(this.state.slot3)
		let newSlot4 = this.shuffle(this.state.slot4)
		let finalResult = this.state.result
		finalResult = [ newSlot1, newSlot2, newSlot3, newSlot4]
		console.log(finalResult)
		this.setState({result: finalResult})
	}

	render() {
		return (
			<section>
				<div>
					<h1>Fruit Machine</h1>
					<button onClick={this.handleClick}>Play</button>
					<div className='slots'>
						{this.state.result.map((item, index) => ( //index added for unique key 
							<h1 key={item.index}>{item}</h1>
						))}
					</div>
					
				</div>
			</section>
		)
	}
}

export default Home