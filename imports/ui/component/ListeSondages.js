import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Comments } from '../../api/Reponses.js';
import { withTracker } from 'meteor/react-meteor-data';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { hot } from 'react-hot-loader'
import renderHTML from 'react-render-html';
import Img from 'react-image'

class ListeSondages extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
				nbrSeconde : 0,
			 	nbrMinutes : 0,
				nbrHeures : 0,
				nbrJours : 0,
				nbrMois : 0,
				premierAmour:" ",
			    trahison:'',
			    Friendzone:'',
			    amourdistance:'',
			    separation:'',
			    timidite:'',
			    depression:'',
			    suicide:'',
			    deces:'',
			    mutilation:'',
			    premierfois:'',
			    Contraception:'',
			    mst:'',
			    viol:'',
			    avortement:'',
			    orientationSex:'',
			    Anorexie:'',
			    obesite:'',
			    drogue:'',
			    alcool:'',
			    complexe:'',
			    hopital:'',
			    handicap:'',
			    Accident:'',
			    echecEcole:'',
			    Harcelement:'',
			    Discrimination:'',
			    Violence:'',
			    autre:'',
			    disabled:false,
			    author_id:false,
			    moderateur:false,
		    };
		}


	componentWillMount(){
		if(Meteor.userId() == "QXf4Th7ghBzLZjpWo" ||
		   Meteor.userId() == "oANNC3P9SpQ5Fw8Qg" ||
		   Meteor.userId() == "3zwe2xG8SyHvMZaub"){
			this.setState({moderateur: true})
		}

		const sexe = this.props.message.gender;
	    const author_id = this.props.message.post_author_id;

	    {sexe == 'fille' ? 
	         this.setState({sexe: 'pink'}):
		  	 this.setState({sexe: 'blue'})
		}

		{author_id == Meteor.userId() ? 
	         this.setState({author_id: true}):
		  	 this.setState({author_id: false})
		}

		//on calcul la date du post
		const today = new Date();
		const diffToday = Date.parse(today);
		const post_date = this.props.date;
		const nbrSeconde = ((diffToday-post_date)/1000) + 2;
		this.setState({nbrSeconde: nbrSeconde})

		const nbrMinutes = Math.round(nbrSeconde/60);
		this.setState({nbrMinutes: nbrMinutes})
		
		const nbrHeures = Math.round(nbrMinutes/60);
		this.setState({nbrHeures: nbrHeures})

		const nbrJours = Math.round(nbrHeures/24);
		this.setState({nbrJours: nbrJours})

		const nbrMois = Math.round(nbrJours/30);
		this.setState({nbrMois: nbrMois})

		//On affiche les catégories
		const premierAmour = this.props.message.premierAmour;
		{ premierAmour ? 
		  this.setState({premierAmour: "Premier amour  "}) : ''
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

		const autre = this.props.message.autre;
		{ autre ? 
		  this.setState({autre: 'Autre '}) : ''
		}

		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}
	}


	show(){
		confirmAlert({
	      title: 'Supprimer',
	      message: 'Confirmer la suppression du message ?',
	      buttons: [
	        {
	          label: 'Oui',
	          onClick: () => {
	          	this.Supprimer()
	          }
	        },
	        {
	          label: 'Non',
	        }
	      ]
	    })
	}

	Supprimer(){
		Meteor.call('supprimerMessage',
	    this.props.message._id,
	     );
	}

  render() {
    
	const colorSexe = this.state.sexe;
	const { open } = this.state
	let now = new Date();
	let diff = now - this.props.message.naissance;
	let age = Math.round(diff / 31536000000);

		return (
			<div className="ListeArticles">
			<Link to={'/singleSondage/' + this.props.message._id} >
	  			<Segment color={colorSexe=="pink" ?
	        				  "pink" : "blue" }>
	  			
		  			<div className={"TitreArticle" + " " + "display-linebreak"}>
		  				{this.props.message.titre}
		  			</div>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
							<div className="IconListeSondage">
								<div className="textIcon">{this.props.message.Q1R1C + this.props.message.Q1R2C +this.props.message.Q1R3C +this.props.message.Q1R4C}</div>
	         					<Img className="iconMenu" src="/thumb-up.svg"/>
							</div>
		      				</Comment.Content>
	    			</Comment>
	  			</Segment>
	  			</Link>
			</div>
		);
  	}
}

export default ListeSondages =  withTracker(() => {

  return {

  };
})(ListeSondages);
