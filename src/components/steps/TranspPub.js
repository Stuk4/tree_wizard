import React, { Component }from 'react'

export default class TranspPub extends Component {

	constructor(props){
		super(props);
		this.state = {
			combi : props.getHuellaCarbonoData().combi,
			trenElectrico : props.getHuellaCarbonoData().trenElectrico,
			metropolitano : props.getHuellaCarbonoData().metropolitano
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
			combi : this.refs.combi.value,
			trenElectrico : this.refs.trenElectrico.value,
			metropolitano : this.refs.metropolitano.value
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Transporte Publico</h3>
					</div>
					<div class="panel-body">

					<p className="text-center">
						<img src="bus.png"/>
					</p>


						<p>
							Cuantas horas semanales usas estos servicios?
						</p>
						<form id="Form" className="form-horizontal">
						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-2">
															Bus/Combi
														</label>

														<div className="col-md-3">
															<input type="number" ref="combi"
															class="form-control"
															placeholder="Horas"
															defaultValue={this.state.combi}
															/>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-2">
														 Tren Electrico
													 </label>

													 <div className="col-md-3">
														 <input type="number" ref="trenElectrico"
														 class="form-control" placeholder="Horas"
														 defaultValue={this.state.trenElectrico}/>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-2">
														Metropolitano
													</label>

													<div className="col-md-3">
														<input type="number" ref="metropolitano" class="form-control" placeholder="Horas" defaultValue={this.state.metropolitano}/>
													</div>
				 </div>
				 </form>


					</div>
				</div>

			</div>
		)
	}


}
