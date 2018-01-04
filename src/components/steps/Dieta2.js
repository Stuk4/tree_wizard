import React, { Component }from 'react'

export default class Dieta2 extends Component {


	constructor(props){
		super(props);
		this.state = {
			pan : props.getHuellaCarbonoData().pan,
			cereales : props.getHuellaCarbonoData().cereales,
			frutas : props.getHuellaCarbonoData().frutas,
			vegetales : props.getHuellaCarbonoData().vegetales,
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
			pan : this.refs.pan.value,
			cereales : this.refs.cereales.value,
			frutas : this.refs.frutas.value,
			vegetales : this.refs.vegetales.value,
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Dieta Vegetal</h3>
					</div>
					<div class="panel-body">

					<p className="text-center">
						<img src="food2.png"/>
					</p>

						<p>
							Sobre tu dieta, cuantas porciones de productos de origen vegental consumes en una semana?
						</p>
						<form id="Form" className="form-horizontal">
						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-3">
															Pan
														</label>

														<div className="col-md-3">
															<input type="number"  ref="pan" defaultValue={this.state.pan} class="form-control" placeholder="Unidades"/>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-3">
														 Cereales
													 </label>

													 <div className="col-md-3">
														 <input type="number"  ref="cereales" defaultValue={this.state.cereales} class="form-control" placeholder="Tazas"/>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-3">
														Frutas
													</label>

													<div className="col-md-3">
														<input type="number" ref="frutas" defaultValue={this.state.frutas} class="form-control" placeholder="Unidades"/>
													</div>
				 </div>

				 <div className="form-group col-md-12 content form-block-holder">
												 <label className="control-label col-md-3">
													 Vegetales
												 </label>

												 <div className="col-md-3">
													 <input type="number" ref="vegetales" defaultValue={this.state.vegetales} class="form-control" placeholder="Unidades"/>
												 </div>
				</div>


				 </form>


					</div>
				</div>

			</div>
		)
	}


}
