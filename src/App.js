import React, { Fragment } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Wizard from './components/Wizard'

export default class App extends React.Component {
	render() {
		return (
			<Fragment>

				<Header />

				<div className="container">
					<div className="row">
						<div className="col-xs-12">

							<Wizard />

						</div>
					</div>

					<hr />

					<Footer />
				</div>

			</Fragment>
		);
	}
}
