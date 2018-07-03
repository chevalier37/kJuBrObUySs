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
import MainContentVideos from '../component/MainContentVideos.js';
import ResultSearchVideos from '../component/ResultSearchVideos.js';

import { Videos } from '../../api/Videos.js';

class PageVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hidden:true,
            placeholder:'Rechercher une vidéo',
            visible:false
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    //handleChange = (e, { name, value }) => this.setState({ [name]: value })

    renderAllreponses() {
          let Allreponses = this.props.videos;
          const { name, email } = this.state
          return Allreponses.map((message) => {
            
            return (
              <ResultSearchVideos
                key={message._id}
                video={message}
                search={name} 
     
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
      this.setState({placeholder: 'Rechercher une vidéo',})
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
                        <div className="InputSearchVideos">
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
                   
                      </Form>
                    </div>
                  <div
                    className={this.state.hidden==false ? "containerResultVideos" : "none"}
                    onClick={this.hidden.bind(this)}> 
                   
                   {this.renderAllreponses()}

                  </div>
                    <div onClick={this.hidden.bind(this)}>
                      <MainContentVideos  />
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
  
  const Handle = Meteor.subscribe('AllVideos');
  const loading = !Handle.ready();
  const allreponses = Videos.find({}, {sort:{date: -1}});
  const reponseExists = !loading && !!allreponses;

  return {
    videos: reponseExists ? allreponses.fetch() : [],
  };
})(PageVideos);
