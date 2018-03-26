import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';


class DevenirConseiller extends Component {

    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    render() {
    const { visible } = this.state
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }  

    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
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
                  <ContentMenuLeft />

                   <div className="MainContent">
                    <Segment className="MainContentPage">
                      <Header>
                      Numéros utiles
                      </Header>
                      <Divider />
                      <div className="corpsText">
                      <div class="container-messages-acceuil affiche">
                        <div class="register blanc">
                         <div class="numero">
                            <div className="titreNumeros">Police / Gendarmerie: 17</div><br />
                            <strong>Dans quelles situations appeler le 17 ?</strong><br />

                            J’appelle le 17 lorsque je suis en danger ou que je constate que quelqu'un est en danger :<br />
                            en cas de violences<br />
                            en cas d’agression<br />
                            en cas de vol à l’arraché<br />
                            en cas de cambriolage<br /><br />

                             
                            Le traitement de l’appel au 17 :<br />

                            Votre appel sera pris en charge immédiatement par le centre de traitement du 17 « police secours » qui enverra sur place la patrouille la plus proche et adaptée à votre urgence (police ou gendarmerie nationales selon la zone de compétence). Gardez au maximum votre sang-froid, donnez votre localisation exacte, la nature de l'urgence, le nombre d'agresseurs et leur description, notez les numéros de plaque, indiquer la direction de fuite, etc.
                            En cas d’appel non urgent, c’est-à-dire pour signaler à la police un fait qui ne nécessite pas d’intervention immédiate, contactez le commissariat de police ou la brigade de gendarmerie le plus proche des lieux des faits ou de votre résidence.<br /><br />

                            <div className="titreNumeros">Numéro d'appel d'urgence européen : 112</div><br />
                            <strong>Pourquoi appeler le 112 ?</strong><br />

                            Un accident peut survenir n’importe quand et n’importe où, même lorsque vous visitez un pays de l’Union européenne. Si vous êtes impliqué dans un accident ou que vous en êtes témoin ou si vous remarquez un incendie ou apercevez un cambriolage, vous pouvez appeler le 112.<br /><br />

                            Le 112 est le numéro d’appel d’urgence européen unique, disponible gratuitement partout dans l’Union européenne. Ce numéro ne remplace pas les numéros d’urgence nationaux existants. Dans la plupart des pays, il cohabite avec ceux-ci. Le Danemark, la Finlande, les Pays-Bas, le Portugal, la Suède et la Roumanie ont même choisi le 112 comme principal numéro d’urgence national. Le 112 existe également dans certains pays en dehors de l’UE (comme la Suisse et l’Afrique du Sud) et il est disponible dans le monde entier sur les réseaux mobiles de GSM.<br /><br />
                            J’appelle le 112 pour toute urgence nécessitant une ambulance, les services d’incendie ou la police.<br /><br />

                            Ne raccrochez pas si vous appelez le 112 par erreur ! Expliquez à l’opérateur que tout va bien. Dans le cas contraire, il se peut qu’une aide d’urgence doive être envoyée pour s’assurer qu’il n’y a aucun problème.<br />
                             <br />
                            <div className="titreNumeros">Samu : 15</div><br />
                            <strong>Pourquoi appeler le 15 ?</strong><br />

                            Le Service d'aide médicale urgente (SAMU) peut être appelé pour obtenir l’intervention d’une équipe médicale lors d’une situation de détresse vitale, ainsi que pour être redirigé vers un organisme de permanence de soins (médecine générale, transport ambulancier,…)<br /><br />

                            J’appelle le 15 : <br />
                            en cas de besoin médical urgent<br />
                            en cas de malaise<br />
                            en cas de coma<br />
                            en cas d’hémorragie<br />
                            en cas de douleur thoracique (cela peut être un infarctus et nécessite une intervention très rapide, la mort pouvant survenir rapidement)<br />
                            en cas de difficultés respiratoires (surtout si la personne est asthmatique ou cardiaque ou que cela se produit lors d'un repas)<br />
                            quand une personne ne respire plus<br />
                            quand vous vous trouvez en présence d'un brûlé<br />
                            en cas d’intoxication<br /><br />
                             
                            <div className="titreNumeros">Sapeurs-pompiers : 18</div><br />
                            <strong>Pourquoi appeler le 18 ?</strong><br />

                            Les sapeurs-pompiers peuvent être appelés pour signaler une situation de péril ou un accident concernant des biens ou des personnes et obtenir leur intervention rapide.<br />

                            J’appelle le 18 en cas de :<br />
                            incendie<br />
                            fuite de gaz<br />
                            risque d’effondrement<br />
                            ensevelissement<br />
                            brûlure<br />
                            électrocution<br />
                            accident de la route<br /><br />
                             
                            <div className="titreNumeros">Numéro d'urgence pour les personnes sourdes et malentendantes : 114</div><br />

                            Ce numéro d’urgence national unique est accessible, dans un premier temps par SMS. Il ne reçoit pas les appels vocaux téléphoniques. Les SMS émis vers le « 114 » arrivent au centre relais national implanté au Centre hospitalier universitaire de Grenoble. Les professionnels sourds et entendants spécifiquement formés traitent ensuite ces messages et contactent les services d'urgence compétents (police / gendarmerie, SAMU, sapeurs-pompiers), si la situation nécessite leur intervention.<br /><br />
                            <strong>Pourquoi appeler le 114 ?</strong><br />

                            Toute personne sourde ou malentendante, victime ou témoin d’une situation d’urgence qui nécessite l’intervention des services de secours, peut désormais composer le « 114 », numéro gratuit, ouvert 7/7, 24h/24.<br /><br />

                            <div className="titreNumeros">Suicide écoute : 01 45 39 40 00 </div><br />
                            Suicide Ecoute vient en aide à ceux qui pensent mettre fin à leurs jours ou ont décidé de le faire.
                            Ce service permet à chacun, dans l'anonymat le plus total, d'exprimer sa souffrance.<br />

                            Pour rompre le mur du silence, des bénévoles écoutent les personnes en détresse et les aident à exprimer leur mal être. Ils établissent une relation de confiance avec l'appelant, de façon à faciliter la mise en mots de son mal-être.<br />
                            Ils offrent une écoute aux personnes qui souffrent tant psychologiquement que physiquement,  qu'elles envisagent un passage à l'acte ou non.
                            <br />
                            Les proches de personnes déprimées ou suicidaires, ceux qui ont dû subir le suicide d'un être aimé, ou le redoutent, peuvent également exprimer leur inquiétude et leur souffrance auprès de Suicide écoute.<br /><br />

                            <div className="titreNumeros">Sida info service : 0 800 840 800</div><br />
                            Sida info service est un dispositif téléphonique "grand public" permettant de répondre à des interrogations liées au VIH/sida, aux problématiques connexes et à d’autres pathologies qui par leur prévention, leur mode de transmission s’apparentent au VIH.<br /><br />
                            Ce service est à l’écoute de tous : que vous soyez séronégatif, séropositif, malade ou proche d’une personne touchée, que vous n’ayez pas fait le test de dépistage ou que vous soyez en attente de résultats. Chaque appel est accueilli avec respect, sans jugement. La confidentialité permet à chacun de s’exprimer librement.<br /><br />

                            <div className="titreNumeros">Fil santé jeunes : 32 24</div><br />
                            Une équipe composée de professionnels de santé (médecins et psychologues) pour écouter les jeunes de 12 à 25 ans.<br /><br />

                            <div className="titreNumeros">Ecoute sexualité contraception IVG : <br />0 800 803 803 </div><br />
                            Ce numéro national unique, anonyme et gratuit, est dédié aux questions relatives à la sexualité, à la contraception et à l’interruption volontaire de grossesse (IVG). Il s'agit d'un outil indispensable pour réduire les inégalités et les difficultés d’accès à l’information, et permettre ainsi le plein exercice  de ses droits.<br /><br />

                            <div className="titreNumeros">Drogues info service :<br /> 0 800 231 313 (fixe) ou 01 20 231 313 (portable)</div>
                            Drogues info service est le service national d’aide à distance en matière de drogues et de dépendances. Ce service s’appuie sur des règles d’anonymat, de confidentialité, de neutralité et de non jugement dans ses missions d’information, de conseil, de soutien et d’orientation du public.<br /><br />

                            <div className="titreNumeros">Tabac info service : 0 825 309 310</div><br />
                            Quand on souhaite arrêter de fumer, quand on hésite, qu’on ne sait pas comment faire, ou encore lorsqu’on est en période de sevrage, dialoguer peut aider à mieux vivre le processus d’arrêt. A cette fin, Tabac info service met à votre disposition un ensemble de contacts qui peuvent vous être utiles.<br /><br />

                            <div className="titreNumeros">Ecoute alcool : 0 811 913 030 </div><br />
                            Ouvert aux personnes concernées comme à leur entourage, le service offre un espace d’écoute aussi confidentiel que celui des professionnels de santé. La confidentialité des échanges est garantie pour que chacun puisse s’exprimer librement sur sa propre consommation ou celle de ses proches, sans risque de poursuites, de jugement, de discrimination. L’écoute au téléphone individuel permet également d’aborder des aspects de l’histoire personnelle dont il est souvent difficile de parler.<br /><br />


                            <div className="titreNumeros">SOS psychiatrie : 01 47 07 24 24</div><br />
                            Après réception téléphonique, l'appel est transmi au psychiatre de garde. Le médecin évalue alors la demande au téléphone et la nécessité d'une visite à domicile pour apprécier l'état du patient et apporter une réponse thérapeutique (consultation, orientation, hospitalisation, soins immédiats).
                            Par ailleurs, le médecin de garde coordonne son intervention avec les partenaires habituels de l'urgence psychiatrique : cliniques, services d'urgence des hôpitaux, CPOA, SAMU, police, pompiers.<br /><br />

                            <div className="titreNumeros">Enfance maltraitée : 119 </div><br />
                            Ce service traite les violences subies par les enfants (violences psychologiques, physiques et sexuelles), notamment au sein de la famille ou en institution. Les adultes confrontés ou préoccupés par une situation d’enfant en danger ou en risque de l’être peuvent également appeler ce service.<br /><br />


                            <div className="titreNumeros">Maltraitance des personnes âgées : 39 77</div><br />
                            La maltraitance des personnes âgées peut entraîner de graves traumatismes physiques et avoir des conséquences psychologiques à long terme. Ce service s'adresse aux personnes âgées et aux personnes handicapées adultes victimes de maltraitance, aux témoins de situations de maltraitance, entourage privé et professionnel, aux personnes prenant soin d’une personne âgée ou handicapée et ayant des difficultés dans l’aide apportée.<br /><br />

                            <div className="titreNumeros">Violences conjugales : 39 19</div><br />
                            Numéro d’écoute national destiné aux femmes victimes de violences, à leur entourage et aux professionnels concernés (toutes les violences, violences conjugales, violences sexuelles, mariages forcés, mutilations sexuelles féminines, violences au travail).<br /><br />


                            <div className="titreNumeros">Enfants disparus : 116 000</div><br />
                            Ce service appui et guide les parents, familles ou personnes responsables d'enfants disparus, de la disparition jusqu'à après le retour de l'enfant.
                            Il offre une écoute et un accompagnement juridique, psychologique, social et administratif. Ce service agit aussi pour aider à la recherche des personnes disparues, particulièrement en accompagnant les familles dans la médiatisation des avis de recherche et en participant au dispositif Alerte Enlèvement.<br /><br />

                            <div className="titreNumeros">Cancer info service : 0 810 810 821</div><br />
                            Vous avez un cancer ou un de vos proches a un cancer. La survenue de cette maladie provoque d'importants bouleversements. Elle suscite aussi de nombreuses questions.<br /><br />

                            La plateforme Cancer info est là pour vous apporter des réponses aux étapes clés de la maladie, en support de vos échanges avec les équipes soignantes. Parmi les nombreuses sources d'information existantes, Cancer info offre la garantie d'une information médicale et sociale de référence, validée, complète et à jour. Ses contenus sont élaborés à partir des recommandations en vigueur, en associant des spécialistes en cancérologie et des patients.<br /><br />


                            <div className="titreNumeros">Maladies rares info services : 0 810 631 920</div><br />
                            Maladies Rares Infos Services est le service d'information et de soutien de référence sur les maladies rares. Pour être écouté, s'informer, témoigner, échanger. Un service professionnel et sans but lucratif.<br /><br />

                            <div className="titreNumeros">Centre antipoison : 01 40 05 48 48</div><br />
                            Les centres Antipoison sont des centres d'information sur les risques toxiques de tous les produits existants, médicamenteux, industriels et naturels.
                            Ils ont un rôle d'information auprès des professionnels de santé et du public et apportent une aide par téléphone au diagnostic, à la prise en charge et au traitement des intoxications.<br /><br />

                            <div className="titreNumeros">Secours en mer : 196</div><br />
                            <strong>Pourquoi appeler le 196?</strong><br />

                            En composant le 196, l'appelant est directement mis en relation avec le centre opérationnel de surveillance et de sauvetage en mer (CROSS), seul organisme d’État compétent pour coordonner des moyens d'intervention pour la sauvegarde de la vie humaine en mer.<br />

                            J’appelle le 196 en tant que témoin ou victime :<br />
                            lors d'une situation de détresse en mer,<br />
                            lors d'une situation d'urgence en mer,<br />
                            en cas d'inquiétude pour toute personne se trouvant en mer et n'ayant pas donné de nouvelles,<br />
                            pour tout fait observé en mer qui semble anormal,<br /><br />

                            <br /><br />

                            </div>
                            </div>

                         </div>  
                    </div>
                    </Segment>
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
  return {
  };
})(DevenirConseiller);
