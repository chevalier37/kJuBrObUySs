import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Dropdown, Menu, Button,Search, Grid, Header, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ResultSearch from './ResultSearch.js';
import Faheart from 'react-icons/lib/fa/heart-o';
import FaConseiller from 'react-icons/lib/fa/user-md';
import FaSearch from 'react-icons/lib/fa/search';

import { Conseilleres } from '../../api/Conseilleres.js';

class HeaderPage extends Component {
 	state = {
 	 name: '',
 	 hidden:false,
 	 placeholder:'Rechercher un pseudo',
 	 }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })



	renderAllreponses() {
          let Allreponses = this.props.Conseiller;
          const { name, email } = this.state
          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <ResultSearch
                key={message._id}
                conseiller={message}
                date={date}
                search={name} 
                sexe={message.profile}        
              />
            );
          });
      }

    hidden(){
      this.setState({hidden: true})
      this.setState({name: ''})
    }

    visible(){
      this.setState({hidden: false})
      this.setState({placeholder: ''})
    }

    visiblePlaceholder(){
      this.setState({placeholder: 'Rechercher un pseudo',})
    }

  	render() {
	 const { name} = this.state

	return (
		<div className="">
			<Link to="/home" ><Img className="logoPage" src="/logo_site.png"/></Link>
			{/*<div className="titreKURBYSpage"><Link to="/home" >KURBYS</Link></div>*/}

			   {/* <div className="search">
					<Form size='mini' autoComplete="off">
						<div className="search">
						    <Form.Group>
						      <Form.Input
						       placeholder={this.state.placeholder}
						       name='name'
						       value={name}
						       onChange={this.handleChange}
						       onFocus={this.visible.bind(this)}
						       onBlur={this.visiblePlaceholder.bind(this)}
						        />
						    </Form.Group>
						</div>
					</Form>
					<div className={this.state.hidden==false ? "containerResult" : "none"}  onClick={this.hidden.bind(this)}>	
					 
					 {this.renderAllreponses()}

					 </div>
				</div>*/}
				
				<div className="DevenirConseiller">

					<div className="ButtonHeader">
						<Link to="/DevenirConseiller" >
							<Button color="blue" size="small">
								<div className="buttonSearch">
									<Faheart />
								</div>
							 Devenir conseiller 
							</Button>
						</Link>
					</div>
					<div className="ButtonHeader">
						<Link to="/ConseillerConnecter" >
							<Button color="blue" size="small">
								<div className="buttonSearch">
									<FaConseiller />
								</div>
							 Conseillers en ligne
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

  /*const Handle1 = Meteor.subscribe('all');
  const loading1 = !Handle1.ready();
  const allConseillers = Meteor.users.find({}, {sort:{createdAt: -1}});
  const reponseExists1 = !loading1 && !!allConseillers;*/
  return {
    user: reponseExists ? allreponses.count() : [],
    /*Conseiller: reponseExists ? allConseillers.fetch() : [],*/
  };
})(HeaderPage);
