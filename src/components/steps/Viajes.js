import React, { Component }from 'react'

export default class Viajes extends Component {


	constructor(props){
		super(props);
		this.state = {
			avion : props.getHuellaCarbonoData().avion,
			automovil : props.getHuellaCarbonoData().automovil,
			bus : props.getHuellaCarbonoData().bus,
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
			avion : this.refs.avion.value,
			automovil : this.refs.automovil.value,
			bus : this.refs.bus.value,
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Viajes</h3>
					</div>
					<div class="panel-body">

						<p>
							Cuantas horas al año viajas en los siguientes medios de transporte?
						</p>
						<form id="Form" className="form-horizontal">
						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-2">
															Avion
														</label>

														<div className="col-md-3">
															<input type="number" ref="avion" defaultValue={this.state.avion} class="form-control" placeholder="Horas"/>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-2">
														 Automovil
													 </label>

													 <div className="col-md-3">
														 <input type="number" ref="automovil" defaultValue={this.state.automovil} class="form-control" placeholder="Horas"/>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-2">
														Bus
													</label>

													<div className="col-md-3">
														<input type="number"  ref="bus" defaultValue={this.state.bus}  class="form-control" placeholder="Horas"/>
													</div>
				 </div>
				 </form>


					</div>
				</div>

			</div>
		)
	}


}
