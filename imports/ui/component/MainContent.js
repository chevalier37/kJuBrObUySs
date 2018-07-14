import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Dimmer, Loader, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Img from 'react-image'
import AdSense from 'react-adsense';

import FormPosterMessage from './FormPosterMessage.js';
import ListeMessages from './ListeMessages.js';

//import { Posts } from '../../api/Messages.js';

class MainContent extends Component {

	constructor(props) {
			    super(props);
			 
			    this.state = {
			      	allMessages: 'visibleMessage',
					MessageAmour :'cacher',
					MessageSexo:'cacher',
					MessageEcole:'cacher',
					MessageSante:'cacher',
					MessageConfiance:'cacher',
					MessageNonLu:'cacher',
					MessageAutre:'cacher',
					more:5,
					moreNonLu:5,
					moreAutre:5,
					moreAmour:5,
					moreConfiance:5,
					moreSexo:5,
					moreSante:5,
					moreEcole:5,
					poster:false,
					posterConseil:false,
					idSondage:"",
					titreSondage:"",
					Ecole:"",
					Confiance:"",
					Sante:"",
					Sexo:"",
					Amour:"",
					Autre:"",
					NonLu:"",
					AllMessages:"",
					loading:true,
			    };
			}

	renderAllMessages() {
		if(this.state.AllMessages){ 
	    let AllMessages = this.state.AllMessages;
	    let more = this.state.more;
	    return AllMessages.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}         
	        />
	      );
	    });
	  }
	}

	renderNonLu() {
		if(this.state.NonLu){ 
	    let nonLu = this.state.NonLu;
	    let more = this.state.moreNonLu;
	    return nonLu.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}         
	        />
	      );
	    });
	   }
	}

	renderAutre() {
		if(this.state.Autre){ 
	    let autre = this.state.Autre;
	    let more = this.state.moreAutre;
	    return autre.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}         
	        />
	      );
	    });
	  }
	}

	renderAmour() {
		if(this.state.Amour){ 
	    let MessageAmour = this.state.Amour;
	    let more = this.state.moreAmour;
	    return MessageAmour.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}           
	        />
	      );
	    });
	  }
	}

	renderSexo() {
		if(this.state.Sexo){ 
	    let MessageSexo = this.state.Sexo;
	    let more = this.state.moreSexo;
	    return MessageSexo.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}           
	        />
	      );
	    });
	  }
	}

	renderConfiance() {
		if(this.state.Confiance){ 
	    let MessageConfiance = this.state.Confiance;
	    let more = this.state.moreConfiance;
	    return MessageConfiance.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}           
	        />
	      );
	    });
	  }
	}

	renderSante() {
		if(this.state.Sante){ 
	    let MessageSante = this.state.Sante;
	    let more = this.state.moreSante;
	    return MessageSante.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date} 
	          id={message._id}          
	        />
	      );
	    });
	 }
	}

	renderEcole() {
	    if(this.state.Ecole){ 
	    let MessageEcole = this.state.Ecole;
	    let more = this.state.moreEcole;
	    return MessageEcole.slice(0, 30).map((message) => {
	     let date = Date.parse(message.post_date);
	      return (
	        <ListeMessages
	          key={message._id}
	          message={message}
	          date={date} 
	          id={message._id}          
	        />
	      );
	    });
	  }
	}

	showAll() {
       	this.setState({allMessages: 'visibleMessage'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 nonLu() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'visibleMessage'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 ShowAutre() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'visibleMessage'});
	 }

	 shawAmour() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'visibleMessage'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});

	 }

	 showConfiance() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'visibleMessage'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 showSexo() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'visibleMessage'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 showEcole() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'visibleMessage'});
       	this.setState({MessageSante: 'cacher'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 showSante() {
       	this.setState({allMessages: 'cacher'});
       	this.setState({MessageEcole: 'cacher'});
       	this.setState({MessageSante: 'visibleMessage'});
       	this.setState({MessageConfiance: 'cacher'});
       	this.setState({MessageSexo: 'cacher'});
       	this.setState({MessageAmour: 'cacher'});
       	this.setState({MessageNonLu: 'cacher'});
       	this.setState({MessageAutre: 'cacher'});
	 }

	 VoirPlus() {
	 	let plus = this.state.more + 5
       	this.setState({more: plus});
	 }

	 VoirNonLu() {
	 	let plus = this.state.moreNonLu + 5
       	this.setState({moreNonLu: plus});
	 }

	 VoirAutre() {
	 	let plus = this.state.moreAutre + 5
       	this.setState({moreAutre: plus});
	 }

	  VoirPlusConfiance() {
	 	let plus = this.state.moreConfiance + 5
       	this.setState({moreConfiance: plus});
	 }

	  VoirPlusAmour() {
	 	let plus = this.state.moreAmour + 5
       	this.setState({moreAmour: plus});
	 }

	  VoirPlusSexo() {
	 	let plus = this.state.moreSexo + 5
       	this.setState({moreSexo: plus});
	 }

	  VoirPlusSante() {
	 	let plus = this.state.moreSante + 5
       	this.setState({moreSante: plus});
	 }

	  VoirPlusEcole() {
	 	let plus = this.state.moreEcole + 5
       	this.setState({moreEcole: plus});
	 }

	 poster() {
	    this.setState({
	      poster: !this.state.poster,
	    });
  	}

  	posterConseil() {
	    this.setState({
	      posterConseil: !this.state.posterConseil,
	    });
  	}

  	componentWillMount(){
	  	 Meteor.apply('ArticleSemaine', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            {
	            response ?
	             this.setState({idSondage: response})
	             :
	             ""
	          	}

	            },
	    });

	  	  Meteor.apply('ArticleTitre', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            {
	            response ?
	             this.setState({titreSondage: response})
	             :
	             ""
	          	}

	            },
	    });

  	    Meteor.apply('Ecole', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Ecole: response})
	    		});
	            },
	    });

	    Meteor.apply('Confiance', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Confiance: response})
	    		});
	            },
	    });

	    Meteor.apply('Sante', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Sante: response})
	    		});
	            },
	    });

	    Meteor.apply('Sexo', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Sexo: response})
	    		});
	            },
	    });

	    Meteor.apply('Amour', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Amour: response})
	    		});
	            },
	    });

	    Meteor.apply('Autre', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({Autre: response})
	    		});
	            },
	    });

	    Meteor.apply('NonLu', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({NonLu: response})
	    		});
	            },
	    });

	    Meteor.apply('AllMessages', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            if(response){
	            	this.setState({loading: false})
	            }

	             let more = this.state.moreSante;
	           return response.slice(0, 30).map((message) => {
	     		this.setState({AllMessages: response})
	    		});
	            },
	    });

 }
			   
  render() {

		return (
			<div className="MainContent">
				<div className='inlinePoster'>
					<div
						className='DemanderConseil'
				    	onClick={this.posterConseil.bind(this)}
				    	 >
				    	 <div className="textPoster">
				    	 <Img className="iconPoster" src="/support.svg"/>
				    	 Demander un conseil
				    	 </div>
				    </div>
			    </div>
			    
			    <div className='inlinePoster'>
					  	 <div 
							className='DemanderConseil'
					    	onClick={this.poster.bind(this)}
					    	 >
					    	 <div className="textPoster">
					    	 <Img className="iconPoster" src="/order.svg"/>
					    	 Trier les messages
					    	 </div>
					    </div>
				</div>

				<div className={this.state.posterConseil ? '' : "none"}>
			    <FormPosterMessage />
			    </div>
				
				{/*<Message warning>
				    <Message.Header>NOUVEAUTE : Vidéos</Message.Header>
				    <p>Vous pouvez maintenant regarder toutes les vidéos de Ambre sur Kurbys !<br />
				       N'hésitez pas rechercher une vidéo selon le conseil que vous avez besoin.
				    </p>
				</Message>*/}
				<div className="centerpub">
					<Link to={'/Livre/'}>
						<div className="LivreAcceuil" >						
									<Img className="iconLivre" src="/livre_25.png"/>
						</div>
					</Link>
					<Link to={'/SingleSondage/'+ this.state.idSondage }>
						<div className="SondageSemaine" >						
									<div className="NewSondageSemaine"> Sondage de la semaine</div>
									<div className="sondageTitre">{this.state.titreSondage}</div>
						</div>
					</Link>
					<div className="pubHome">
					        <AdSense.Google
					          client='ca-pub-6112176939320267'
					          slot='5922557517'
					          format="auto"
					        />
					</div>
	 				
					
					 
				</div>
				<div className={this.state.poster ? '' : "none"}>
				<Segment>
				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.showAll.bind(this)}>
				        Tous
				       </Button>

				       <Button
				        size="mini"
				        basic
				        color="blue"
				        onClick={this.nonLu.bind(this)}>
				        Non répondus
				       </Button>

				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.shawAmour.bind(this)}>
				         Amour
				       </Button>

				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.showConfiance.bind(this)}>
				        Confiance en soi
				       </Button>

				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.showSexo.bind(this)}>
				        Sexo
				       </Button>

				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.showSante.bind(this)}>
				        Santé
				       </Button>

				      <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.showEcole.bind(this)}>
				        Scolaire
				       </Button>

				       <Button
				        size="mini"
				        basic
				        color="red"
				        onClick={this.ShowAutre.bind(this)}>
				        Autre
				       </Button>
				    </Segment>
				</div>

	  			{/*loader au chargement de la page*/}
	  				<div className={this.state.loading ? "visibleLoader" : "none"}>
				        	<Loader active>Chargement des messages</Loader>
	  				</div>
	  			<div className={this.state.allMessages}>
					
	  				{this.renderAllMessages()}
	  			</div>

	  			<div className={this.state.MessageNonLu}>
	  				{this.renderNonLu()}
	  			</div>

				<div className={this.state.MessageAmour}>
					{this.renderAmour()}
				</div>

				<div className={this.state.MessageSexo}>
					{this.renderSexo()}
					</div>

				<div className={this.state.MessageConfiance}>
					{this.renderConfiance()}
				</div>

				<div className={this.state.MessageSante}>
					{this.renderSante()}
				</div>

				<div className={this.state.MessageEcole}>
					{this.renderEcole()}
					</div>

				<div className={this.state.MessageAutre}>
					{this.renderAutre()}
				</div>

			</div>

		);
  	}
}

export default withTracker(() => {
  
  /*const Handle = Meteor.subscribe('AllMessages');
  const loading = !Handle.ready();

  const allposts = Posts.find({}, { sort: { post_date: -1 }, limit:30});
  const amour = Posts.find({$or:
  	[{premierAmour:true},
  	{trahison:true},
    {Friendzone:true},
    {amourdistance:true},
    {separation:true}]},
    { sort: { post_date: -1 }, limit:30 });

  const autre = Posts.find({autre:true},
    { sort: { post_date: -1 }, limit:30 });

  const nonLu = Posts.find({nbrReponse:0},
    { sort: { post_date: -1 }, limit:30 });

  const confiance = Posts.find({$or:
  	[{timidite:true},
  	{depression:true},
    {suicide:true},
    {deces:true},
    {mutilation:true}]},
    { sort: { post_date: -1 }, limit:30 });

  const sexo = Posts.find({$or:
  	[{premierfois:true},
  	{Contraception:true},
    {mst:true},
    {viol:true},
    {avortement:true},
    {orientationSex:true}]},
    { sort: { post_date: -1 }, limit:30 });

  const sante = Posts.find({$or:
  	[{Anorexie:true},
  	{obesite:true},
    {drogue:true},
    {alcool:true},
    {complexe:true},
    {hopital:true},
    {handicap:true},
    {Accident:true}]},
    { sort: { post_date: -1 }, limit:30 });

  const ecole = Posts.find({$or:
  	[{echecEcole:true},
  	{Harcelement:true},
    {Discrimination:true},
    {Violence:true}]},
    { sort: { post_date: -1 }, limit:30 });

   const postExists = !loading && !!allposts;
   const postAmourExists = !loading && !!amour;
   const postConfianceExists = !loading && !!confiance;
   const postSexoExists = !loading && !!sexo;
   const postSanteExists = !loading && !!sante;
   const postEcoleExists = !loading && !!ecole;
   const postNonLuExists = !loading && !!nonLu;
   const postautreExists = !loading && !!autre;*/

  return {
    /*//allMessages: postExists ? allposts.fetch() : [],
    countAllMessages: postExists ? allposts.count() : '',

    //postNonLu: postExists ? nonLu.fetch() : [],
    countNonLu: postExists ? nonLu.count() : "",

    //postAutre: postExists ? autre.fetch() : [],
    countAutre: postExists ? autre.count() : "",
    
    //postsAmour: postExists ? amour.fetch() : [],
    countPostsAmour: postExists ? amour.count() : "",
    
    //postsConfiance: postExists ? confiance.fetch() : [],
    countPostsConfiance: postExists ? confiance.count() : "",

    //postsSexo: postExists ? sexo.fetch() : [],
    countpostsSexo: postExists ? sexo.count() : "",
   
    //postsSante: postExists ? sante.fetch() : [],
    countpostsSante: postExists ? sante.count() : "",
    
    //postsEcole: postExists ? ecole.fetch() : [],
    countpostsEcole: postExists ? ecole.count() : "",

    loading:loading,*/

  };
})(MainContent);