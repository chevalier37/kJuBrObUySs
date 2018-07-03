import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Articles } from '../../api/Articles.js';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import renderHTML from 'react-render-html';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import AdSense from 'react-adsense';
import YouTube from 'react-youtube';

import { Favoris } from '../../api/Favoris.js';

class SingleVideoPost extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
				nbrSeconde : 0,
			 	nbrMinutes : 0,
				nbrHeures : 0,
				nbrJours : 0,
				nbrMois : 0,
			    disabled:false,
			    disabledVote:false,
			    disabledFavoris:false,
			    color:true,
		    };
		}

	signaler() {
	    Meteor.call('signaler', this.props.message._id);
       	this.setState({disabled: true});
	 }

	reponse(){
		const reponse = this.props.nbrreponse;
	    if(reponse < 2){
	    	return 'réponse'
	    }else {
	    	return 'réponses'
	    }
	}



	 addFavoris() {
	    Meteor.call('addFavorisArticles',
	    this.props.message._id,
	    this.props.message.post_title,
	    this.props.message.post_author,
	    this.props.message.post_author_id,
	    this.props.message.gender );
       	this.setState({disabledFavoris: true});
	 }

	componentWillMount(){


		if(Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId())){
       	this.setState({disabledVote: true}); this.setState({color: false})}else{
       	this.setState({disabledVote: false})
   		}
		
		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}

   		{
		this.props.isFavoris==true ?
		this.setState({disabledFavoris: true}) :
		this.setState({disabledFavoris: false})
   		}

		
	}

	sexe(){
		const sexe = this.props.message.gender;
	    if(sexe == 'fille'){
	    	return 'pink'
	    }else {
	    	return 'blue'
	    }
	    
	}


  render() {

	const colorSexe = this.state.sexe;
	const opts = {
      height: '390',
      width: '640',
      }

		return (
			<div className="ListeMessagesSingle">
	        	
	  			<Segment
	  				color={this.sexe()=="pink" ?
	        		"pink" : "blue" }
	        	>
					<div className="TitreSingleMessage">
						{this.props.message.titre}
						
					</div>

		  			<div className={"ContentQuestion" + " " + "display-linebreak"}>
		  				<YouTube
		        			videoId={this.props.message.IDvideo}
		        			opts={opts}
	      				/>
		  			</div>
		  			<div className={"CommentaireVideo"+ " " + "display-linebreak"}>
		  				{this.props.message.commentaire}
		  			</div>
		  			<div className="espacePub" ></div>

      				<div className="pubArticle">
				        <AdSense.Google
				          client='ca-pub-6112176939320267'
				          slot='4929880369'
				          style={{ display: 'inline-block',width:'468px', height:'60px'}}
				        />
					</div>

	  			</Segment>
			</div>

		);
  	}
}

export default SingleVideoPost =  withTracker(({ id }) => {
  let myId = Meteor.userId();
  const Handle1 = Meteor.subscribe('isFavoris', id, myId );
  const loading1 = !Handle1.ready();
  let FavorisSearch = Favoris.findOne({'idMessage':id, 'from_id':myId});
  const reponseExists = !loading1&& !!FavorisSearch;

  return {
   isFavoris:reponseExists ? true : false,
  };
})(SingleVideoPost);