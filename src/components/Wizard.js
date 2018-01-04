import React, { Component, Fragment } from 'react'
import StepZilla from 'react-stepzilla'

import Familia from './steps/Familia'
import Step3 from './steps/Step3'
import Energy from './steps/Energy'
import Gas from './steps/Gas'
import TranspPub from './steps/TranspPub'
import VehiculoPropio from './steps/VehiculoPropio'
import Viajes from './steps/Viajes'
import Dieta from './steps/Dieta'
import Dieta2 from './steps/Dieta2'
import Otros from './steps/Otros'




export default class Wizard extends Component {

	constructor(props){
		super(props)
		this.state = {};
		this.dataHuellaCarbono = {
			familia: '',
			reciboElectricidad : '',
			reciboGasNatural : '',
			balonesGas : '',
			combi : '',
			trenElectrico : '',
			metropolitano  : '',
			cilindraje : '', tipoCombustible : '', gastoCombustible : '', edadVehiculo : '',
			avion : '', automovil : '', bus : '',
			res : '', cerdo : '' , ave : '', leche : '', huevo  : '',
			pan : '', cereales : '' , frutas : '', vegetales : '',
			plastico1 : '', plastico2 : '', vidrio1 : '' , vidrio2 : ''
		};
	}


	getHuellaCarbonoData(){
		return this.dataHuellaCarbono;
	}

	update(u){
		this.dataHuellaCarbono={
			...this.dataHuellaCarbono,
			...u,
		}
	}

	render() {

		const steps = [
			{ name: 'Paso 1', component: <Familia getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}} /> },
			{ name: 'Paso 2', component: <Energy getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}} /> },
			{ name: 'Paso 3', component: <Gas getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}} /> },
			{ name: 'Paso 4', component: <TranspPub getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },
			{ name: 'Paso 5', component: <VehiculoPropio getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },
			{ name: 'Paso 6', component: <Viajes getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },
			{ name: 'Paso 7', component: <Dieta getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },
			{ name: 'Paso 8', component: <Dieta2 getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },
			{ name: 'Paso 9', component: <Otros getHuellaCarbonoData={() => (this.getHuellaCarbonoData())} update={(u) => {this.update(u)}}/> },

		]

		return (
			<Fragment>

				<h1 className="page-header">Calcula tu huella de carbono </h1>

				<StepZilla
					steps={steps}
					stepsNavigation={false}
					nextButtonCls="btn btn-primary pull-right"
					backButtonCls="btn btn-primary pull-left"
				/>

			</Fragment>
		);
	}
}
