import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Dropdown, Menu, Button,Search, Grid, Header, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Faheart from 'react-icons/lib/fa/heart-o';
import FaConseiller from 'react-icons/lib/fa/user-md';
import FaSearch from 'react-icons/lib/fa/search';

import { Conseilleres } from '../../api/Conseilleres.js';

class HeaderPage extends Component {

	componentWillMount(){
    }


	componentDidMount() {
	   window.addEventListener("beforeunload", (ev) => 
	{  
	    Meteor.call('ConseillerOffline');
	});
}





  	render() {

	return (
		<div className="">
			<Link to="/home" ><Img className="logoPage" src="/logo_site.png"/></Link>
			{/*<div className="titreKURBYSpage"><Link to="/home" >KURBYS</Link></div>*/}			
				<div className="DevenirConseiller">
				{/*<div className="ButtonHeader">
						<Link to="/RecherchePseudo" >
							<Button color="blue" size="small">
							 Rechercher un pseudo
							</Button>
						</Link>
					</div>*/}	

					<div className="ButtonHeader">
						<Link to="/DevenirConseiller" >
							<Button color="blue" size="small">
							 Devenir conseiller 
							</Button>
						</Link>
					</div>
					<div className="ButtonHeader">
						<Link to="/ConseillerConnecter" >
							<Button color="blue" size="small">
							 Conseillers en ligne
							</Button>
						</Link>
					</div>
					<div className="ButtonHeader">
						<Link to="/Articles" >
							<Button color="blue" size="small">
							 Articles
							</Button>
						</Link>
					</div>
				</div>
			</div>
	);
  }
}

export default HeaderPage =  withTracker(() => {
  const userId = Meteor.userId()
  const Handle = Meteor.subscribe('IsConseiller', userId);
  const loading = !Handle.ready();
  const allreponses = Conseilleres.find({'user_id':userId});
  const reponseExists = !loading && !!allreponses;

  return {
    user: reponseExists ? allreponses.count() : [],
  };
})(HeaderPage);
