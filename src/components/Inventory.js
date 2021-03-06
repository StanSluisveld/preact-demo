import { h, Component } from "preact";
import AddFishForm from './AddFishForm';

class Inventory extends Component{

	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		};

	handleChange(e, key){
		const fish = this.props.fishes[key];
		//console.log(fish);
		// maak een copy van de vis en update het met nieuwe data
		const updatedFish = {...fish,
		[e.target.name]: e.target.value	
		}
		this.props.updateFish(key, updatedFish)
		
	}  
	
	renderInventory(key){	
		
		const fish = this.props.fishes[key];

		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)} />
				<input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
				<select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea type="text" name="desc" value={fish.desc} placeholder="" onChange={(e) => this.handleChange(e, key)} >
				</textarea>
				<input type="text" name="image" value={fish.image} placeholder="" onChange={(e) => this.handleChange(e, key)} />
				<button onClick={() => this.props.removeFish(key)}>remove Fish </button>
			</div>
		)
	}
	
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load samples</button>
			</div>
		)
	}
}

// Inventory.propTypes = {
// 	fishes: React.PropTypes.object.isRequired,
// 	updateFish: React.PropTypes.func.isRequired,
// 	removeFish: React.PropTypes.func.isRequired,
// 	addFish: React.PropTypes.func.isRequired,
// 	loadSamples: React.PropTypes.func.isRequired, 
// }

export default Inventory; 