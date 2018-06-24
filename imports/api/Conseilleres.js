import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Conseilleres = new Mongo.Collection('conseilleres');



if (Meteor.isServer) {

Meteor.startup(function () {  
  Conseilleres._ensureIndex({ "user_id": 1});
});

Meteor.methods({

      premierAmour: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierAmour: theme, premierAmourText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  premierAmourText:text,
                  premierAmour:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      SupprimerpremierAmour: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierAmour: false, premierAmourText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      trahison: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { trahison: theme, trahisonText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  trahisonText:text,
                  trahison:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimertrahison: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { trahison: false, trahisonText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      Friendzone: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Friendzone: theme, FriendzoneText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  FriendzoneText:text,
                  Friendzone:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerfriendzone: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Friendzone: false, FriendzoneText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      amourdistance: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { amourdistance: theme, amourdistanceText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  amourdistanceText:text,
                  amourdistance:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      SupprimerDistance: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { amourdistance: false, amourdistanceText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      separation: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { separation: theme, separationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  separationText:text,
                  separation:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerseparation: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { separation: false, separationText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      timidite: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { timidite: theme, timiditeText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  timiditeText:text,
                  timidite:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimertimidite: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { timidite: false, timiditeText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      depression: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { depression: theme, depressionText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  depressionText:text,
                  depression:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerdepression: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { depression: false, depressionText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      mutilation: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mutilation: theme, mutilationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  mutilationText:text,
                  mutilation:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimermutilation: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mutilation: false, mutilationText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      suicide: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { suicide: theme, suicideText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  suicideText:text,
                  suicide:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimersuicide: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { suicide: false, suicideText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      deces: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { deces: theme, decesText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  decesText:text,
                  deces:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerdeces: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { deces: false, decesText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },


      premierfois: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierfois: theme, premierfoisText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  premierfoisText:text,
                  premierfois:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      SupprimerpremiereFois: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierfois: false, premierfoisText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      contraception: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { contraception: theme, contraceptionText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  contraceptionText:text,
                  contraception:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimercontraception: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { contraception: false, contraceptionText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      mst: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mst: theme, mstText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  mstText:text,
                  mst:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimermst: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mst: false, mstText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      viol: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { viol: theme, violText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  violText:text,
                  viol:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerviol: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { viol: false, violText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      avortement: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { avortement: theme, avortementText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  avortementText:text,
                  avortement:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

       Supprimeravortement: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { avortement: false, avortementText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      orientationSex: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { orientationSex: theme, orientationSexText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  orientationSexText:text,
                  orientationSex:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      SupprimerorientationSex: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { orientationSex: false, orientationSexText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      Anorexie: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Anorexie: theme, AnorexieText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  AnorexieText:text,
                  Anorexie:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimeranorexie: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Anorexie: false, AnorexieText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      obesite: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { obesite: theme, obesiteText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  obesiteText:text,
                  obesite:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerobesite: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { obesite: false, obesiteText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      drogue: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { drogue: theme, drogueText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  drogueText:text,
                  drogue:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerdrogue: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { drogue: false, drogueText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      alcool: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { alcool: theme, alcoolText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  alcoolText:text,
                  alcool:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimeralcool: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { alcool: false, alcoolText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      complexe: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { complexe: theme, complexeText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  complexeText:text,
                  complexe:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimercomplexe: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { complexe: false, complexeText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      hopital: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { hopital: theme, hopitalText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  hopitalText:text,
                  hopital:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerhopital: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { hopital: false, hopitalText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      accident: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { accident: theme, accidentText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  accidentText:text,
                  accident:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimeraccident: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { accident: false, accidentText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      handicap: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { handicap: theme, handicapText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  handicapText:text,
                  handicap:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Supprimerhandicap: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { handicap: false, handicapText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      echecEcole: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { echecEcole: theme, echecEcoleText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  echecEcoleText:text,
                  echecEcole:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      SupprimerechecEcole: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { echecEcole: false, echecEcoleText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      Harcelement: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Harcelement: theme, HarcelementText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  HarcelementText:text,
                  Harcelement:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

       SupprimerHarcelement: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Harcelement: false, HarcelementText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      discrimination: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { discrimination: theme, discriminationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  discriminationText:text,
                  discrimination:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

       Supprimerdiscrimination: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { discrimination: false, discriminationText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      Violence: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Violence: theme, ViolenceText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  ViolenceText:text,
                  Violence:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },


      Supprimerviolence: function() {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Violence: false, ViolenceText:" ", },
              }) && console.log(IsConseiller)
             :
             ""
            } 
      },

      DevenirConseiller: function(presentation) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { presentation: presentation},
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                  presentation: presentation,
                  Online:true,
                });
            } 
      },

      IsConseillerHeader: function() {
                const IsConseiller = Conseilleres.findOne({user_id:this.userId});
                {IsConseiller ? Istrue = true : Istrue = false}
                return Istrue;
             }, 

      IsConseiller: function(id) {
                const IsConseiller = Conseilleres.find({'user_id':id}).count();
                {IsConseiller==0 ? Istrue = true : Istrue = false}
                console.log(IsConseiller)
                return Istrue;
             },

      ConseillerOnline: function() {
                const IsConseiller = Conseilleres.find({'user_id':this.userId}).count();
                if(IsConseiller>0){
                  Conseilleres.update({user_id:this.userId}, {
                  $set: { Online: true },
                  })
                }
             },

      ConseillerOffline: function() {
                const IsConseiller = Conseilleres.find({'user_id':this.userId}).count();
                if(IsConseiller>0){
                  Conseilleres.update({user_id:this.userId}, {
                  $set: { Online: false },
                  })
                }
             },

});

Meteor.publish('AllConseiller', function () {

  return Conseilleres.find();
});

Meteor.publish('ConseillerOnline', function () {

  return Conseilleres.find({'Online':true});
});

Meteor.publish('IsConseiller', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});
  return Conseilleres.find({'user_id':id});
});

}
