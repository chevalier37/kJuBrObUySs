import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Header, Divider, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class LastConseilleresContent extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		       activeItem: '' 
		    };
		}

	sexe(){
		const sexe = this.props.sexe.gender;
	    if(sexe == 'fille'){
	    	return 'filleConseiller'
	    }else {
	    	return 'garconConseiller'
	    }
	}

	Search(){
		    let name = this.props.conseiller.username;
		    let search = this.props.search;
		    let LowerName = name.toLowerCase();
		    let LowerSearch = search.toLowerCase();

			let result2 = LowerName.substr(0, 2);
			let result3 = LowerName.substr(0, 3);
			let result4 = LowerName.substr(0, 4);
			let result5 = LowerName.substr(0, 5);
			let result6 = LowerName.substr(0, 6);
			let result7 = LowerName.substr(0, 7);
			let result8 = LowerName.substr(0, 8);
			let result9 = LowerName.substr(0, 9);
			let result10 = LowerName.substr(0, 10);

			if( 
				LowerSearch==result2 ||
			    LowerSearch==result3 ||
			    LowerSearch==result4 ||
			    LowerSearch==result5 ||
			    LowerSearch==result6 ||
			    LowerSearch==result7 ||
			    LowerSearch==result8 ||
			    LowerSearch==result9 ||
			    LowerSearch==result10
			    )
			{
				return "ok"
			}

	}

	presentation(){
		let text = this.props.conseiller.presentation;
		if(text){
		let presentation = text.substring(0, 150);
		return presentation + "..."
		}
	}

  render() {

    const { activeItem } = this.state;

		return (
			<div className="SearchContent">
				<div className={this.Search()=="ok" ? "visibleSearch" : 'none'}>
				    <div color={this.sexe()=="filleConseiller" ?
		        				  "pink" : "blue" }>

					    <div className={this.sexe()=="filleConseiller" ?
			        				  "filleSearch" : "garconSearch"
			        				}>
			        			<Link to={'/profil/' + this.props.conseiller._id}>
						  			<div className={this.sexe()=="filleConseiller" ?
			        				  "titreMessageFille" : "titreMessageGarcon"
			        				}>
						  			 {this.props.conseiller.username}
						  			</div>
					  			</Link>
				  		</div>  
				    </div>
				</div>
			</div>
		);
  	}
}

export default LastConseilleresContent =  withTracker(() => {
  return {
  };
})(LastConseilleresContent);