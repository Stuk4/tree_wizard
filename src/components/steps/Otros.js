import React, { Component }from 'react'

export default class Otros extends Component {


	constructor(props){
		super(props);
		this.state = {
			plastico1 : props.getHuellaCarbonoData().plastico1,
			plastico2 : props.getHuellaCarbonoData().plastico2,
			vidrio1 : props.getHuellaCarbonoData().vidrio1,
			vidrio2 : props.getHuellaCarbonoData().vidrio2,
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
			plastico1 : this.refs.plastico1.value,
			plastico2 : this.refs.plastico2.value,
			vidrio1 : this.refs.vidrio1.value,
			vidrio2 : this.refs.vidrio2.value,
		}
	}

	render(){
		return (
			<div>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Step 1</h3>
					</div>
					<div class="panel-body">

					<p className="text-center">
						<img src="botella.png"/>
					</p>

						<p>
							Cuantos de estos residuos que generas a la semana?
						</p>
						<form id="Form" className="form-horizontal">
						<div className="form-group col-md-12 content form-block-holder">
														<label className="control-label col-md-3">
															Botellas plasticas 500 ml
														</label>

														<div className="col-md-3">
															<input type="number" ref="plastico1" defaultValue={this.state.plastico1} class="form-control" placeholder="Unidades"/>
														</div>
					 </div>

					 <div className="form-group col-md-12 content form-block-holder">
													 <label className="control-label col-md-3">
														 Botellas plasticas 1000 ml
													 </label>

													 <div className="col-md-3">
														 <input type="number" ref="plastico2" defaultValue={this.state.plastico2} class="form-control" placeholder="Unidades"/>
													 </div>
					</div>

					<div className="form-group col-md-12 content form-block-holder">
													<label className="control-label col-md-3">
														Botellas de Vidrio 250ml - 500ml
													</label>

													<div className="col-md-3">
														<input type="number" ref="vidrio1" defaultValue={this.state.vidrio1}  class="form-control" placeholder="Unidades"/>
													</div>
				 </div>

				 <div className="form-group col-md-12 content form-block-holder">
												 <label className="control-label col-md-3">
													 Botellas de Vidrio 1000ml a mas
												 </label>

												 <div className="col-md-3">
													 <input type="number" ref="vidrio2" defaultValue={this.state.vidrio2} class="form-control" placeholder="Unidades"/>
												 </div>
				</div>


				 </form>


					</div>
				</div>

			</div>
		)
	}


}
