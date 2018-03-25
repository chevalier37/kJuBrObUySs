import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Link } from 'react-router-dom';

//Component
import FormLogin from '../component/FormLogin.js';

export default class Header extends Component {
  
  	render() {

	return (
		<div className="headerSite">
			<Link to="/home" ><Img className="logo" src="/logo_site.png"/></Link>
			<Link to="/home" ><div className="titreKURBYS">KURBYS</div></Link>
			<div className="formLogin">
				<FormLogin />
			</div>
		</div>
	);
  }
}
