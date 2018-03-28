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
		const sexe = this.props.conseiller.gender;
	    if(sexe == 'fille'){
	    	return 'filleConseiller'
	    }else {
	    	return 'garconConseiller'
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

    const { activeItem } = this.state
   
		return (
			<div className="LastConseilleresContent">
			    <div>
				    <div className={this.sexe()=="filleConseiller" ?
		        				  "filleMessageBackConseil" : "garconMessageBackConseil"
		        				}>
		        				<Link to={'/profil/' + this.props.conseiller.user_id}>
				  			<span className="titreMessage">
				  			 {this.props.conseiller.username}
				  			</span>
				  			</Link>
			  		</div>  
			    </div>
			    <div className="presentationConseiller">
			          	{this.presentation()}
			    </div>
			</div>
		);
  	}
}

export default LastConseilleresContent =  withTracker(() => {
  return {
  };
})(LastConseilleresContent);