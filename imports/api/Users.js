import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

import { Posts } from './Messages.js';
import { Conseilleres } from './Conseilleres.js';
import { ContactChat } from './ContactChat.js';
import { Favoris } from './Favoris.js';
import { Chat } from './Chat.js';
import { Recommandations } from './Recommandations.js';
import { Comments } from './Reponses.js';


if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  /*Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });*/
/*
const stripe = require("stripe")("sk_test_JvofPcmk1InWfME0dR7HUJRK");

stripe.accounts.create({
  type: 'standard',
  country: 'FR',
  email: 'editions@seconde-vie.fr'
}, function(err, account) {
  account
});
*/

Meteor.methods({

      FormSubscribePseudo: function(pseudo) {
                let search = Meteor.users.find({'username':pseudo.pseudo}).count();
                let IsPseudo = false;
                {search >0 ? IsPseudo = true : IsPseudo = false}
                console.log(pseudo.pseudo)
                console.log(IsPseudo)
                console.log(search)
                return IsPseudo;
             },

      FormSubscribeMail: function(email) {
                let search = Meteor.users.find({'profile.mail':email.email}).count();
                let IsMail = false;
                {search >0 ? IsMail = true : IsMail = false}
                console.log(email.email)
                console.log(IsMail)
                console.log(search)
                return IsMail;
             },

      FormLogin: function(username,password) {
                /*let search = Meteor.users.find({'profile.mail':email.email}).count();
                let IsMail = false;
                {search >0 ? IsMail = true : IsMail = false}*/
                console.log(username.username)
                console.log(password)
                //console.log(IsMail)
                //console.log(search)
                return username;
             },

      UserExiste: function(pseudo,email) {
                let search = Meteor.users.find({'profile.mail':pseudo.email, 'username':pseudo.pseudo}).count();
                let Istrue = false;
                {search >0 ? Istrue = true : Istrue = false}
                /*console.log(pseudo.pseudo)
                console.log(pseudo.email)
                console.log(Istrue)
                console.log(search)*/
                return Istrue;
             },

      ResetPassword: function(pseudo, password) {
                let isExiste = Meteor.users.find({'username':pseudo.pseudo}).count();
                if (isExiste > 0 ){
                search = Meteor.users.findOne({'username':pseudo.pseudo}),
                newPassword = pseudo.password,
                //console.log(search._id)
                //console.log(newPassword)
                Accounts.setPassword(search._id, newPassword);
                return search;
               
              } 
             },

      usernameRecommander: function(id) {
                      let search = Meteor.users.findOne({'_id':id.id});
                      let IsPseudo = false;
                      {search >0 ? IsPseudo = true : IsPseudo = false}
                      console.log(id.id)
                      console.log(IsPseudo)
                      console.log(search)
                      return search;
                   },

      supprimerCompte: function() {
        const myId = this.userId;

          Meteor.users.remove({_id:myId});
          
          if(Posts.find({post_author_id:myId}).count() >0){
            Posts.remove({post_author_id:myId})
            //console.log("posts")
          }

          if(Conseilleres.find({user_id:myId}).count() >0){
          Conseilleres.remove({user_id:myId}) 
          //console.log("Conseilleres")
          }

          if(ContactChat.find({from_id:myId}).count() >0 || ContactChat.find({to_id:myId}).count() >0){
          ContactChat.remove({from_id:myId})
          ContactChat.remove({to_id:myId}) 
          //console.log("ContactChat") 
          }

          if(Favoris.find({from_id:myId}).count() >0){
          Favoris.remove({from_id:myId})
          //console.log("Favoris")
          }

          if(Chat.find({from_id:myId}).count() >0 || Chat.find({to_id:myId}).count() >0){
          Chat.remove({from_id:myId})
          Chat.remove({to_id:myId}) 
          //console.log("Chat") 
          }

          if(Recommandations.find({from_id:myId}).count() >0 || Recommandations.find({to_id:myId}).count() >0){
          Recommandations.remove({from_id:myId})
          Recommandations.remove({to_id:myId}) 
          //console.log("Recommandations") 
          }

          if(Comments.find({userId:myId}).count() >0){
          Comments.remove({userId:myId})
          //console.log("Comments") 
          }
       },

});

Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.mail = options.mail;
   user.profile.naissance  = options.naissance;
   user.profile.gender = options.sexe;
   user.profile.createdAt = options.createdAt;
   user.profile.note = 0;
   // Returns the user object
   return user;
});



Meteor.publish('fetchUser', function ( ) {
  // Validate the arguments to be what we expect
  /*new SimpleSchema({
    username: { type: [String] }
  }).validate({ username });*/

  // Select only the users that match the array of IDs passed in
  /*const selector = {
    username: { $in: username }
  };*/

  // Only return one field, `initials`
  const options = {
    fields: { username: 1 }
  };


  return Meteor.users.find(options);
});

/*
Meteor.publish('fetchEmail', function ({ email }) {
  // Validate the arguments to be what we expect
  new SimpleSchema({
    email: { type: [String] }
  }).validate({ email });

  // Select only the users that match the array of IDs passed in
  const selector = {
    email: { $in: profile.mail }
  };

  // Only return one field, `initials`
  const options = {
    fields: { 'profile.mail': 1 }
  };

  return Meteor.users.find(selector, options);
});*/

Meteor.publish('all', function () {
  // Validate the arguments to be what we expect




  /*return Meteor.users.find({},{limit:2, fields:{_id:1}});*/
  return Meteor.users.find()
});
}