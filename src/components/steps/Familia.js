import React, {Component} from 'react'

export default class Familia extends Component {

	constructor(props){
		super(props);
		this.state = {
			familia : props.getHuellaCarbonoData().familia
		}
	}

	isValidated() {
		const data = this._saveData();
		this.props.update({
			...data
		});
		return true;
	}

	_saveData(){
		return {
			familia : this.refs.familia.value
		}
	}

 render(){
	 return (
 		<div>

 			<div class="panel panel-primary">
 				<div class="panel-heading">
 					<h3 class="panel-title">Familia</h3>
 				</div>
 				<div class="panel-body">

					<p className="text-center">
						<img src="family.png"/>
					</p>

 					<p>
 						Cuantas personas viven en tu casa ?
 					</p>

 					<p>
 					<select id="title"
						name="title"
						class="form-control"
						ref="familia"
						defaultValue = {this.state.familia}
						>
 						<option value="">Selecciona</option>
 						<option value="1">1</option>
 						<option value="2">2</option>
 						<option value="3">3</option>
 						<option value="4">4</option>
 						<option value="5">5</option>
 						<option value="6">6</option>
 					</select>
 					</p>

 				</div>
 			</div>

 		</div>
 	)
 }


}
