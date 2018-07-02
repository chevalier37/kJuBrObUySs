import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header,  } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import ListeArticlesModeration from '../component/ListeArticlesModeration.js';

import { Articles } from '../../api/Articles.js';

class ArticlesModeration extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
        }
    }

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
        //this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentWillMount(){

      }

    renderAllreponses() {
          let Allreponses = this.props.allreponses;

          return Allreponses.map((message) => {
           let date = Date.parse(message.post_date);
           const rawContent = message.post_content;  
           const contentState = convertFromRaw(JSON.parse(rawContent));
           const editorState = EditorState.createWithContent(contentState);

            return (
              <ListeArticlesModeration
                key={message._id}
                message={message}
                //content={rawContent}
                content={editorState}
                date={date}         
              />
              
            );
          
          });
    }

    render() {
   
    const { visible } = this.state  

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
                  <Segment>
                  <Header>
                    <div className="titreRecomandation"> Modération des articles </div>
                      
                  </Header>
                  </Segment>
                  
                   {this.renderAllreponses()}

                  </div>    
                      
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default ArticlesModeration =  withTracker(() => {
  const id = Meteor.userId();
  const Handle = Meteor.subscribe('AllArticles');
  const loading = !Handle.ready();
  const allreponses = Articles.find({valider:false, refuse:false});
  const reponseExists = !loading && !!allreponses;

  return {
    allreponses: reponseExists ? allreponses.fetch() : [],
  };
})(ArticlesModeration);
