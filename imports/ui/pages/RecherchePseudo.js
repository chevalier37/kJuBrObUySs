import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Form, Input } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponse from '../component/FormPosterReponse.js';
import SingleMessagePost from '../component/SingleMessagePost.js';
import ListeFavoris from '../component/ListeFavoris.js';
import ResultSearch from '../component/ResultSearch.js';

import { Conseilleres } from '../../api/Conseilleres.js';

class RecherchePseudo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hidden:false,
            placeholder:'Rechercher un pseudo',
            visible:''
        }
    }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
        this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    
    hidden(){
      this.setState({hidden: true})
      this.setState({name: ''})
    }

    visible(){
      this.setState({hidden: false})
      this.setState({placeholder: ''})
    }

    visiblePlaceholder(){
      this.setState({placeholder: 'Rechercher un pseudo',})
    }

    renderAllreponses() {
          let Allreponses = this.props.Conseiller;
          const { name, email } = this.state
          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <ResultSearch
                key={message._id}
                conseiller={message}
                date={date}
                search={name} 
                sexe={message.profile}        
              />
            );
          });
      }

    render() {
   
    const { visible } = this.state
    const { name} = this.state  

    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
        <header>
          <div className="containerSupHeader">
          <ContentMenuLeft />
            <div className="containerHeader">
            <div className="headerPage">
              <HeaderPage />
              <span
               className="buttonPush"
               onClick={this.toggleVisibility}>

               <ButtonPusher />
               </span>
            </div>
            </div>
          </div>
        </header>

       
        <Sidebar.Pushable >
              <Sidebar
                animation='overlay'
                className="ListRight"
                direction='right'
                visible={visible}
                icon='labeled'
                vertical
                className="SidebarUI"
              >
                <ContentMenuRight />
              </Sidebar>
              
              <Sidebar.Pusher>

                <div className="containerSite" onClick={this.toggleHidden}>
                  <div className="containerIMG">
                  
                  <div className="MainContent">
                  <div className="">
                    <Form size='large' autoComplete="off">
                      <div className="">
                            <Form.Field>
                              <Input
                               placeholder={this.state.placeholder}
                               name='name'
                               value={name}
                               onChange={this.handleChange}
                               onFocus={this.visible.bind(this)}
                               onBlur={this.visiblePlaceholder.bind(this)}
                               fluid
                                />
                              </Form.Field>
                      </div>
                    </Form>
                  <div
                    className={this.state.hidden==false ? "containerResult" : "none"}
                    onClick={this.hidden.bind(this)}> 
                   
                   {this.renderAllreponses()}

                  </div>
                </div>

                  </div>    
                      
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default RecherchePseudo =  withTracker(() => {
  const userId = Meteor.userId()
  const Handle = Meteor.subscribe('IsConseiller', userId);
  const loading = !Handle.ready();
  const allreponses = Conseilleres.find({'user_id':userId});
  const reponseExists = !loading && !!allreponses;

  const Handle1 = Meteor.subscribe('all');
  const loading1 = !Handle1.ready();
  const allConseillers = Meteor.users.find({}, {sort:{createdAt: -1}});
  const reponseExists1 = !loading1 && !!allConseillers;

  return {
    user: reponseExists ? allreponses.count() : [],
    Conseiller: reponseExists ? allConseillers.fetch() : [],
  };
})(RecherchePseudo);
