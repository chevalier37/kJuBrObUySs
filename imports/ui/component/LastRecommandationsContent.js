import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Header, Divider, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class LastRecommandationsContent extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		       activeItem: '' 
		    };
		}

	sexe(){
		const sexe = this.props.conseiller.to_gender;
	    if(sexe == 'fille'){
	    	return 'filleConseiller'
	    }else {
	    	return 'garconConseiller'
	    }
	}

	presentation(){
		let text = this.props.conseiller.commentaire;
		if(text){
		let presentation = text.substring(0, 150);
		return presentation + "..."
		}
	}

  render() {

    const { activeItem } = this.state
   
		return (
			<div className="LastConseilleresContent">
			    <Segment color={this.sexe()=="filleConseiller" ?
	        				  "pink" : "blue" }>

				    <div className={this.sexe()=="filleConseiller" ?
		        				  "filleMessageBackground" : "garconMessageBackground"
		        				}>
		        			<Link to={'/Recommandations/' + this.props.conseiller.to_id}>
					  			<div className={this.sexe()=="filleConseiller" ?
		        				  "titreMessageFille" : "titreMessageGarcon"
		        				}>
					  			 {this.props.conseiller.to_name}
					  			</div>
				  			</Link>
			  		</div>  
			   
				    <div className="presentationConseiller">
				          	{this.presentation()}
				    </div>
			    </Segment>
			</div>
		);
  	}
}

export default LastRecommandationsContent =  withTracker(() => {
  return {
  };
})(LastRecommandationsContent);