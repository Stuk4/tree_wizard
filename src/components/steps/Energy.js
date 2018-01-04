import React, {Component} from 'react'

export default class Energy extends  Component {

	constructor(props){
		super(props);
		this.state = {
			reciboElectricidad : props.getHuellaCarbonoData().reciboElectricidad
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
			reciboElectricidad : this.refs.reciboElectricidad.value
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Energia</h3>
					</div>
					<div class="panel-body">

						<p>
							Cuantas gastas de energia electrica al mes?
						</p>

						<p>
							<input type="number"
							ref = "reciboElectricidad"
							defaultValue = {this.state.reciboElectricidad}
							class="form-control" placeholder="Monto del recibo"/>
						</p>

					</div>
				</div>

			</div>
		)
	}

}
