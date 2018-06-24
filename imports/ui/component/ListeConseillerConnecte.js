import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import FaPoint from 'react-icons/lib/fa/circle';
class ListeConseillerConnecte extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
			    disabled:false,
			    disabledVote:false,
			    premierAmour:false,
		    };
		}

	signalerReponse() {
	    Meteor.call('signalerReponse', this.props.message._id);
       	this.setState({disabled: true});
	 }

	 vote() {
	    Meteor.call('vote', this.props.message._id);
       	this.setState({disabledVote: true});
	 }


	componentWillMount(){
		const sexe = this.props.message.gender;
	    
	    {sexe == 'fille' ? 
	         this.setState({sexe: 'pink'}):
		  	 this.setState({sexe: 'blue'})
		}

		//On affiche les catégories
		const premierAmour = this.props.message.premierAmour;
		{ premierAmour ? 
		  this.setState({premierAmour: true }) : ''
		}

		const trahison = this.props.message.trahison;
		{ trahison ? 
		  this.setState({trahison: '  Trahison '}) : ''
		}

		const Friendzone = this.props.message.Friendzone;
		{ Friendzone ? 
		  this.setState({Friendzone: 'Friendzone '}) : ''
		}

		const amourdistance = this.props.message.amourdistance;
		{ amourdistance ? 
		  this.setState({amourdistance: 'Amour à distance '}) : ''
		}

		const separation = this.props.message.separation;
		{ separation ? 
		  this.setState({separation: 'Séparation '}) : ''
		}

		const timidite = this.props.message.timidite;
		{ timidite ? 
		  this.setState({timidite: 'Timidité '}) : ''
		}

		const depression = this.props.message.depression;
		{ depression ? 
		  this.setState({depression: 'Dépression '}) : ''
		}

		const suicide = this.props.message.suicide;
		{ suicide ? 
		  this.setState({suicide: 'Suicide '}) : ''
		}

		const deces = this.props.message.deces;
		{ deces ? 
		  this.setState({deces: 'Décès '}) : ''
		}

		const mutilation = this.props.message.mutilation;
		{ mutilation ? 
		  this.setState({mutilation: 'Mutilation '}) : ''
		}

		const premierfois = this.props.message.premierfois;
		{ premierfois ? 
		  this.setState({premierfois: 'Premiere fois '}) : ''
		}

		const Contraception = this.props.message.Contraception;
		{ Contraception ? 
		  this.setState({Contraception: 'Contraception '}) : ''
		}

		const mst = this.props.message.mst;
		{ mst ? 
		  this.setState({mst: 'Maladie, MST '}) : ''
		}

		const viol = this.props.message.viol;
		{ viol ? 
		  this.setState({viol: 'Viol '}) : ''
		}

		const avortement = this.props.message.avortement;
		{ avortement ? 
		  this.setState({avortement: 'Avortement '}) : ''
		}

		const orientationSex = this.props.message.orientationSex;
		{ orientationSex ? 
		  this.setState({orientationSex: 'Orientation sexuelle '}) : ''
		}

		const Anorexie = this.props.message.Anorexie;
		{ Anorexie ? 
		  this.setState({Anorexie: 'Anorexie '}) : ''
		}

		const obesite = this.props.message.obesite;
		{ obesite ? 
		  this.setState({obesite: 'Obésite '}) : ''
		}

		const drogue = this.props.message.drogue;
		{ drogue ? 
		  this.setState({drogue: 'Drogue '}) : ''
		}

		const alcool = this.props.message.alcool;
		{ alcool ? 
		  this.setState({alcool: 'Alcool '}) : ''
		}

		const complexe = this.props.message.complexe;
		{ complexe ? 
		  this.setState({complexe: 'Complexe '}) : ''
		}

		const hopital = this.props.message.hopital;
		{ hopital ? 
		  this.setState({hopital: 'Hospitalisation '}) : ''
		}

		const handicap = this.props.message.handicap;
		{ handicap ? 
		  this.setState({handicap: 'Handicap '}) : ''
		}

		const Accident = this.props.message.Accident;
		{ Accident ? 
		  this.setState({Accident: 'Accident '}) : ''
		}

		const echecEcole = this.props.message.echecEcole;
		{ echecEcole ? 
		  this.setState({echecEcole: 'Echec scolaire '}) : ''
		}

		const Harcelement = this.props.message.Harcelement;
		{ Harcelement ? 
		  this.setState({Harcelement: 'Harcèlement '}) : ''
		}

		const Discrimination = this.props.message.Discrimination;
		{ Discrimination ? 
		  this.setState({Discrimination: 'Discrimination '}) : ''
		}

		const Violence = this.props.message.Violence;
		{ Violence ? 
		  this.setState({Violence: 'Violence '}) : ''
		}
	}

	breaklines(){
			  let message = this.props.message.presentation
			  return message
			}

  	render() {
    
	const colorSexe = this.state.sexe;
	let now = new Date();
	let diff = now - this.props.message.naissance;
	let age = Math.round(diff / 31536000000);

		return (
			<div className="ListeMessages">
	  				<div className={this.props.message.gender == "fille" ? "filleMessageBackground" : "garconMessageBackground"} >
			  			<div className={this.props.message.gender == "fille" ?
	        				  "titreMessageFille" : "titreMessageGarcon"
	        				}>
	        				<div className={"PointOnlineConseiller"}>
								<FaPoint />
							</div>
				  			<Link to={'/profil/' + this.props.id}>
				  				{this.props.message.username} 
				  			</Link>
			  			</div>
			  			<div className="ageAuthorReponse">
	        				{age} ans
	        			</div>
		  			</div>

		  		<Segment color={this.props.message.gender == "fille" ?
	        				  "pink" : "blue" }>
		  			<p className="ContentQuestion">
		  				{this.breaklines()}
		  			</p>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
						<div className="Blockcompetence"> 	      					
	      					{ this.state.premierAmour ? 
							<span className="espace">Premier amour </span>
							 : "" }
							
							{ this.state.trahison ? 
							<span className="espace">{this.state.trahison} </span>
							 : "" } 

							{ this.state.Friendzone ? 
							<span className="espace">{this.state.Friendzone} </span>
							 : "" }

							{ this.state.amourdistance ? 
							<span className="espace">{this.state.amourdistance} </span>
							 : "" }

							{ this.state.separation ? 
							<span className="espace">{this.state.separation} </span>
							 : "" }

							{ this.state.timidite ? 
							<span className="espace">{this.state.timidite} </span>
							 : "" }

							{ this.state.depression ? 
							<span className="espace">{this.state.depression} </span>
							 : "" }

							{ this.state.suicide ? 
							<span className="espace">{this.state.suicide} </span>
							 : "" }

							{ this.state.deces ? 
							<span className="espace">{this.state.deces} </span>
							 : "" }

							{ this.state.mutilation ? 
							<span className="espace">{this.state.mutilation} </span>
							 : "" }

							{ this.state.premierAmour ? 
							<span className="espace">{this.state.premierfois} </span>
							 : "" }

							{ this.state.Contraception ? 
							<span className="espace">{this.state.Contraception} </span>
							 : "" }

							{ this.state.mst ? 
							<span className="espace">{this.state.mst} </span>
							 : "" }

							{ this.state.viol ? 
							<span className="espace">{this.state.viol} </span>
							 : "" }

							{ this.state.premierAmour ? 
							<span className="espace">{this.state.avortement}</span>
							 : "" }

							{ this.state.orientationSex ? 
							<span className="espace">{this.state.orientationSex} </span>
							 : "" }

							{ this.state.Anorexie ? 
							<span className="espace">{this.state.Anorexie} </span>
							 : "" }

							{ this.state.obesite ? 
							<span className="espace">{this.state.obesite} </span>
							 : "" }

							{ this.state.drogue ? 
							<span className="espace">{this.state.drogue} </span>
							 : "" }

							{ this.state.alcool ? 
							<span className="espace">{this.state.alcool} </span>
							 : "" }

							{ this.state.complexe ? 
							<span className="espace">{this.state.complexe} </span>
							 : "" }

							{ this.state.hopital ? 
							<span className="espace">{this.state.hopital} </span>
							 : "" }

							{ this.state.handicap ? 
							<span className="espace">{this.state.handicap}</span>
							 : "" }

							{ this.state.Accident ? 
							<span className="espace">{this.state.Accident}</span>
							 : "" }

							{ this.state.echecEcole ? 
							<span className="espace">{this.state.echecEcole} </span>
							 : "" }

							{ this.state.Harcelement ? 
							<span className="espace">{this.state.Harcelement} </span>
							 : "" }

							{ this.state.Discrimination ? 
							<span className="espace">{this.state.Discrimination} </span>
							 : "" }

							{ this.state.Violence ? 
							<span className="espace">{this.state.Violence} </span>
							 : "" }
						</div>

	         				<div className="dateMessage">
			         			<div className="noteRecommandation" >
									<span className="vote">
										<Rating icon='heart'
				              			defaultRating={this.props.message.note}
				              			maxRating={4}
				              			disabled
	              	 				/>
									</span>
								</div>
	         				</div>

							<div className="repondreMessage1" >
								<Button size="tiny"  color='green'>
										<Link to={'/Chat/' + this.props.message.user_id }>
										Contacter
										</Link>
								</Button>
							</div>

							<div className="repondreMessage1" >
								<Button
								  size="tiny"
								  color='blue'
								  >
									<Link to={'/Profil/' + this.props.message.user_id }>
										Profil
									</Link>
								</Button>
							</div>

	      				</Comment.Content>
	    			</Comment>
	  			</Segment>
			</div>
		);
  	}
}

export default ListeConseillerConnecte =  withTracker(() => {

  return {

  };
})(ListeConseillerConnecte);