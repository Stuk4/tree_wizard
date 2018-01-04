import React, {Component} from 'react'

export default class Resultado extends Component{

	constructor(props){
		super(props);
		this.state = {
			data  : props.getHuellaCarbonoData(),
			totalEnergia : 0,
			totalTransporte : 0,
			vehiculoPropio : 0,
			convertation : 0,
			dietaAnimal : 0,
			dietaVegetal : 0,
			botellas : 0,
			total : 0
		}

	}

	componentDidMount() {
    console.log(this.state.data);
  }

 render(){

	  this.state.totalEnergia = this.state.data.reciboElectricidad*7355.7/1000000 +
	  this.state.data.balonesGas*4.6/10 + this.state.data.balonesGas*3.3/10000;

	  this.state.totalTransporte	 = this.state.data.combi*0.0172615365 +
																 this.state.data.trenElectrico*0.001153933144 +
																 this.state.data.metropolitano*0.00170394485444444+
																 this.state.data.avion*0.1927806804+
																 this.state.data.automovil*0.00429075+
																 this.state.data.bus*0.00149996489361702;

   this.state.total = this.state.totalEnergia + this.state.totalTransporte;


   this.state.dietaAnimal = this.state.data.res*0.027/5 +
													 this.state.data.cerdo*0.0121/5+
													 this.state.data.ave*0.0069/5+
													 this.state.data.leche*0.0123/272+
													 this.state.data.huevo*0.0048/16;

	 this.state.total = this.state.total + this.state.dietaAnimal * 52;

   this.state.dietaVegetal = this.state.data.pan*0.00011/60+
 													 this.state.data.cereales*0.00011/180+
													 this.state.data.frutas*0.000235+
													 this.state.data.vegetales*0.000319;

  this.state.total = this.state.total + this.state.dietaVegetal * 52;


  this.state.botellas  = this.state.data.plastico1*0.17/10+
												 this.state.data.plastico2*0.22/10+
												 this.state.data.vidrio1*0.25/10+
												 this.state.data.vidrio2*0.51/10;

 this.state.total = this.state.total + this.state.botellas;

			if(this.state.data.edadVehiculo > 10){
			   if(this.state.data.tipoCombustible == 1){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.00075728783269962;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.00075728783269962;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.000908057342024262;
			       }
			   }
			   if(this.state.data.tipoCombustible == 2){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.000466327860773618;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.000466327860773618;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.00039515850483511;
			       }
			   }
			   if(this.state.data.tipoCombustible == 3){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.0002457;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.0002457;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.0002457;
			       }
			   }
			   if(this.state.data.tipoCombustible == 4){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.00208970131578947;
			       }
			   }
			};


			if(this.state.data.edadVehiculo > 7 && this.state.data.edadVehiculo <= 10){
			   if(this.state.data.tipoCombustible == 1){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.000530991022994749;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.000530991022994749;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.000910047499547348;
			       }
			   }
			   if(this.state.data.tipoCombustible == 2){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.000269398993925118;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.000269398993925118;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.000396097481403422;
			       }
			   }
			   if(this.state.data.tipoCombustible == 3){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.0002509299;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.0002509299;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.0002509299;
			       }
			   }
			   if(this.state.data.tipoCombustible == 4){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.00208970131578947;
			       }
			   }
			};


			if(this.state.data.edadVehiculo <= 7){
			   if(this.state.data.tipoCombustible == 1){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.000523496407749412;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.000523496407749412;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.000895200814774579;
			       }
			   }
			   if(this.state.data.tipoCombustible == 2){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.000271355781676172;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.000271355781676172;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.000398054269154476;
			       }
			   }
			   if(this.state.data.tipoCombustible == 3){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.0002477115;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.0002477115;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.0002477115;
			       }
			   }
			   if(this.state.data.tipoCombustible == 4){
			       if(this.state.data.cilindraje == 1){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 2){
			           this.state.convertation = 0.00117070605263158;
			       }else if(this.state.data.cilindraje == 3){
			           this.state.convertation = 0.00208970131578947;
			       }
			   }
			};

			this.state.vehiculoPropio =  this.state.convertation * this.state.data.gastoCombustible;
			this.state.total = this.state.total + this.state.vehiculoPropio;

	 return (
		 <div>

 			<div class="panel panel-primary">
 				<div class="panel-heading">
 					<h3 class="panel-title">Step 1</h3>
 				</div>
 				<div class="panel-body">

				<h1 className="text-center medicion">Resultado de tu Emision</h1>
 				<p className="text-center">
 					<img src="co2.png"/>
 				</p>

				<p className="text-center medicion">
				    <h2>Tu huella de carbono anual es de : {this.state.total} Toneladas de CO2 </h2>
 				</p>

				<p className="text-center medicion">
						<h2>Debes sembrar: 2 Arboles <img src="arbol.png"/><img src="arbol.png"/></h2>
				</p>

 				</div>
 			</div>

 		</div>
	 )
 }

}
