import React, {Component} from 'react'

export default class Gas extends Component {

	constructor(props){
		super(props);
		this.state = {
			reciboGasNatural : props.getHuellaCarbonoData().reciboGasNatural,
			balonesGas : props.getHuellaCarbonoData().balonesGas
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
			reciboGasNatural : this.refs.reciboGasNatural.value,
			balonesGas : this.refs.balonesGas.value
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Gas</h3>
					</div>
					<div class="panel-body">

					<p className="text-center">
						<img src="gas.png"/>
					</p>

						<p>
							Cuantas gastas en gas natural?
						</p>

						<p>
							<input type="number"
								ref="reciboGasNatural"
								class="form-control"
								placeholder="Monto del recibo"
								defaultValue = {this.state.reciboGasNatural}/>
						</p>

						<p>
						 Cuantos balones (10kg) consumen al mes tu casa?
						</p>

						<p>
							<input type="number"
								ref="balonesGas"
								class="form-control"
								placeholder="Balones de gas"
								defaultValue={this.state.balonesGas}/>
						</p>

					</div>
				</div>

			</div>
		)
	}


}
