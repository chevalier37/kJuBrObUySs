import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Notifications = new Mongo.Collection('notifications');
import { Posts } from './Messages.js';

if (Meteor.isServer) {

Meteor.methods({

      ChatNotif: function(message,to_id) {
            const user = Meteor.user();
            const search = Meteor.users.findOne({'_id':to_id});
            const gender = user.profile.gender;

            const to_name = search.username;
            const from_name = user.username;
            
            {to_id != this.userId ? 
             Notifications.insert({
                  message:message,
                  from_id:this.userId,
                  from_name: from_name,
                  to_id:to_id,
                  to_name: to_name,
                  date: new Date(),
                  read:false,
                  type:'chat',
                  gender:gender,
                })
             : ''}
console.log('add notif chat ' + gender)
      },

      supprimerNotification: function(idMessage) {
          Notifications.remove({_id:idMessage});
       },

       ReponseNotif: function(
        message,
        id
        ) {

        const user = Meteor.user();
        const author = user.username;
        const gender = user.profile.gender;
        const userId = this.userId;
        const postId = id;

        const search = Posts.findOne(id);
        const post_author_id = search.post_author_id;
        const post_author_name= search.post_author;
        const post_title= search.post_title;

              Notifications.insert({
                  message: message,
                  date: new Date(),
                  post_author:author,
                  gender:gender,
                  post_author_name: post_author_name,
                  to_id:post_author_id,
                  userId:userId,
                  postId:postId,
                  post_title:post_title,
                  read:false,
                  type:'reponse'
                });
console.log('add notif reponse ' + author)
      },

      NotifRecommandation: function(id,text,note) {
          let search = Meteor.users.findOne({'_id':id});
          let name = search.username;
          let user = Meteor.user();

          Notifications.insert({
                  from_id:this.userId,
                  to_id:id,
                  from_name: user.username,
                  to_name: search.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  note: note,
                  message: text,
                  read:false,
                  type:'recommandaton'
                });

console.log('add notif recommandation ' + note)
         
          
       },

       NotifDons: function(message, to_id, to_name, montant,) {
         const user = Meteor.user();
         const from_id = this.userId;
         const from_name = user.username;
         const gender = user.profile.gender;
         Notifications.insert({
                  from_id:this.userId,
                  from_name:user.username,
                  to_id: to_id,
                  to_name:to_name,
                  gender :user.profile.gender,
                  date: new Date(),
                  montant: montant,
                  message:message,
                  read:false,
                  type:'don'
                });
console.log('add notif don ' + montant)
     },

});



Meteor.publish('AllNotifications', function () {

  return Notifications.find();
});


}

