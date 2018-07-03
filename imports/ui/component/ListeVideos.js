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
import YouTube from 'react-youtube';
import { Route, Redirect } from 'react-router';

class ListeVideos extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
			    moderateur:false,
			    redirect:false,
		    };
		}


	componentWillMount(){
		if(Meteor.userId() == "QXf4Th7ghBzLZjpWo" ||
		   Meteor.userId() == "oANNC3P9SpQ5Fw8Qg" ||
		   Meteor.userId() == "3zwe2xG8SyHvMZaub"){
			this.setState({moderateur: true})
		}

	}


	Supprimer(){
		Meteor.call('supprimerMessage',
	    this.props.message._id,
	     );
	}

	lien(){
		this.setState({redirect: true})
	}

  render() {
    
	const opts = {
      height: '195',
      width: '320',
      }

      if (this.state.redirect){
      return <Redirect to={'/singleVideo/' + this.props.message._id} />;
    }

		return (
			<div className="MiniatureVideo">
			  			<YouTube
		        			videoId={this.props.message.IDvideo}
		        			opts={opts}
		        			onPlay={this.lien.bind(this)}
	      				/>
	      				<div className="titreVideo">
	      					{this.props.message.titre}
	      				</div>
		  		</div>
		);
  	}
}

export default ListeVideos =  withTracker(({ id }) => {

  return {

  };
})(ListeVideos);
