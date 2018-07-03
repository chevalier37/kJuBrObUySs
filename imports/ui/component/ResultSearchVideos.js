import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Header, Divider, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class ResultSearchVideos extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		       activeItem: '' 
		    };
		}

	sexe(){
		const sexe = this.props.gender;
	    if(sexe == 'fille'){
	    	return 'filleConseiller'
	    }else {
	    	return 'garconConseiller'
	    }
	}

	Search(){
		    let titre = this.props.video.titre;
		    let search = this.props.search;
		    let LowerName = titre.toLowerCase();
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

	/*presentation(){
		let text = this.props.conseiller.presentation;
		if(text){
		let presentation = text.substring(0, 150);
		return presentation + "..."
		}
	}*/

  render() {

    const { activeItem } = this.state;

		return (
			<div className="SearchContentArticles">
				<div className={this.Search()=="ok" ? "visibleSearch" : 'none'}>
        			<Link to={'/singleVideo/' + this.props.video._id}>
			  			<div className="contentSearch" >
			  			 {this.props.video.titre}
			  			</div>
		  			</Link>
				</div>
			</div>
		);
  	}
}

export default ResultSearchVideos =  withTracker(() => {
  return {
  };
})(ResultSearchVideos);