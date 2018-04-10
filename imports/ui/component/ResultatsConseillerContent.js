import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Form, Header, Divider, Table, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { withTracker } from 'meteor/react-meteor-data';

import { Conseilleres } from '../../api/Conseilleres.js';


class ResultatsConseillerContent extends Component {

	constructor(props) {
    super(props);
    this.state = {
	    column: null,
	    data: this.props.allreponses,
	    data1: this.props.autresConseilleres,
	    direction: null,
	    titre:'',
	    pasDeResultat:'cacher',
	  }
	}

	  
	  handleSort = clickedColumn => () => {
    	const { column, data, direction } = this.state
    	let Allconseilleres = this.props.allreponses;

	    if (column !== clickedColumn) {
	      this.setState({
	        column: clickedColumn,
	        data: _.sortBy(Allconseilleres, [clickedColumn]),
	        direction: 'ascending',
	      })

	      return
	    }

		  this.setState({
		      data: Allconseilleres.reverse(),
		      direction: direction === 'ascending' ? 'descending' : 'ascending',
		    })
	  }

	  handleSortConseilleres = clickedColumn => () => {
    	const { column, data1, direction } = this.state
    	let AutresConseilleres = this.props.autresConseilleres;

	    if (column !== clickedColumn) {
	      this.setState({
	        column: clickedColumn,
	        data1: _.sortBy(AutresConseilleres, [clickedColumn]),
	        direction: 'ascending',
	      })

	      return
	    }

		  this.setState({
		      data1: AutresConseilleres.reverse(),
		      direction: direction === 'ascending' ? 'descending' : 'ascending',
		    })
	  }

	  renderSearchConseiller() {
      let Allconseilleres = this.props.allreponses;
      

      return Allconseilleres.map((conseiller) => {
       	let now = new Date();
  		 //on calcul l'age en millisecondes
  		let diff = now - conseiller.naissance;
  		 //on calcul l'age en années
  		let age = Math.round(diff / 31536000000);
        
        return (
          	<Table.Row key={conseiller._id}>
				<Table.Cell>
				<div className={conseiller.gender}>
					<Link to={'/Chat/' + conseiller.user_id}>
						{conseiller.username}
						<br />
						{age} ans<br />
						<Rating icon='heart'
	          			defaultRating={conseiller.note}
	          			maxRating={4}
	          			disabled
	          			size='mini'
	          	 		/>
          	 		</Link>
				</div>
				</Table.Cell>
              	<Table.Cell className={this.props.premierAmourText}>{conseiller.premierAmourText}</Table.Cell>
              	<Table.Cell className={this.props.trahisonText}>{conseiller.trahisonText}</Table.Cell>
              	<Table.Cell className={this.props.FriendzoneText}>{conseiller.FriendzoneText}</Table.Cell>
              	<Table.Cell className={this.props.amourdistanceText}>{conseiller.amourdistanceText}</Table.Cell>
              	<Table.Cell className={this.props.separationText}>{conseiller.separationText}</Table.Cell>
              	<Table.Cell className={this.props.timiditeText}>{conseiller.timiditeText}</Table.Cell>
              	<Table.Cell className={this.props.depressionText}>{conseiller.depressionText}</Table.Cell>
              	<Table.Cell className={this.props.mutilationText}>{conseiller.mutilationText}</Table.Cell>
              	<Table.Cell className={this.props.suicideText}>{conseiller.suicideText}</Table.Cell>
              	<Table.Cell className={this.props.decesText}>{conseiller.decesText}</Table.Cell>
              	<Table.Cell className={this.props.premierfoisText}>{conseiller.premierfoisText}</Table.Cell>
              	<Table.Cell className={this.props.contraceptionText}>{conseiller.contraceptionText}</Table.Cell>
              	<Table.Cell className={this.props.mstText}>{conseiller.mstText}</Table.Cell>
              	<Table.Cell className={this.props.violText}>{conseiller.violText}</Table.Cell>
              	<Table.Cell className={this.props.avortementText}>{conseiller.avortementText}</Table.Cell>
              	<Table.Cell className={this.props.orientationSexText}>{conseiller.orientationSexText}</Table.Cell>
              	<Table.Cell className={this.props.AnorexieText}>{conseiller.AnorexieText}</Table.Cell>
              	<Table.Cell className={this.props.obesiteText}>{conseiller.obesiteText}</Table.Cell>
              	<Table.Cell className={this.props.drogueText}>{conseiller.drogueText}</Table.Cell>
              	<Table.Cell className={this.props.alcoolText}>{conseiller.alcoolText}</Table.Cell>
              	<Table.Cell className={this.props.complexeText}>{conseiller.complexeText}</Table.Cell>
              	<Table.Cell className={this.props.hopitalText}>{conseiller.hopitalText}</Table.Cell>
              	<Table.Cell className={this.props.accidentText}>{conseiller.accidentText}</Table.Cell>
              	<Table.Cell className={this.props.handicapText}>{conseiller.handicapText}</Table.Cell>
              	<Table.Cell className={this.props.echecEcoleText}>{conseiller.echecEcoleText}</Table.Cell>
              	<Table.Cell className={this.props.HarcelementText}>{conseiller.HarcelementText}</Table.Cell>
              	<Table.Cell className={this.props.discriminationText}>{conseiller.discriminationText}</Table.Cell>
              	<Table.Cell className={this.props.ViolenceText}>{conseiller.ViolenceText}</Table.Cell>

			</Table.Row>
        );
      });
  	}

  	renderSearchAllConseiller() {
      let Allconseilleres = this.props.autresConseilleres;
      

      return Allconseilleres.map((conseiller) => {
       	let now = new Date();
  		 //on calcul l'age en millisecondes
  		let diff = now - conseiller.naissance;
  		 //on calcul l'age en années
  		let age = Math.round(diff / 31536000000);
        
        return (
          	<Table.Row key={conseiller._id}>
				<Table.Cell>
				<div className={conseiller.gender}>
					<Link to={'/Chat/' + conseiller.user_id}>
						{conseiller.username}
						<br />
						{age} ans<br />
						<Rating icon='heart'
	          			defaultRating={conseiller.note}
	          			maxRating={4}
	          			disabled
	          			size='mini'
	          	 		/>
          	 		</Link>
				</div>
				</Table.Cell>
              	<Table.Cell>{conseiller.presentation}</Table.Cell>
			</Table.Row>
        );
      });
  	}





  render() {
    const { column, data, data1, direction } = this.state

	    return (
	    	<div className="MainContent">
				<Segment className="MainContent">
					<Header>
					Resultat de la recherche : {this.props.titre} 
					</Header>
					<Divider />
						
					<div className={this.props.pasDeResultatTableau}>
					     <Table sortable celled fixed selectable color="teal" >
					        <Table.Header>
					          <Table.Row>
					            <Table.HeaderCell
					             width={3}
					             sorted={column === 'username' ? direction : null}
					             onClick={this.handleSort('username')}>
					              Pseudo
					            </Table.HeaderCell>
					            <Table.HeaderCell
					             sorted={column === 'message' ? direction : null} 
					             onClick={this.handleSort('message')}>
					              Message
					            </Table.HeaderCell>
					          </Table.Row>
					        </Table.Header>
					        <Table.Body>
					             {this.renderSearchConseiller()}
					        </Table.Body>
					    </Table>
				    </div>

				    <div className={this.props.pasDeResultat + " " + "ResultatConseiller"}>
				    Il n'y a pas encore de conseillers inscrit pour le thème "{this.props.titre} "
				    </div>
				    



	    		<Header>
					Tous les conseillers disponibles :
					</Header>
					<Divider />
						
				     <Table sortable celled fixed selectable color="red" >
				        <Table.Header>
				          <Table.Row>
				            <Table.HeaderCell
				             width={3} 
				             sorted={column === 'name1' ? direction : null}
				             onClick={this.handleSortConseilleres('name1')}>
				              Pseudo
				            </Table.HeaderCell>
				            <Table.HeaderCell
				             sorted={column === 'message1' ? direction : null}
				             onClick={this.handleSortConseilleres('message1')}>
				              Message
				            </Table.HeaderCell>
				          </Table.Row>
				        </Table.Header>
				        <Table.Body>
				             {this.renderSearchAllConseiller()}
				        </Table.Body>
				    </Table>
	    		</Segment>

			</div>
	    )
	  }
	
}

export default ResultatsConseillerContent = withTracker(({theme}) => {
  	const Handle = Meteor.subscribe('Allreponses');
  	const loading = !Handle.ready();
  	let allreponses = '';
  	let titre ='0';
  	let allreponsesCount = 0;
  	let pasDeResultat = '';
  	let pasDeResultatTableau = '';

  	{theme == 'premierAmour' ? titre = 'Premier Amour'  : '' }
  	{theme == 'trahison' ? titre = 'Trahison Amoureuse' : '' }
	{theme == 'Friendzone' ? titre = 'Friendzone' : '' }
	{theme == 'amourdistance' ? titre = 'Amour à distance' : '' }
	{theme == 'separation' ? titre = 'Séparation amoureuse' : '' }
	{theme == 'timidite' ? titre = 'Timidité' : '' }
	{theme == 'depression' ? titre = 'Dépression' : '' }
	{theme == 'Suicide' ? titre = 'Suicide' : '' }
	{theme == 'deces' ? titre = 'Décès' : '' }
	{theme== 'mutilation' ? titre = 'Mutilation' : '' }
	{theme == 'premierfois' ? titre = 'Première fois' : '' }
	{theme == 'contraception' ? titre = 'Contraception' : '' }
	{theme == 'mst' ? titre = 'Maladie, MST' : '' }
	{theme == 'viol' ? titre = 'Viol' : '' }
	{theme == 'avortement' ? titre = 'Avortement' : '' }
	{theme == 'orientationSex' ? titre = 'Orientation Sexuelle' : '' }
	{theme == 'Anorexie' ? titre = 'Anorexie' : '' }
	{theme == 'obesite' ? titre = 'Obésité' : '' }
	{theme == 'drogue' ? titre = 'Drogue' : '' }
	{theme == 'alcool' ? titre = 'Alcool' : '' }
	{theme == 'complexe' ? titre = 'Complexe' : '' }
	{theme == 'hopital' ? titre = 'Hospitalisation' : '' }
	{theme == 'handicap' ? titre = 'Handicap' : '' }
	{theme == 'accident' ? titre = 'Accident' : '' }
	{theme == 'echecEcole' ? titre = 'Echec scolaire' : '' }
	{theme == 'Harcelement' ? titre = 'Harcèlement' : '' }
	{theme == 'discrimination' ? titre = 'Discrimination' : '' }
	{theme == 'Violence' ? titre = 'Violence' : '' }
	{theme == 'autre' ? titre = 'Autre' : '' }

	{theme == 'premierAmour' ? allreponsesCount = Conseilleres.find({premierAmour:true}).count()  : '' }
	{theme == 'trahison' ? allreponsesCount = Conseilleres.find({trahison:true}).count() : '' }
	{theme == 'Friendzone' ? allreponsesCount = Conseilleres.find({Friendzone:true}).count() : '' }
	{theme == 'amourdistance' ? allreponsesCount = Conseilleres.find({amourdistance:true}).count() : '' }
	{theme == 'separation' ? allreponsesCount = Conseilleres.find({separation:true}).count() : '' }
	{theme == 'timidite' ? allreponsesCount = Conseilleres.find({timidite:true}).count() : '' }
	{theme == 'depression' ? allreponsesCount = Conseilleres.find({depression:true}).count() : '' }
	{theme == 'mutilation' ? allreponsesCount = Conseilleres.find({mutilation:true}).count() : '' }
	{theme == 'suicide' ? allreponsesCount = Conseilleres.find({suicide:true}).count() : '' }
	{theme == 'deces' ? allreponsesCount = Conseilleres.find({deces:true}).count() : '' }
	{theme == 'premierfois' ? allreponsesCount = Conseilleres.find({premierfois:true}).count() : '' }
	{theme == 'contraception' ? allreponsesCount = Conseilleres.find({contraception:true}).count() : '' }
	{theme == 'mst' ? allreponsesCount = Conseilleres.find({mst:true}).count() : '' }
	{theme == 'viol' ? allreponsesCount = Conseilleres.find({viol:true}).count() : '' }
	{theme == 'avortement' ? allreponsesCount = Conseilleres.find({avortement:true}).count() : '' }
	{theme == 'orientationSex' ? allreponsesCount = Conseilleres.find({orientationSex:true}).count() : '' }
	{theme == 'Anorexie' ? allreponsesCount = Conseilleres.find({Anorexie:true}).count() : '' }
	{theme == 'obesite' ? allreponsesCount = Conseilleres.find({obesite:true}).count() : '' }
	{theme == 'drogue' ? allreponsesCount = Conseilleres.find({drogue:true}).count() : '' }
	{theme == 'alcool' ? allreponsesCount = Conseilleres.find({alcool:true}).count() : '' }
	{theme == 'complexe' ? allreponsesCount = Conseilleres.find({complexe:true}).count() : '' }
	{theme == 'hopital' ? allreponsesCount = Conseilleres.find({hopital:true}).count() : '' }
	{theme == 'accident' ? allreponsesCount = Conseilleres.find({accident:true}).count() : '' }
	{theme == 'handicap' ? allreponsesCount = Conseilleres.find({handicap:true}).count() : '' }
	{theme == 'echecEcole' ? allreponsesCount = Conseilleres.find({echecEcole:true}).count() : '' }
	{theme == 'Harcelement' ? allreponsesCount = Conseilleres.find({Harcelement:true}).count() : '' }
	{theme == 'discrimination' ? allreponsesCount = Conseilleres.find({discrimination:true}).count() : '' }
	{theme == 'Violence' ? allreponsesCount = Conseilleres.find({Violence:true}).count() : '' }


    {allreponsesCount ==0 ? pasDeResultat = 'visible' : pasDeResultat = 'cacher' }
    {allreponsesCount ==0 ? pasDeResultatTableau = 'cacher' : pasDeResultatTableau = 'visible' }

  	autresConseilleres = Conseilleres.find();
  	let premierAmourText ='none';
  	let trahisonText ='none';
  	let FriendzoneText ='none';
  	let amourdistanceText ='none';
	let separationText ='none';
	let timiditeText ='none';
	let depressionText ='none';
	let mutilationText ='none';
	let suicideText ='none';
	let decesText ='none';
	let premierfoisText ='none';
	let contraceptionText ='none';
	let mstText ='none';
	let violText ='none';
	let avortementText ='none';
	let orientationSexText ='none';
	let AnorexieText ='none';
	let obesiteText ='none';
	let drogueText ='none';
	let alcoolText ='none';
	let complexeText ='none';
	let hopitalText ='none';
	let accidentText ='none';
	let handicapText ='none';
	let echecEcoleText ='none';
	let HarcelementText ='none';
	let discriminationText ='none';
	let ViolenceText ='none';


  	if (theme == 'premierAmour'){premierAmourText = "ok"; allreponses = Conseilleres.find({premierAmour:true});}
	if (theme == 'trahison') {trahisonText = "ok"; allreponses = Conseilleres.find({trahison:true});}
	if (theme == 'Friendzone') {FriendzoneText = "ok"; allreponses = Conseilleres.find({Friendzone:true}); }
	if (theme == 'amourdistance'){amourdistanceText = "ok"; allreponses = Conseilleres.find({amourdistance:true}); }
	if (theme == 'separation') {separationText = "ok"; allreponses = Conseilleres.find({separation:true}) ; }
	if (theme == 'timidite') {timiditeText = "ok"; allreponses = Conseilleres.find({timidite:true}) ; }
	if (theme == 'depression') {depressionText = "ok"; allreponses = Conseilleres.find({depression:true});}
	if (theme == 'mutilation') {mutilationText = "ok"; allreponses = Conseilleres.find({mutilation:true}); }
	if (theme == 'suicide') {suicideText = "ok"; allreponses = Conseilleres.find({suicide:true}); }
	if (theme == 'deces') {decesText = "ok"; allreponses = Conseilleres.find({deces:true}); }
	if (theme == 'premierfois') {premierfoisText = "ok"; allreponses = Conseilleres.find({premierfois:true}); }
	if (theme == 'contraception') {contraceptionText = "ok"; allreponses = Conseilleres.find({contraception:true}); }
	if (theme == 'mst') {mstText = "ok"; allreponses = Conseilleres.find({mst:true}); }
	if (theme == 'viol') {violText = "ok"; allreponses = Conseilleres.find({viol:true}) ; }
	if (theme == 'avortement') {avortementText = "ok"; allreponses = Conseilleres.find({avortement:true}) ; }
	if (theme == 'orientationSex') {orientationSexText = "ok"; allreponses = Conseilleres.find({orientationSex:true}); }
	if (theme == 'Anorexie') {AnorexieText = "ok"; allreponses = Conseilleres.find({Anorexie:true}); }
	if (theme == 'obesite') {obesiteText = "ok"; allreponses = Conseilleres.find({obesite:true}) ; }
	if (theme == 'drogue') {drogueText = "ok"; allreponses = Conseilleres.find({drogue:true}); }
	if (theme == 'alcool') {alcoolText = "ok"; allreponses = Conseilleres.find({alcool:true}); }
	if (theme == 'complexe') {complexeText = "ok"; allreponses = Conseilleres.find({complexe:true});}
	if (theme == 'hopital') {hopitalText = "ok"; allreponses = Conseilleres.find({hopital:true}) ;}
	if (theme == 'accident') {accidentText = "ok"; allreponses = Conseilleres.find({accident:true}); }
	if (theme == 'handicap') {handicapText = "ok"; allreponses = Conseilleres.find({handicap:true}) ; }
	if (theme == 'echecEcole') {echecEcoleText = "ok"; allreponses = Conseilleres.find({echecEcole:true}) ; }
	if (theme == 'Harcelement') {HarcelementText = "ok"; allreponses = Conseilleres.find({Harcelement:true}) ; }
	if (theme == 'discrimination') {discriminationText = "ok"; allreponses = Conseilleres.find({discrimination:true}); }
	if (theme == 'Violence') {ViolenceText = "ok"; allreponses = Conseilleres.find({Violence:true}); }

  const reponseExists = !loading && !!allreponses;
  return {
    allreponses: reponseExists ? allreponses.fetch() : [],
    allreponsesCount: allreponsesCount,
    autresConseilleres: autresConseilleres.fetch(),
    titre:titre,
    pasDeResultat:pasDeResultat,
    pasDeResultatTableau:pasDeResultatTableau,
    premierAmourText:premierAmourText,
  	trahisonText :trahisonText,
  	FriendzoneText :FriendzoneText,
  	amourdistanceText :amourdistanceText,
	separationText :separationText,
	timiditeText :timiditeText,
	depressionText :depressionText,
	mutilationText: mutilationText,
	suicideText :suicideText,
	decesText :decesText,
	premierfoisText :premierfoisText,
	contraceptionText :contraceptionText,
	mstText :mstText,
	violText :violText,
	avortementText :avortementText,
	orientationSexText :orientationSexText,
	AnorexieText :AnorexieText,
	obesiteText :obesiteText,
	drogueText :drogueText,
	alcoolText :alcoolText,
	complexeText :complexeText,
	hopitalText :hopitalText,
	accidentText :accidentText,
	handicapText :handicapText,
	echecEcoleText :echecEcoleText,
	HarcelementText :HarcelementText,
	discriminationText :discriminationText,
	ViolenceText: ViolenceText,
  };
})(ResultatsConseillerContent);