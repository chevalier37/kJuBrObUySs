import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Dropdown, Menu, Button,Search, Grid, Header, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
//import _ from 'lodash'
//import faker from 'faker'
import Faheart from 'react-icons/lib/fa/heart-o';
import FaConseiller from 'react-icons/lib/fa/user-md';
import FaSearch from 'react-icons/lib/fa/search';

import { Conseilleres } from '../../api/Conseilleres.js';
/*
const source = _.times(5, () => ({
  title: Meteor.users.find().fetch(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))*/

class HeaderPage extends Component {
 	/*state = {
 			
	   }
	   componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }*/
	
  	render() {
	//const { isLoading, value, results } = this.state
	return (
		<div className="">
			<Link to="/home" ><Img className="logoPage" src="/logo_site.png"/></Link>
			{/*<div className="titreKURBYSpage"><Link to="/home" >KURBYS</Link></div>*/}
			{/* <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        
      </Grid>*/}
			    <div className="search">
					<Form size='mini'>
						<div className="search">
						    <Form.Field>
						      <input placeholder='Rechercher un pseudo' />
						    </Form.Field>
						</div>
						<div className="searchValide">
						    <Button
						     type='submit'
						     size='small'
						     color='blue'
						    >
						     	Go!
						     </Button>
						    
						</div>
					</Form>
				</div>
				
				<div className="DevenirConseiller">
					<div className="ButtonHeader">
						<Link to="/DevenirConseiller" >
							<Button color="blue" size="small">
								<div className="buttonSearch">
									<Faheart />
								</div>
							 Devenir conseiller
							</Button>
						</Link>
					</div>
					<div className="ButtonHeader">
						<Link to="/ConseillerConnecter" >
							<Button color="blue" size="small">
								<div className="buttonSearch">
									<FaConseiller />
								</div>
							 Conseillers en ligne
							</Button>
						</Link>
					</div>
				</div>
			</div>
	);
  }
}

export default HeaderPage =  withTracker(() => {
  const userId = Meteor.userId()
  const Handle = Meteor.subscribe('IsConseiller', userId);
  const loading = !Handle.ready();
  const allreponses = Conseilleres.find({'user_id':userId});
  const reponseExists = !loading && !!allreponses;
  return {
    user: reponseExists ? allreponses.count() : [],
  };
})(HeaderPage);
