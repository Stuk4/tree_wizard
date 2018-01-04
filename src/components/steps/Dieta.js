import React, { Component }from 'react'

export default class Dieta extends Component {

	constructor(props){
		super(props);
		this.state = {
			res : props.getHuellaCarbonoData().res,
			cerdo : props.getHuellaCarbonoData().cerdo,
			ave : props.getHuellaCarbonoData().ave,
			leche : props.getHuellaCarbonoData().leche,
			huevo : props.getHuellaCarbonoData().huevo,
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
			res : this.refs.res.value,
			cerdo : this.refs.cerdo.value,
			ave : this.refs.ave.value,
			leche : this.refs.leche.value,
			huevo : this.refs.huevo.value,
		}
	}


	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Dieta</h3>
					</div>
					<div class="panel-body">

						<p>
							Sobre tu dieta, cuantas porciones de carne consumes en una semana?
						</p>
						<form id="Form" className="form-horizontal">
						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-3">
															Carne de Res (porcion 200 gramos)
														</label>

														<div className="col-md-3">
															<input type="number" ref="res" defaultValue = {this.state.res} class="form-control" placeholder="Porciones"/>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-3">
														 Carne de Cerdo (porcion 200 gramos)
													 </label>

													 <div className="col-md-3">
														 <input type="number"  ref="cerdo" defaultValue = {this.state.cerdo} class="form-control" placeholder="Porciones"/>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-3">
														Aves (porcion 200 gramos)
													</label>

													<div className="col-md-3">
														<input type="number" ref="ave" defaultValue = {this.state.ave} class="form-control" placeholder="Porciones"/>
													</div>
				 </div>

				 <div className="form-group col-md-12 content form-block-holder">
												 <label className="control-label col-md-3">
													 Leche (vasos)
												 </label>

												 <div className="col-md-3">
													 <input type="number" ref="leche" defaultValue = {this.state.leche} class="form-control" placeholder="Vasos"/>
												 </div>
				</div>

				<div className="form-group col-md-12 content form-block-holder">
												<label className="control-label col-md-3">
													Huevos (unidades)
												</label>

												<div className="col-md-3">
													<input type="number" ref="huevo" defaultValue = {this.state.huevo} class="form-control" placeholder="Unidades"/>
												</div>
			 </div>
				 </form>


					</div>
				</div>

			</div>
		)
	}


}
