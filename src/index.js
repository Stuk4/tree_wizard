import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

window.$ = window.jQuery = require('jquery/dist/jquery.min')
require('bootstrap/dist/js/bootstrap.min')

ReactDOM.render(<App />, document.getElementById('root'))
