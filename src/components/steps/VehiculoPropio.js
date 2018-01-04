import React, { Component }from 'react'

export default class VehiculoPropio extends Component {

	constructor(props){
		super(props);
		this.state = {
			cilindraje : props.getHuellaCarbonoData().cilindraje,
			tipoCombustible : props.getHuellaCarbonoData().tipoCombustible,
			gastoCombustible : props.getHuellaCarbonoData().gastoCombustible,
			edadVehiculo : props.getHuellaCarbonoData().edadVehiculo,
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
			cilindraje : this.refs.cilindraje.value,
			tipoCombustible : this.refs.tipoCombustible.value,
			gastoCombustible : this.refs.gastoCombustible.value,
			edadVehiculo : this.refs.edadVehiculo.value,
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Vehiculo Propio</h3>
					</div>
					<div class="panel-body">

					<p className="text-center">
						<img src="car.png"/>
					</p>

						<p>
							Que tipo de vehiculo tienes?
						</p>

						<form id="Form" className="form-horizontal">

						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-2">
															Cilindraje
														</label>

														<div className="col-md-3">
														<select id="title"
															ref="cilindraje"
															name="title"
															class="form-control"
															defaultValue = {this.state.cilindraje}>
															<option value="" selected>Selecciona</option>
															<option value="1">hasta 1200cc</option>
															<option value="2">hasta 2000cc</option>
															<option value="3">mas de 2000cc</option>
														</select>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-2">
														 Tipo de combustible
													 </label>

													 <div className="col-md-3">
														 <select id="title" ref="tipoCombustible" defaultValue={this.state.tipoCombustible} name="title" class="form-control">
 															<option value="" selected>Selecciona</option>
 															<option value="1">Gasolina</option>
 															<option value="2">Diesel</option>
 															<option value="3">GLP</option>
															<option value="4">GNV</option>
 														</select>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-2">
														Cuanto gastas en combustible a la semana?
													</label>

													<div className="col-md-3">
														<input type="number" ref="gastoCombustible" defaultValue={this.state.gastoCombustible} class="form-control" placeholder="Horas"/>
													</div>
				 </div>

				 <div className="form-group col-md-12 content form-block-holder">
				 								<label className="control-label col-md-2">
				 									Edad de tu vehiculo?
				 								</label>

				 								<div className="col-md-3">
				 									<input type="number" ref="edadVehiculo" defaultValue={this.state.edadVehiculo} class="form-control" placeholder="Años"/>
				 								</div>
				 </div>

				 </form>



					</div>
				</div>

			</div>
		)
	}


}
