import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Conseilleres } from './Conseilleres.js';

export let Favoris = new Mongo.Collection('favoris');



if (Meteor.isServer) {

Meteor.methods({

      addFavoris: function(idMessage,text,authorName, authorId, gender) {
          let user = Meteor.user();
          Favoris.insert({
                  from_id:this.userId,
                  authorId:authorId,
                  from_name: user.username,
                  authorName: authorName,
                  gender :gender,
                  date: new Date(),
                  text:text,
                  idMessage:idMessage,
                });
          console.log(idMessage)

       },

       supprimerFavoris: function(idMessage) {
          Favoris.remove({_id:idMessage});
       },


});


Meteor.publish('allFavoris', function () {

  return Favoris.find()
});


}

