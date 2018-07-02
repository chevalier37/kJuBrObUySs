import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Input, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import MainContentArticles from '../component/MainContentArticles.js';
import ResultSearchArticles from '../component/ResultSearchArticles.js';

import { Articles } from '../../api/Articles.js';

class Allarticles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hidden:true,
            placeholder:'Rechercher un article',
            visible:false
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    //handleChange = (e, { name, value }) => this.setState({ [name]: value })

    renderAllreponses() {
          let Allreponses = this.props.articles;
          const { name, email } = this.state
          return Allreponses.map((message) => {
            
            return (
              <ResultSearchArticles
                key={message._id}
                article={message}
                search={name} 
                sexe={message.gender}        
              />
            );
          });
      }

    handleChange(value){
      this.setState({hidden: false})
      this.setState({ name: value })
    }  

    hidden(){
      this.setState({hidden: true})
      this.setState({name: ''})
    }

    visible(){
      //this.setState({hidden: false})
      this.setState({placeholder: ''})
    }

    visiblePlaceholder(){
      this.setState({placeholder: 'Rechercher un article',})
      //this.setState({hidden: true})
    }

    focusOut(){
      {this.state.name='' ? this.setState({hidden: true}) : ''}
    }

    render() {
    const { visible } = this.state
     const { name} = this.state    
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
    
    return (
      <div className="container">
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
                  <div className="MainContentSearchArticle">
                    <Form size='large' autoComplete="off">
                        <div className="InputSearchArticles">
                              <Form.Field>
                                <Input
                                 placeholder={this.state.placeholder}
                                 name='name'
                                 value={name}
                                 onChange={(e, { value }) => this.handleChange(value)}
                                 onFocus={this.visible.bind(this)}
                                 onBlur={this.visiblePlaceholder.bind(this)}
                                 fluid
                                  />
                                </Form.Field>
                        </div>
                     
                        <div className="RedigerArticleInput">
                          <Link to={'/RedigerArticles/'} >
                              Rédiger un article
                          </Link>
                         </div>
                   
                      </Form>
                    </div>
                  <div
                    className={this.state.hidden==false ? "containerResultArticles" : "none"}
                    onClick={this.hidden.bind(this)}> 
                   
                   {this.renderAllreponses()}

                  </div>
                    <div onClick={this.hidden.bind(this)}>
                      <MainContentArticles  />
                    </div>  
                  </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withTracker(() => {
  
  const Handle = Meteor.subscribe('AllArticles');
  const loading = !Handle.ready();
  const allreponses = Articles.find({valider:true, refuse:false}, {sort:{date: -1}});
  const reponseExists = !loading && !!allreponses;

  return {
    articles: reponseExists ? allreponses.fetch() : [],
  };
})(Allarticles);
