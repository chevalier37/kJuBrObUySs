import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message, Segment, Header} from 'semantic-ui-react'
import { check } from 'meteor/check';
import { Route, Redirect } from 'react-router';

 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';



class CGU extends Component {

   
  render() {

   
    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header1 />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
              <div className="CGU">
                <Segment>
                  <Header>
                  Conditions générales d'utilisation
                  </Header>
KURBYS a été créé par Jean-Benoit ROUSSAT, les internautes sont les rédacteurs des contributions présentes sur le site. Au titre de ces informations, la société Seconde Vie Editions est un prestataire technique de l’Internet au sens de la Directive Communautaire 2000/31/EC du 8 Juin 2000 sur le commerce électronique. Son siège social est à Toulouse (SIRET 52946252500026) et son capital social est de 1000 euros. Pour nous contacter editions@seconde-vie.fr. La société OVH est l’hébergeur du présent site Web.<br /><br />

Pour toutes réclamations au titre d’un contenu figurant sur le site ou l’Apps de la Société Seconde Vie Editions et alléguant au titre de ce contenu une atteinte à l’ordre public ou aux droits de tiers, il est obligatoire de s’adresser à editions@seconde-vie.fr. Toutes réclamations adressées par un autre canal ne seront pas nécessairement prises en compte.<br /><br />

<strong>Acceptation des CGU (conditions générales d’utilisation)</strong><br />
Pour participer au site internet www.kurbys.com ou à l’Apps « kurbys »
vous devez obligatoirement accepter nos CGU lors de votre inscription et à chaque connexion.<br /><br />

<strong>Modération de tous les contenus</strong><br />
Tous les contenus (réponses aux messages, messages et articles) proposés par les utilisateurs sur le site www.kurbys.com et sur l’Apps « kurbys » sont entièrement modérés par les utilisateurs eux-même. Cela signifie que les contenus s'affichent sur le site www.kurbys.com ou sur l’Apps « kurbys » sans la validation manuelle de l’administrateur.<br /><br />

<strong>Contenu répréhensible</strong><br />
Il n’y aura aucune tolérance pour le contenu répréhensible. L’administrateur se réserve donc le droit de refuser tout contenu qu’il jugera offensant ou contraires aux CGU. Par ailleurs, et ce même si les contenus offensants ne seront jamais affichés sur le site www.kurbys.com et sur l’Apps « kurbys », l’administrateur se réserve aussi le droit de supprimer les comptes des utilisateurs proposant des contenus répréhensibles ou contraires aux CGU.<br /><br />

<strong>Dénoncer du contenu répréhensible</strong><br />
Bien que tous les contenus peuvent être modérés par l'administrateur, les utilisateurs auront en plus la possibilité de signaler une réponse à un message qui leur semblerait abusif, répréhensible ou contraire aux CGU. L’administrateur du site sera immédiatement et automatiquement averti par courriel. Si aux moins 2 utilisateurs signalent un contenu abusif alors ce contenu sera automatiquement mis hors ligne et il sera de nouveau soumis à la modération de l’administrateur.<br /><br />

<strong>Conditions d’utilisation</strong><br />
L’utilisation des soumissions à partir du serveur www.kurbys.com ou de l’Apps « kurbys » est autorisée, à condition qu’aucune modification ne soit apportée et que l’utilisation de ces articles se fasse à des fins personnelles ou d’information et non à des fins commerciales. L’utilisation des soumissions à toute autre fin est strictement prohibée par la loi. Toute personne ne respectant pas les dispositions légales applicables se rend coupable du délit de contrefaçon et est passible des sanctions pénales prévues par la loi. Les informations désignées ci-dessus n’incluent pas la conception ou la mise en page du site Internet www.kurbys.com ou de l’Apps « kurbys ». Les éléments du site www.kurbys.com et de l’Apps « kurbys » de la société Seconde Vie Editions sont protégés par le droit des dessins et modèles, le droit d’auteur, le droit des marques ainsi que par la réglementation applicable à la concurrence déloyale et ils ne peuvent être copiés ou imités en tout ou partie. Sauf autorisation expresse de Seconde Vie Editions, aucun logo, élément graphique, son ou image provenant du site www.kurbys.com et de l’Apps « kurbys » de la société Seconde Vie Editions ne peut être copié ou diffusé. Seconde Vie Editions n’effectue aucune déclaration sur le caractère approprié à un usage particulier des informations contenues dans les soumissions publiées sur ce service et dans les éléments graphiques publiés du serveur. Tous les articles et éléments graphiques sont fournis « En l’état » sans garantie d’aucune sorte. Seconde Vie Editions exclut toute garantie implicite relative aux informations susmentionnées, notamment toute garantie implicite de qualité, d’adéquation à un usage particulier, de propriété et d’absence de contrefaçon. Seconde Vie Editions ne sera en aucun cas responsable, quel que soit le fondement de l’action en responsabilité invoqué, des dommages indirects, accessoires ou incidents (ni de tout dommage qui résulte d’une mauvaise interprétation d’un article, d’une désinformation ou d’une diffamation) résultant de, ou liés à l’utilisation ou à la mise en page des informations rediffusées par ce service. Les soumissions rediffusées et les éléments graphiques publiés sur le serveur www.kurbys.com sont susceptibles de contenir des inexactitudes ou des erreurs typographiques. Des changements sont périodiquement apportés aux sources d’information référencées par le moteur de recherche. Enfin, Seconde Vie Editions peut apporter, à tout moment, des améliorations ou des modifications aux services offerts par le site www.kurbys.com et de l’Apps « kurbys ». Vous ne pouvez utiliser le site www.kurbys.com et l’Apps « kurbys » qu’à des fins personnelles, c’est à dire à des fins non commerciales et aucunement de manière illégale ou de façon à nuire à Seconde Vie Editions, aux utilisateurs « contributeurs » qui postent des commentaires ou des soumissions. Sans limiter le caractère général du présent article, vous ne pouvez pas utiliser le site www.kurbys.com ou l’Apps « kurbys » d’une manière susceptible d’endommager, de mettre hors d’action, d’accabler ou de compromettre Seconde Vie Editions. En ce qui concerne les commentaires ou les soumissions publiées par un membre, l’auteur accorde à Seconde Vie Editions l’autorisation (1) d’utiliser, copier, distribuer, transmettre, afficher publiquement, présenter publiquement, reproduire, éditer, modifier, traduire et reformater sa contribution dans le cadre du site www.kurbys.com, de l’Apps « kurbys » ou de ses partenaires, et (2) de sous-concéder ces droits, dans toute la mesure permise par la réglementation applicable. Les contributions postées sur le site www.kurbys.com et l’Apps « kurbys » ne sont pas rémunérées. La Société Seconde Vie Editions peut supprimer un commentaire ou une soumission à tout moment. Pour chaque contribution, l’auteur déclare disposer de tous les droits nécessaires afin d’accorder les autorisations prévues dans le présent article. Enfin, Seconde Vie Editions se réserve le droit de modifier les termes, conditions et mentions d’avertissement applicables au site www.kurbys.com et à l’Apps « kurbys ». Il vous incombe de consulter régulièrement ces termes et conditions d’utilisation. Votre utilisation renouvelée du site www.kurbys.com et de l’Apps « kurbys », après la date effective de telles ou telles modifications, constitue l’acceptation de votre part de toutes ces modifications.<br /><br />

<strong>Mentions relatives aux marques</strong><br />
Copyright ©  Seconde Vie Editions – Tous droits réservés. Kurbys est une marque déposée de Seconde Vie Editions. Les noms des éditeurs, des médias, des services et plus généralement des sociétés ou produits mentionnés sont les marques de leurs propriétaires respectifs. Tous les droits qui ne sont pas expressément concédés sont réservés par Seconde Vie Editions.<br /><br />

<strong>Politique de confidentialité</strong><br />
Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière à la protection de la vie privée. C’est pourquoi, nous nous engageons à respecter la confidentialité des renseignements personnels que nous collectons.
Nous collectons les renseignements suivants :
Les renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à l’interactivité établie entre vous et le site www.kurbys.com et l’Apps « kurbys ».<br /><br />

<strong>Formulaires et interactivité:</strong><br />
Vos renseignements personnels sont collectés par le biais de formulaire, à savoir : Formulaire d’inscription au site Web et concours.
Nous utilisons les renseignements ainsi collectés pour la finalité suivante : Contact.
Vos renseignements sont également collectés par le biais de l’interactivité pouvant s’établir entre vous et notre site www.kurbys.com et l’Apps « kurbys » et ce, de la façon suivante : Statistiques et contact.
Nous utilisons les renseignements ainsi collectés pour les finalités suivantes : Forum ou aire de discussion, Commentaires et Correspondance.<br /><br />

<strong>Droit d’opposition et de retrait</strong><br />
Nous nous engageons à vous offrir un droit d’opposition et de retrait quant à vos renseignements personnels. Le droit d’opposition s’entend comme étant la possibilité offerte aux internautes de refuser que leurs renseignements personnels soient utilisées à certaines fins mentionnées lors de la collecte. Le droit de retrait s’entend comme étant la possibilité offerte aux internautes de demander à ce que leurs renseignements personnels ne figurent plus, par exemple, dans une liste de diffusion.
Pour pouvoir exercer ces droits, vous pouvez envoyer votre demande par courriel : editions@seconde-vie.fr<br /><br />

<strong>Droit d’accès</strong><br />
Nous nous engageons à reconnaître un droit d’accès et de rectification aux personnes concernées désireuses de consulter, modifier, voire radier les informations les concernant.
L’exercice de ce droit se fera par courriel : editions@seconde-vie.fr
Section du site web : www.kurbys.com<br /><br />

<strong>Sécurité</strong><br />
Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. Les personnes travaillant pour nous sont tenues de respecter la confidentialité de vos informations. Pour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures suivantes :
Nous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières innovations technologiques permettant d’assurer la confidentialité de vos transactions. Toutefois, comme aucun mécanisme n’offre une sécurité maximale, une part de risque est toujours présente lorsque l’on utilise Internet pour transmettre des renseignements personnels.<br /><br />



<strong>CONTRAT-CADRE D’EMISSION, GESTION, MISE A DISPOSITION DE
MONNAIE ELECTRONIQUE MANGOPAY</strong><br />
Conditions Générales d’Utilisation de la Monnaie Electronique<br />

Conclu entre :<br />
Kurbys, ci-après dénommé(e) l’« Utilisateur », d’une part<br />
et<br />
MANGOPAY SA, société anonyme de droit luxembourgeois, au capital de 2.000.000 euros, dont
le siège social est situé 59 Boulevard Royal, L-2449 Luxembourg et immatriculée au Registre du
commerce et des sociétés luxembourgeois sous le numéro B173459, habilitée à exercer son
activité en France en libre établissement, en qualité d’établissement de monnaie électronique
agréé par la Commission de Surveillance du Secteur Financier, 110 route d’Arlon L-1150
Luxembourg, http://www.cssf.lu/<br />
ci-après dénommée l’ « Emetteur », d’autre part<br />
ci-après ensemble dénommées les « Parties »,<br /><br />
Avertissement<br />
Veuillez lire attentivement les présentes Conditions Générales d'Utilisation de la Monnaie
Electronique et les Conditions Tarifaires qui vous ont été communiquées sur le Site avant de les
accepter.<br />
Vous êtes informés que la langue utilisée pour communiquer avec l’Emetteur est le français ou
l’anglais.<br />
1. Définitions<br />

Pour les besoins des présentes, les termes ci-après sont définis comme suit :<br />
« Banques » : établissements de crédit qui conservent les fonds collectés par l’Emetteur
correspondant à la Monnaie Electronique en circulation. Les établissements retenus sont à ce jour
le Crédit Mutuel Arkéa et ING Luxembourg. L’Emetteur se réserve la possibilité de sélectionner
tout autre établissement de crédit agréé dans un Etat membre de l’Union Européenne ou partie à
l’accord relatif à l’Espace Economique Européen.<br />
« Bénéficiaire » : Personne physique ou morale agissant pour son compte, désignée par
l’Utilisateur parmi les personnes clientes du Site, au profit de laquelle est transférée la Monnaie
Electronique dans le cadre d’une Opération de Paiement. Tout Bénéficiaire peut devenir un
Utilisateur au sens des présentes à compter de son acceptation du Contrat-cadre sous réserve
d’acceptation par l’Emetteur. Dans certain cas, le Bénéficiaire peut être le Distributeur
conformément aux Conditions Particulières.<br />
« Carte » : carte bancaire, de paiement ou de crédit utilisée par l’Utilisateur pour remettre des
fonds à l’Emetteur en contrepartie de l’émission de Monnaie électronique. Cette carte est
rattachée à l’un des réseaux suivants : Visa, MasterCard, CB, Amex.<br />
« Conditions générales » : Désigne le présent document intitulé « Contrat-cadre d’émission,
gestion et mise à disposition de monnaie électronique, Conditions Générales d’Utilisation de la
Monnaie Electronique MANGOPAY».<br />
« Conditions Particulières d’Utilisation de la Monnaie Electronique » : Désigne le formulaire
à remplir par l’Utilisateur sur le Site comprenant les données personnelles de ce dernier et les
Conditions Tarifaires applicables à la Monnaie électronique.<br />
« Conditions Générales du Site » : Désigne les conditions générales d’utilisation du Site
conclues entre l’Utilisateur agissant en qualité de client du Site et le Distributeur, régissant
notamment l’accès au Site.<br />
« Contrat-cadre » : Désigne le Contrat cadre d’émission, gestion, mise à disposition de Monnaie
Electronique MANGOPAY composé des Conditions Générales et des Conditions Particulières
d’Utilisation de la Monnaie Electronique.<br />
« Conditions Tarifaires » : Désigne le document comprenant l’ensemble des frais versés pour
l’acquisition, l’utilisation et la gestion de la Monnaie électronique telles que prévues dans les
Conditions Particulières d’Utilisation.<br />
« Compte » : Désigne une référence interne permettant à l’Emetteur d’identifier dans ses livres
les différentes opérations d’acquisition, d’utilisation et de remboursement de Monnaie
électronique réalisées au nom d’un même Utilisateur et de déterminer, à tout moment, le montant
en euro de Monnaie Electronique disponible détenue par ce dernier. Le Compte ne peut en aucun
cas être assimilé à un compte de dépôt, un compte courant ou à un compte de paiement.<br />
« Distributeur » : Désigne l’entité, dont les coordonnées sont indiquées dans les Conditions
Particulières, qui exploite le Site. Le Distributeur prépare, facilite et conseille ses clients, en vue
de la conclusion du Contrat-cadre par l’intermédiaire de son Site. Il accompagne ses clients tout 
au long de leur relation avec l’Emetteur dans le cadre de la réalisation de leurs Opérations de
paiement et Remboursement. A cet effet, le Distributeur met à la disposition de tout client un
service client dédié aux Opérations de paiement exécutées en application des présentes. Le
Distributeur ne collecte pas les fonds à l’exception des frais convenus dans les Conditions
Tarifaires.<br />
« Emetteur » : Désigne MANGOPAY. SA, émetteur de la Monnaie Electronique agréé à ce titre
au Luxembourg par la Commission de Surveillance du Secteur Financier sous les références
n°3812 et habilité à exercer son activité dans le pays d’accueil indiqué dans les Conditions
Particulières. L’Emetteur figure sur la liste des établissements de monnaie électronique
consultable sur http://supervisedentities.cssf.lu/index.html?language=fr#Home
« Identifiant » : Désigne les données nécessaires à l’identification d’un Utilisateur par
l’Emetteur pour la réalisation d’une Opération de paiement se composant d'un User (adresse
email valide)<br />
« Jour Ouvré » : Désigne un jour calendaire à l’exception des samedis, dimanches, et jours
fériés en France métropolitaine, au Luxembourg et dans le pays d’accueil indiqué dans les
Conditions Particulières, au cours duquel les infrastructures de paiement de ces pays et les
Banques utilisées exerce leurs activités en fonctionnement régulier.<br />
« Monnaie Electronique » : Désigne la valeur monétaire disponible représentant une créance de
l’Utilisateur sur l’Emetteur. La Monnaie Electronique est émise par l’Emetteur contre la remise
des fonds en euro (€) correspondants par l’Utilisateur et constitue un moyen de paiement accepté
exclusivement par les Bénéficiaires. L’Emetteur la conserve sous une forme électronique sur son
serveur par l’inscription sur un Compte ouvert à cet effet.<br />
« Ordre » : Désigne l’instruction donnée par l’Utilisateur à l’Emetteur conformément à la
procédure prévue au Contrat-Cadre en vue d’exécuter une Opération de paiement et/ou un
Remboursement.<br />
« Opération de paiement » : Désigne le transfert de Monnaie Electronique au profit d’un
Bénéficiaire désigné sur le Site par un Utilisateur.<br />
« Page de paiement » : Désigne la page sécurisée par Payline, le prestataire monétique de
l’Emetteur. Seule cette adresse doit être considérée comme valable par l’Utilisateur. L’Utilisateur
est invité à vérifier systématiquement l’adresse figurant en haut de sa page.<br />
« Remboursement » : Désigne le transfert par l’Emetteur sur Ordre de l’Utilisateur, des fonds
scripturaux correspondant à tout ou partie de la Monnaie Electronique disponible détenue par lui
diminuée des éventuels frais dus.<br />
« Site » : Désigne le site internet exploité par le Distributeur dont l’objet consiste à vendre des
biens ou services à des Utilisateurs ou à collecter des fonds auprès d’eux, ou à mettre en relation
des Bénéficiaires avec des Utilisateurs. Le Site dont l’adresse est indiquée dans les Conditions
Particulières, a intégré l’API aux couleurs de la Marque pour permettre à l’Utilisateur de disposer
d’un moyen de paiement émis et géré par l’Emetteur pour transférer des fonds au Bénéficiaire
désigné.<br />

« Utilisateur » : Toute personne physique ou morale agissant pour son compte détenant de la
Monnaie Electronique inscrite sur un Compte ouvert à son nom, afin de réaliser une ou des
Opérations de paiement.<br /><br />
2. Objet<br />
Les présentes Conditions Générales ont pour objet de définir les conditions dans lesquelles
l’Emetteur fournit à l’Utilisateur un moyen de paiement exclusivement accepté par les
Bénéficiaires dans le cadre de leurs relations établies par l’intermédiaire du Site.
Le moyen de paiement proposé doit être systématiquement prépayé par l’Utilisateur et ne fera
l’objet d’aucune avance, crédit, ou escompte. Il repose sur la Monnaie électronique émise et
gérée par l’Emetteur.<br />
L’Emetteur a mandaté le Distributeur pour proposer aux clients du Site ce moyen de paiement,
faciliter la conclusion des présentes et accompagner les Utilisateurs tout au long de leurs relations
avec l’Emetteur.<br />
Les Conditions Générales et les Conditions Particulières d’Utilisation de Monnaie Electronique,
constituent l'intégralité du Contrat-cadre d’émission, gestion et utilisation de la Monnaie
Electronique MANGOPAY, conclu entre les Parties.<br />
L’Utilisateur peut à tout moment et sans frais se procurer une copie de ces documents en se
rendant sur le Site. Seul le Contrat-cadre fera foi entre les Parties en cas de litige.<br />
3. Inscription de l’Utilisateur<br />
3.1 Conditions nécessaires et préalables à l’inscription de l’Utilisateur<br />
Toute personne physique âgée d’au moins 18 (dix- huit) ans, juridiquement capable, ainsi que
toute personne morale, résidente ou immatriculée dans un Etat membre de l’Union Européenne
ou dans un Etat partie à l’accord relatif à l’Espace Economique européen ou dans un pays tiers
imposant des obligations équivalentes en termes de lutte contre le blanchiment et le financement
du terrorisme, peut transmettre une demande d’ouverture de Compte sous réserve qu’elle soit
cliente du Site.<br />
L’Utilisateur, personne physique, indiquera dans les Conditions Particulières s’il utilise la
Monnaie électronique pour des besoins professionnels ou non professionnels. Le cas échéant, il
sera considéré comme agissant pour des besoins exclusivement non professionnels en application
des dispositions du Contrat-cadre.<br />
3.2 Procédure d’inscription et d’ouverture d’un Compte
Le client devra transmettre au Distributeur :<br />
- ses nom, prénom, adresse mail, date de naissance et nationalité (pour les personnes
physiques), ou
- sa dénomination, sa forme sociale, son capital, l’adresse de son siège social, la description 
de son activité, l’identité des associés et dirigeants sociaux, ainsi que la liste des
bénéficiaires effectifs tels que définis par la réglementation (pour les personnes
morales),
si ces informations ne sont pas déjà en possession du Distributeur.<br />
Il devra indiquer un identifiant, composé d'un Identifiant et un mot de passe ou se connecter par
l’intermédiaire de son compte Facebook. Il est entièrement responsable du maintien de la
confidentialité de son Identifiant. Il accepte de ne pas utiliser le compte, nom ou Identifiant d'un
autre utilisateur à aucun moment, ni de divulguer son Identifiant à un tiers. Il accepte d'avertir
immédiatement le Distributeur, dans le cas où il soupçonnerait une utilisation non autorisée de
son Identifiant .Il est seul responsable de toute utilisation de son Identifiant.<br />
Après avoir pris connaissance du Contrat-cadre, le client devra l’accepter suivant les modalités
prévues par le Site et fournir toutes les informations et justificatifs qui lui sont demandés par le
Distributeur. En donnant son accord sur les termes du Contrat-cadre, le client accepte que le
Distributeur transmette à l’Emetteur sa demande d’inscription en qualité d’Utilisateur et toutes
les pièces justificatives reçues par lui.<br />
L’Emetteur est le seul à pouvoir accepter l’inscription d’un client du Site en qualité d’Utilisateur
et procéder à l’ouverture d’un Compte en son nom. Cet accord sera notifié à l’Utilisateur par le
Distributeur par tout moyen suivant les modalités prévues sur le Site.<br />
L’Emetteur pourra, sans motivation, ni droit à indemnité en faveur du client du Site, refuser une
demande d’inscription en qualité d’Utilisateur et d’ouverture d’un Compte. Ce refus sera notifié
au Client par le Distributeur par tout moyen suivant les modalités prévues sur le Site.<br />
En outre, l’Emetteur se réserve le droit de demander à l’Utilisateur avant toute inscription et à
tout moment pendant toute la durée du Contrat-cadre des informations et des données
d’identification complémentaires aux fins de contrôle de son identité, ainsi que toutes pièces
justificatives qu’il estimera utiles.<br />
L’Utilisateur déclare au moment de la transmission de sa demande d’inscription au Distributeur
et pendant toute la durée du Contrat-cadre :<br />
- - (a) qu’il est âgé d'au moins 18 (dix-huit) ans et juridiquement capable ;<br />
- - (b) qu’il agit pour son propre compte ;<br />
- - (c) que toutes les informations fournies lors de son inscription sont sincères,
exactes et à jour.<br />

- 3.3 Limites d’utilisation du Compte<br />
Suivant la libre appréciation de l’Emetteur, un Utilisateur qui n’a pas transmis tous les documents
requis ci-dessous pourra être expressément autorisé par l’Emetteur à utiliser son Compte pour 
l’acquisition de biens ou services dans la limite de 2 500 euros de Monnaie Electronique détenue
par un Utilisateur au cours d’une même année civile ou de 1000 € de remboursement au cour
d’une même année civile, sous réserve que cette Monnaie Electronique n’ait fait l’objet d’aucune
demande de Remboursement.<br />
- A réception de l’ensemble des documents listés ci-dessous et sous réserve qu’ils soient jugés
satisfaisants par l’Emetteur, l’Utilisateur pourra détenir et initier des Remboursements de
Monnaie Electronique au dessus des seuils mentionnés au cours d’une même année civile. Cette
autorisation ne pourra être octroyée que si l’acquisition ou le Remboursement de Monnaie
électronique est effectué en provenance ou à destination d’un compte ouvert au nom de
l’Utilisateur auprès d’une personne mentionnée aux 1° à 6° de l’article L.561-2 du Code
monétaire et financier établie dans un Etat membre de l’Union Européenne , dans un Etat partie à
l’accord sur l’Espace Economique Européen ou dans un pays tiers imposant des obligations
équivalentes en termes de lutte contre le blanchiment et le financement du terrorisme.
Les documents requis pour tout Utilisateur personne physique conformément à ce qui précède
sont les suivants :<br />
- une copie d’un document officiel d’identité en cours de validité permettant l’identification
de l’Utilisateur 1<br />
- un justificatif de domicile datant de moins de 3 mois est susceptible d’être demandé par
l’Emetteur.<br />
Les documents requis pour tout Utilisateur personne morale conformément à ce qui précède sont
les suivants :<br />
- original ou copie d’un extrait du registre officiel datant de moins de trois mois constatant
la dénomination, la forme juridique, l’adresse du siège social et l’identité des associés et
dirigeants sociaux mentionnés aux 1° et 2° de l’article R.123-54 du Code de Commerce
ou de leurs équivalents en droit étranger ;<br />
- une copie des statuts et des éventuelles décisions nommant le représentant légal certifiées
conforme;<br />
- la déclaration des actionnaires à remplir par le dirigeant de la société<br />
- une copie d’un document officiel d’identité en cours de validité permettant l’identification
du représentant légal et le cas échéant du bénéficiaire effectif.1<br />
Il est expressément prévu que l’Emetteur se réserve la possibilité de demander à tout moment des

1 A l'intérieur de l'espace économique européen : passeport, carte nationale d'identité, permis de conduire ou titre de
séjour de ressortissants de pays tiers à l'Union européenne
En dehors de l'espace économique européen : passeport obligatoire, permis de conduire pour les USA et le Canada
acceptés
documents complémentaires concernant l’Utilisateur, le Bénéficiaire, le bénéficiaire effectif ou
toute Opération de paiement ou Remboursement.<br />
Le Bénéficiaire est réputé être le bénéficiaire effectif au sens de la réglementation. Le cas
échéant, il s’engage à renseigner l’adresse mail, la date de naissance, la nationalité ainsi que
l’adresse postale de la personne à qui le Bénéficiaire remettra les fonds.<br />
4. Fonctionnement d'un Compte<br />
4.1 Achat de Monnaie Electronique<br />
- L’acquisition de Monnaie Electronique peut être réalisée, par Carte (ou tout autre moyen
accepté par l’Emetteur), en une ou plusieurs fois.
- Lorsqu’il souhaite effectuer une telle opération, l’Utilisateur procède à son identification sur le
Site en indiquant son User (adresse mail valide) et son mot de passe ou en se connectant par
l’intermédiaire de son compte Facebook.<br />
- L’ordre de transfert de fonds est transmis sur une Page de paiement dédiée à cet effet.
L’Emetteur pourra exiger pour tout paiement la saisie d’un code à usage unique notifié sur le
téléphone portable de l’Utilisateur par l’établissement émetteur de la Carte. Le cas échéant, il
appartient à l’Emetteur de refuser tout paiement suivant sa libre appréciation et sans que cette
décision ne puisse donner lieu à une quelconque indemnisation. L’opération de transfert de fonds
est exécutée par l’établissement émetteur de la Carte. Toute contestation d’un tel transfert doit
être notifiée audit établissement. L’Emetteur n’est pas habilité à annuler un tel transfert.
Nonobstant ce qui précède, l’Utilisateur peut obtenir le Remboursement de la Monnaie
électronique conformément à l’article 4.4.<br />
- L’inscription de la Monnaie électronique au nom de l’Utilisateur peut être conditionnée à la
réception effective des fonds collectés déduction faite des frais convenus dans les Conditions
Tarifaires.<br />
- Dans l’hypothèse où le transfert des fonds est annulé par l’émetteur de la Carte à la suite d’une
contestation, quel que soit le motif invoqué, l’Emetteur pourra dès réception de l’information
suspendre ou annuler toute Opération de paiement, clôturer le Compte concerné, débiter à tout
moment le Compte du montant de Monnaie Electronique correspondant aux fonds dont le
transfert est annulé et procéder au recouvrement des sommes dues par l’Utilisateur par tout
moyen.<br />
4.2 Fonctionnement du compte<br />
- La Monnaie Electronique est stockée pour une durée indéterminée sur le Compte de
l’Utilisateur par l’Emetteur dans les Conditions Tarifaires convenues.<br />
- Le Compte est crédité par l’acquisition de Monnaie électronique contre la remise de fonds
ordonnée par l’Utilisateur directement auprès de l’Emetteur par Carte (ou tout autre moyen
accepté par l’Emetteur) déduction faite des frais correspondants tels que prévus par les 
Conditions Tarifaires. Ce Compte est débité sur Ordre de l’Utilisateur de Monnaie électronique
du montant de l’Opération de paiement ou de Remboursement réalisé et des frais y afférents tels
que prévus par les Conditions Tarifaires. L’Emetteur est habilité à débiter à tout moment ce
Compte du montant de Monnaie électronique correspondant aux frais dus et exigibles prévus
dans les Conditions Tarifaires.<br />
- Le montant de Monnaie Electronique disponible sur le Compte est immédiatement ajustée en
fonction :<br />
- des frais dus et exigibles, par l’Utilisateur du Compte, dont le paiement est réalisé en Monnaie
Electronique ;<br />
- des Ordres transmis (ou en cours de transmission) à l’Emetteur et portant sur la Monnaie
Electronique stockée sur le Compte ;<br />
- des fonds reçus par l’Emetteur en contrepartie de l’acquisition de Monnaie Electronique sur le
Compte ;<br />
- et toute annulation portant sur l’une des opérations précitées en application des présentes.<br />
4.4 Utilisation de la Monnaie Electronique en vue de réaliser une Opération de Paiement
- Avant de transmettre un Ordre, l’Utilisateur devra s’assurer qu’il dispose d’un montant de
Monnaie Electronique disponible suffisant pour couvrir le montant de l’Opération de paiement et
les frais y afférents tels que convenus dans les Conditions Tarifaires.<br />
- Le cas échéant, il devra acquérir la Monnaie électronique suffisante conformément à l’article
4.1 avant que l’Ordre ne puisse être valablement transmis à l’Emetteur pour exécution. La
Monnaie électronique ne peut être détenue par l’Utilisateur que sous réserve de la remise
effective des fonds correspondant. La Monnaie électronique ne peut en aucun être émise à crédit.
Ainsi, lorsque le montant de Monnaie électronique disponible à la date d’exécution de l’Ordre par
l’Emetteur est inférieur au montant de l’Opération de Paiement (frais inclus), l’Ordre est
automatiquement refusé par l’Emetteur. L’information portant sur ce refus est mise à la
disposition de l’Utilisateur sur le Site. Ce refus pourra donner lieu à des frais complémentaires
conformément aux Conditions Tarifaires.<br />
- Les modalités de transmission d’un Ordre par l’Utilisateur sont les suivantes :<br />
- Lorsqu’il souhaite effectuer une Opération de paiement, l’Utilisateur procède à son
identification sur le Site en indiquant son Identifiant et son mot de passe ou en se connectant par
l’intermédiaire de son compte Facebook. Il remplit le formulaire adéquat sur la Page de paiement
et communique le cas échéant les pièces justificatives demandées par l’Emetteur. Le formulaire
devra indiquer les éléments suivants : le montant exprimé en euro (€) de l’Opération de paiement,
les éléments permettant d’identifier le Bénéficiaire, la date d’exécution de l’Ordre et toute autre
information requise. L’Ordre de paiement devient irrévocable, lorsque l’Utilisateur clique sur
l’onglet de validation du formulaire L’Utilisateur reçoit alors un email de confirmation (« Date de
réception »).<br />

- Dans certains cas, l’Utilisateur pourra remplir un formulaire unique contenant un ordre de
transfert des fonds tel que prévu à l’article 4.1 et un Ordre permettant la réalisation d’un
Opération de paiement conformément au paragraphe précédent.<br />
- Exécution de l’Ordre<br />
Le montant des Opérations de Paiement vient s’imputer sur la Monnaie Electronique disponible
inscrite sur le Compte pour être créditée en faveur du Bénéficiaire suivant les instructions de
l’Utilisateur. Ainsi, le Bénéficiaire pourra procéder à l’ouverture d’un Compte conformément à
l’article 3.2 pour recevoir la Monnaie électronique s’il n’est pas déjà Utilisateur. Les fonds
correspondant à la Monnaie électronique utilisée pourront le cas échéant être directement
transférés sur un compte bancaire ou de paiement ouvert au nom du Bénéficiaire dès réception
des coordonnées de ce compte par l’Emetteur. Le Bénéficiaire doit à cet effet fournir le numéro
IBAN et le code SWIFT du compte bancaire ou de paiement dont il est titulaire ainsi que son
adresse. Ce compte devra être ouvert par un établissement bancaire ou de paiement établi dans un
Etat membre de l’Union Européenne, d’un Etat partie à l’accord sur l’Espace Economique
Européen ou dans un pays tiers imposant des obligations équivalentes en termes de lutte contre le
blanchiment et le financement du terrorisme.<br />
Il est convenu entre les Parties que l’Opération de paiement sera exécutée au plus tard deux (2)
Jours Ouvrés suivant la Date de réception si le Bénéficiaire dispose d’un Compte. Le cas échéant,
la Date de réception devra être reportée à l’ouverture du Compte ou au jour de la collecte par
l’Emetteur des coordonnées du compte bancaire ou de paiement du Bénéficiaire destinataire des
fonds.<br />
Si la Date de réception n’est pas un Jour Ouvré, elle sera réputée être le Jour Ouvré suivant pour
tout Ordre passé après 12h.<br />
4.4 Transmission et exécution d’un Ordre de Remboursement<br />
Lorsqu’il souhaite transmettre un Ordre de Remboursement, l’Utilisateur procède à son
identification sur le Site en indiquant son Identifiant et son mot de passe ou en se connectant par
l’intermédiaire de son compte Facebook. Il remplit le formulaire adéquat sur la Page de paiement
et communique le cas échéant les pièces justificatives demandées par l’Emetteur. L’Utilisateur
devra indiquer sur le formulaire les éléments suivants : le montant du Remboursement, la date
d’exécution de l’Ordre et toute autre information requise. L’Ordre de paiement devient
irrévocable, lorsque l’Utilisateur clique sur l’onglet de validation du formulaire. L’Utilisateur
reçoit alors un email de confirmation (« Date de réception »).<br />
Le Remboursement interviendra par crédit de la Carte ayant servi à l’Utilisateur pour acquérir de
la Monnaie électronique. Le cas échéant, il sera réalisé par transfert des fonds sur le compte
bancaire ou de paiement du Bénéficiaire dont les coordonnées auront été notifiées à l’Emetteur
(« Date de notification »). Il est convenu entre les Parties que le Remboursement sera exécuté au
plus tard deux (2) Jours Ouvrés suivant la Date de réception ou de notification suivant le cas.
Si la Date de réception n’est pas un Jour Ouvré, elle sera réputée être le Jour ouvré suivant pour
tout Ordre passé après 12h.

4.5 Retrait d’un Ordre<br />
Aucun Ordre ne peut être retiré par l’Utilisateur après la date à laquelle il est réputé irrévocable
comme indiqué ci-dessus.<br />
5 Opposition d’Identifiant contestation d’Opération et Reporting<br />
5.1 Opposition d’Identifiant<br />
L’Utilisateur doit informer le Distributeur de la perte ou du vol de son Identifiant, du
détournement ou de toute utilisation non autorisée de celui-ci ou de ses données dès qu’il en a
connaissance afin d’en demander le blocage. Cette déclaration doit être réalisée:<br />
- par appel téléphonique au service client du Distributeur au numéro indiqué dans les
Conditions Particulières,<br />
ou
- directement par message électronique par l’intermédiaire du formulaire de contact
accessible sur le Site.<br />
L’Emetteur par l’intermédiaire du Distributeur exécutera immédiatement la demande de mise en
opposition de l’Identifiant concerné. L’événement sera enregistré et horodaté. Un numéro
d’opposition avec horodatage sera communiqué à l’Utilisateur. Une confirmation écrite de cette
mise en opposition sera adressée par le Distributeur à l’Utilisateur concerné par message
électronique. L’Emetteur prend en charge le dossier sur le plan administratif et conserve toutes
les traces pendant 18 (dix-huit) mois. Sur demande écrite de l’Utilisateur et avant l’expiration de
ce délai, l’Emetteur communiquera une copie de cette opposition.
Toute demande d’opposition doit être confirmée sans délai par l’Utilisateur concerné, par lettre
signée de ce dernier, remise ou expédiée sous pli recommandé, ou email, à l’Emetteur à l’adresse
postale en tête des présentes ou à l’adresse éventuellement indiquée dans les Conditions
Particulières.<br />
L’Emetteur et le Distributeur ne sauraient être tenus pour responsable des conséquences d’une
opposition par télécopie ou courriel, qui n’émanerait pas de l’Utilisateur.<br />
Une demande d’opposition est réputée faite à la date et à l’heure de réception effective de la
demande par le Distributeur. En cas de vol ou d’utilisation frauduleuse de l’Identifiant,
l’Emetteur est habilité à demander par l’intermédiaire du Distributeur, un récépissé ou une copie
du dépôt de plainte à l’Utilisateur qui s’engage à y répondre dans les plus brefs délais.<br />
5. 2 Contestation d’une Opération<br />
Pour toute réclamation relative aux Opérations de paiement ou de Remboursement réalisées par
l’Emetteur dans le cadre des présentes, l’Utilisateur est invité à s’adresser au service client du
Distributeur ou à l’adresse indiquée à cet effet dans les Conditions Générales du Site.<br />

Si un Ordre est exécuté par l’Emetteur avec des erreurs dues à une faute de ce dernier, l’Ordre est
annulé et le Compte est rétabli dans la situation dans laquelle il se trouvait avant la réception de
l’ordre de paiement. Par la suite, l’Ordre est représenté correctement.<br />
L’Utilisateur qui souhaite contester une opération non autorisée par lui doit contacter par
téléphone le service client Distributeur (coordonnées figurant sur le Site) dans les plus brefs
délais suivant sa prise de connaissance de l’anomalie et au plus tard 13 mois suivant l’inscription
en compte de l’opération. Après validation de la légitimité de la demande, l’Emetteur procèdera à
l’annulation de l’Ordre et rétablira sous forme d’un crédit temporaire le Compte dans l’état dans
lequel il était si l’opération contestée n’avait jamais été effectuée. Après enquête sur la validité de
la contestation, l’Emetteur ajustera le Compte en conséquence et est autorisé à contrepasser tout
écriture indûment réalisée.<br />
En cas de perte ou de vol du dispositif de sécurité (Identifiant et mot de passe), les opérations non
autorisées effectuées avant la notification de l’opposition sont à la charge de l’Utilisateur, dans la
limite de 150 euros. Toutefois, la responsabilité de l’Emetteur n’est pas engagée en cas de faute
de l’Utilisateur telle qu’un manquement volontaire ou constitutif d’une négligence grave à ses
obligations, d’une transmission tardive de l’opposition ou de mauvaise foi. En cas de perte ou de
vol de détournement du dispositif de sécurité personnalisé, les pertes résultant des Ordre passés
avant l’opposition par l’Utilisateur sont supportées par l’Emetteur, sauf en cas de faute telle que
définie ci-dessus. Les opérations réalisées après l’opposition sont supportées par l’Emetteur sauf
en cas de fraude.<br />
L’Utilisateur peut contester une opération autorisée dont le montant exact n’est pas défini ou
celles dont le montant final n’est pas celui auquel il pouvait raisonnablement s’attendre compte
tenu de son profil, de ses dépenses passées et des conditions du Contrat-cadre. Cette demande
doit être transmise à l’Emetteur dans les 8 semaines suivant l’exécution de l’Ordre sur le Compte.
L’Emetteur est tenu de rembourser l’Utilisateur dans un délai de 10 jours ouvrables suivant la
réception de la demande, si celle-ci s’avère justifiée compte tenu de la réglementation et si la
demande comporte tous les éléments nécessaires à son examen par l’Emetteur. Celle-ci se réserve
la possibilité de refuser un tel remboursement qui sera motivé et notifié à l’Utilisateur. Ce dernier
s’engage à fournir tous les éléments nécessaires permettant de déterminer les circonstances de
l’Opération de paiement. Les frais et cotisations résultant des Opérations concernées ne sont pas
remboursés par l’Emetteur. Des frais indiqués dans les Conditions Particulières pourront être
perçus en cas de contestation non justifiée d’une Opération.<br />
5.3 Reporting<br />
L’Utilisateur reconnaît que seul le relevé d’Opérations de paiement validé par l’Emetteur vaut
reconnaissance par ce dernier du montant de Monnaie électronique disponible sur le Compte
arrêté à la date indiquée sur le relevé. L’Utilisateur peut accéder à tout moment sur sa page
personnelle accessible sur le Site au montant indicatif de Monnaie Electronique disponible sur
son Compte. L’Utilisateur est invité à prendre connaissance avec attention de ces relevés et à les
conserver.<br />
A chaque fin de Jour ouvré, l’Utilisateur dispose sur la page personnelle du Site un état des
Opérations de paiement réalisées sur le Compte comprenant les informations suivantes :

- a) Une référence permettant d'identifier l'Opération de paiement concernée ;
- b) Le cas échéant, les informations relatives aux parties impliquées dans l’Opération de
paiement ;
- c) Le montant de l'Opération de paiement concernée ainsi que, le cas échéant, l’objet de
l’Opération de paiement réalisée ;
- d) Le cas échéant, la date de réception de l'Ordre correspondant et/ou la date à laquelle est
exécuté l’Opération de paiement correspondante.
L’Emetteur met à la disposition de l’Utilisateur sur demande les relevés mensuels du Compte
couvrant les 13 mois précédents.
6. Modification du Contrat-cadre
L’Emetteur se réserve le droit, à tout moment, de modifier le Contrat-cadre. Elles sont rendues
accessibles par le Distributeur à tous les Utilisateurs sur le Site
Tout Utilisateur peut refuser les modifications proposées et doit notifier son refus au Service
Client du Distributeur par lettre recommandée avec avis de réception 2 mois avant la date
d’entrée en vigueur des modifications proposées (cachet de la Poste faisant foi) à l’adresse du
siège social de l’Emetteur indiquée en première page.
A défaut d’avoir notifié son refus avant la date d’entrée en vigueur indiquée, ou, à défaut, avant
un délai de [7] jours à compter de leur mise en ligne sur le Site, l’Utilisateur est réputé accepter
les modifications proposées.
Les relations entre les Parties après la date d’entrée en vigueur seront alors régies par la nouvelle
version du Contrat-cadre.
Il est par conséquent important que l’Utilisateur consulte ses emails et lise régulièrement le
Contrat-cadre accessibles en ligne sur le Site à tout moment.
En cas de refus par l’Utilisateur, ce refus donnera lieu, sans frais, à la résiliation du Contratcadre,
ainsi qu’au Remboursement des unités de Monnaie Electronique lui appartenant.<br />
7. Sécurité<br />
L’Emetteur s’engage à assurer ses prestations dans le respect des lois et règlements applicables et
des règles de l’art. Notamment, l’Emetteur mettra tout en œuvre pour assurer la sécurité et la
confidentialité des données des Utilisateurs, conformément à la règlementation en vigueur.
L’Emetteur se réserve le droit de suspendre temporairement l'accès au Compte en ligne pour des
raisons techniques, de sécurité ou de maintenance sans que ces opérations n'ouvrent droit à une
quelconque indemnité. Il s'engage à limiter ce type d'interruptions au strict nécessaire.<br />

L’Emetteur ne saurait toutefois être tenu responsable à l’égard de l’Utilisateur des éventuelles
erreurs, omissions, interruptions ou retards des opérations réalisées via le Site résultant d’un
accès non autorisé à ce dernier. L’Emetteur ne saurait d’avantage être tenu responsable des vols,
destructions ou communications non autorisées de données résultant d’un accès non autorisé au
Site. En outre, l’Emetteur demeure étranger au lien de droit existant entre l’Utilisateur et le
Bénéficiaire de l’Opération de Paiement. L’Emetteur ne saurait être tenu responsable des fautes,
manquements ou négligence de l’Utilisateur ou du Bénéficiaire l’un envers l’autre.
Le Distributeur est seul responsable de la sécurité et de la confidentialité des données échangées
dans le cadre de l'utilisation du Site conformément aux Conditions Générales du Site, l’Emetteur
étant responsable de la sécurité et de la confidentialité des données qu’il échange avec
l’Utilisateur dans le cadre des présentes au titre de la création et de la gestion de son Compte,
ainsi que des Opérations de paiement associées au Compte.<br />
8. Limitation de responsabilité de l’Emetteur<br />
L’Emetteur n'intervient en aucune manière dans les relations juridiques et commerciales et les
éventuels litiges intervenant entre le Bénéficiaire et l’Utilisateur. L’Emetteur n'exerce aucun
contrôle sur la conformité, la sécurité, la licéité, les caractéristiques et le caractère approprié des
produits objet d’une Opération de paiement. A cet égard, il appartient à l’Utilisateur de prendre
toutes les informations utiles avant de procéder à l’achat d’un produit ou service, la collecte de
fonds ou toute opération en toute connaissance de cause. Chaque opération réalisée par
l’Utilisateur donne naissance à un contrat directement formé entre lui et le ou les Bénéficiaires
auquel l’Emetteur est étranger. Ce dernier ne pourra en conséquence être tenu responsable de
l’inexécution ou de la mauvaise exécution des obligations qui en résultent, ni des préjudices
éventuels causé à l’Utilisateur à ce titre.<br />
Nonobstant toute disposition contraire dans le présent Contrat, la responsabilité de l’Emetteur à
l’égard d’un Utilisateur est limitée à la réparation des dommages directs tels que prévus par la
réglementation.<br />
9. Engagements de l’Utilisateur<br />
L’Utilisateur garantit qu’aucun élément de son profil sur le Site ne porte atteinte aux droits de
tiers ni n'est contraire à la loi, à l’ordre public et aux bonnes mœurs. L’Utilisateur atteste de la
conformité, la licéité et le caractère approprié du Don réalisé au profit du Bénéficiaire effectif, de
l’achat du bien au Bénéficiaire.
Il s’engage à ne pas exécuter le Contrat-cadre d’une manière illégale ou dans des conditions
susceptibles d’endommager, de désactiver, de surcharger ou d’altérer le Site. Il s’engage à ne pas
usurper l’identité d’une autre personne ou entité, de falsifier ou dissimuler son identité, son âge
ou créer une identité.<br />
En cas de manquement à ces obligations l’Emetteur se réserve le droit de prendre toute mesure
appropriée afin de faire cesser les agissements concernés. Il sera également en droit de suspendre,
supprimer et/ou bloquer son accès au Compte. Sans préjudice des actions judiciaires engagées par 

des tiers, l’Emetteur est en droit d’exercer à titre personnel toute action en justice visant à réparer
les préjudices qu’il aurait personnellement subis du fait des manquements de l’Utilisateur à ses
obligations au titre du présent Contrat.<br />
10. Durée et résiliation<br />
Les Conditions Générales sont conclues pour une durée indéterminée. Elles entrent en vigueur
à compter de la réception par l’Utilisateur de l’email de confirmation de son inscription.
L’Utilisateur peut à tout moment et moyennant le respect d’un préavis de 30 (trente) jours
calendaires, procéder à la résiliation du Contrat-cadre. L’Emetteur peut à tout moment et
moyennant le respect d’un préavis de 2 mois procéder à la résiliation du Contrat-Cadre.
Cette résiliation emporte résiliation de l’ensemble du Contrat-cadre et en conséquence
fermeture du Compte.<br />
Chaque Partie doit, pour ce faire, adresser sa notification de résiliation des présentes à l’autre
Partie, par lettre recommandée avec accusé de réception, à l’adresse postale ou email indiquée
dans les Conditions Particulières.<br />
L’Utilisateur devra désigner dans le courrier de résiliation les coordonnées de son compte
bancaire ou de paiement permettant à l’Emetteur de lui rembourser la Monnaie Electronique
disponible. En l’absence d’indication, il appartient à l’Emetteur de suivre les instructions de
Remboursement impliquant le remboursement par crédit de la Carte ayant servi à l’acquisition de
la Monnaie Electronique. L’Emetteur est déchargé de toute obligation dès lors qu’il aura
confirmé à l’Utilisateur le virement sur le compte indiqué ou le crédit sur sa Carte du montant de
Monnaie Electronique.<br />
En cas de manquement grave, fraude, ou impayés de la part de l’Utilisateur, l’Emetteur se
réserve le droit de suspendre ou résilier les présentes par l’envoi d’un email accompagné en cas
de résiliation d’une lettre recommandée avec avis de réception.<br />
En cas de nomination d’un successeur de l’Emetteur pour émettre la Monnaie Electronique
distribuée sur le Site, il appartient au Distributeur de recueillir l’accord exprès et écrit de
l’Utilisateur sur ce changement, sur le montant de Monnaie électronique disponible et d’indiquer
à l’Emetteur les modalités de transfert des fonds correspondants à la Monnaie Electronique
disponible.<br />
11. Droit de rétractation<br />
L’Utilisateur dispose d’un délai de 14 (quatorze) jours calendaires révolus pour exercer son droit
de rétractation, sans avoir à justifier de motif ni supporter de pénalité. Ce délai de rétractation
commence à courir à compter du jour de son inscription en tant qu’Utilisateur. L’Utilisateur
doit notifier sa demande de rétractation dans le délai imparti au service client du Distributeur par
téléphone ou par email et adresser un courrier de confirmation à l’adresse du service client du
Distributeur Au titre de l’exercice de son droit de rétractation par l’Utilisateur, le Contrat-cadre 

sera résolu sans frais dans les conditions et sous les réserves prévues aux articles L.121-20-8 et
suivants du Code de la consommation.<br />
Dans le cas, où l’Utilisateur aurait déjà bénéficié du service et qu’il serait détenteur de Monnaie
Electronique à la date de rétractation, il devra indiquer au Distributeur les coordonnées de son
compte bancaire permettant à l’Emetteur de rembourser à l’Utilisateur la Monnaie Electronique
figurant au crédit de son Compte.<br />
12. Règles de lutte contre le blanchiment et le financement du terrorisme
L’Emetteur est soumis à l’ensemble de la réglementation luxembourgeoise et française relative à
la lutte contre le blanchiment et le financement du terrorisme.<br />
En application des dispositions de droit français et luxembourgeois, relatifs à la participation des
organismes financiers à la lutte contre le blanchiment des capitaux et le financement des activités
terroristes, l’Emetteur est tenu de s’informer auprès de tout Utilisateur pour toute opération ou
relation d’affaires de l’origine, de l’objet et de la destination de l’opération ou de l’ouverture du
Compte. Il doit, par ailleurs, réaliser toutes les diligences nécessaires à l’identification de
l’Utilisateur et le cas échéant, du Bénéficiaire effectif du Compte et/ou des Opérations de
paiement liées à celui-ci.<br />
L’Utilisateur reconnaît que l’Emetteur peut mettre un terme ou reporter à tout moment l’usage
d’un identifiant, l’accès à un Compte ou l’exécution d’une opération ou d’un Remboursement en
l’absence d’élément suffisant sur son objet ou sa nature. Il est informé qu’une opération réalisée
dans le cadre des présentes peut faire l’objet de l’exercice du droit à la communication de la
cellule de renseignement financier nationale.<br />
L’Utilisateur peut, conformément à la réglementation, accéder à toutes les informations ainsi
communiquées sous réserve que ce droit d’accès ne remette pas en cause la finalité de lutte contre
le blanchiment des capitaux et le financement du terrorisme lorsque ces données sont relatives au
demandeur.<br />
Aucune poursuite et aucune action en responsabilité civile ne peut être intentée ni aucune
sanction professionnelle prononcée contre l’Emetteur, ses dirigeants ou ses préposés qui ont fait
de bonne foi les déclarations de soupçon auprès de leur autorité nationale.<br />
13. Données à caractère personnel et secret professionnel<br />
Les données personnelles de l’Utilisateur renseignées dans le cadre de l’ouverture de son Compte
sont utilisées par l’Emetteur à des fins de gestion de son Compte, des Opérations de Paiement et
Remboursements<br />
L’Utilisateur accepte que les coordonnées et informations nominatives le concernant recueillies
par l’Emetteur dans le cadre des présentes soient transmises aux prestataires opérationnels avec
lesquelles celui-ci est en relation contractuelle aux seules fins d’exécution des Opérations de
paiement et services sous réserve que ces tiers destinataires des données à caractère personnel 

soient soumis à une réglementation garantissant un niveau de protection suffisante tel que défini à
l’article 561-7 II b du Code Monétaire et Financier. La liste des tiers destinataires des données de
l’Utilisateur est accessible sur simple demande auprès du responsable de la conformité de
l’Emetteur à l’adresse suivante : legal@mangopay.com. Ces informations sont conservées par lui
ou toute société mandatée à cet effet, dans les conditions légales et réglementaires.
L’Utilisateur sera informé préalablement à tout transfert de ses données personnelles en dehors de
l’Union Européenne. En pareille hypothèse, l’Emetteur s’engage à respecter la réglementation en
vigueur et à mettre en place toute mesure nécessaire afin de garantir la sécurité et la
confidentialité des données ainsi transférées.<br />
Certaines informations recueillies et détenues par l’Emetteur dans le cadre des présentes peuvent
donner lieu à l’exercice du droit d’accès et de rectification dans les conditions prévues par la loi
n°78-17 du 6 janvier 1978 modifiée relative à l’informatique, aux fichiers et aux libertés. Tout
Utilisateur peut à tout moment obtenir une copie des informations le concernant sur simple
demande adressée au correspondant clientèle de l’Emetteur à l’adresse suivante:
legal@mangopay.com. Il peut solliciter à l’adresse en entête des présentes, une suppression ou
une rectification de ces informations par écrit. Il peut à tout moment s’opposer à la réception de
sollicitations commerciales, faire modifier ses coordonnées, s’opposer à leur communication en
adressant une notification par courrier recommandée ou courriel suivie d’un accusé de réception à
l’adresse du service client de l’Emetteur.<br />
L’Emetteur conservera les informations et données à caractère personnel pendant la durée
maximum légale ou réglementaire applicable en fonction de la finalité de chacun des traitements
de données.<br />
Les conditions de collecte, de détention et d’accès des données à caractère personnel recueillies
par le Distributeur et sous sa responsabilité au titre de l’accès au Site, sont régies aux termes des
Conditions Générales du Site ainsi que de la charte de confidentialité accessible sur le Site.<br />
14. Comptes inactifs<br />
Tout Compte d’unité de Monnaie Electronique inactif pendant un délai de 12 mois, fera l’objet
d’une notification par l’Emetteur par email d’inactivité suivie d’une relance un mois plus tard.
En l’absence de réponse ou d’utilisation de la Monnaie Electronique disponible dans ce délai, le
Compte sera clôturé et maintenu à la seule fin de procéder au Remboursement de la Monnaie
électronique. Des frais de gestion pourront être perçus par l’Emetteur.<br />
Le Compte ne pourra plus donner lieu à l’utilisation ultérieure de la Monnaie Electronique.
15. Force majeure<br />
Les Parties ne seront pas tenues pour responsables, ou considérées comme ayant failli au titre des
présentes, en cas de retard ou inexécution, lorsque leur cause est liée à un cas de force majeure tel
que défini par la jurisprudence des tribunaux français.<br />
16. Indépendance des stipulations contractuelles<br />

Si l'une quelconque des stipulations des présentes est tenue pour nulle ou sans objet, elle sera
réputée non écrite et n'entraînera pas la nullité des autres stipulations.<br />
Si une ou plusieurs stipulations des présentes deviennent caduques ou sont déclarées comme
telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive rendue par
une juridiction compétente, les autres stipulations conserveront leur force obligatoire et leur
portée. Les stipulations déclarées nulles et non valides seront alors remplacées par les stipulations
qui se rapprocheront le plus quant à leur sens et à leur portée des stipulations initialement
convenues.<br />
17. Incessibilité<br />
Le Contrat-cadre ne peut faire l'objet d'une cession totale ou partielle par l’Utilisateur, à titre
onéreux ou gratuit. Il est par suite interdit de céder à un tiers l'un quelconque des droits ou
obligations qu’il tient des présentes. En cas de manquement à cette interdiction, outre la
résiliation immédiate des présentes, sa responsabilité pourra être engagée par l’Emetteur.<br />
18. Frais<br />
Les services fournis dans le cadre des présentes sont facturés par le Distributeur en son nom et
pour le compte de l’Emetteur conformément aux Conditions Tarifaires .<br />
Toutes les commissions dues par l’Utilisateur sont automatiquement prélevées sur le Compte de
monnaie électronique par l’Emetteur. L’Utilisateur autorise l’Emetteur à compenser à tout
moment, y compris après la clôture du Compte, toute créance certaine, liquide et exigible qui
resterait redevable, à quelque titre que ce soit. Il pourra compenser la provision du Compte de
monnaie électronique avec tout montant dû, exigible et impayé par l’Utilisateur à l’Emetteur.<br />
19. Protection des fonds collectés<br />
Les fonds de l’Utilisateur sont déposés à chaque fin de Jour Ouvré dans un compte ouvert auprès
d’une Banque et sont cantonnés par celle-ci.<br />
Aux termes de l’article 24-10 (1) a) de la Loi du 20 mai 2011 publiée au Mémorial A n° 104 du
24 mai 2011 du Luxembourg, portant transposition de la directive 2009/110/CE du Parlement
européen et du Conseil du 16 septembre 2009 concernant l’accès à l’activité des établissements
de monnaie électronique, les fonds collectés sont protégés et ne tombent pas dans la masse des
avoirs de l’établissement de monnaie électronique en cas de liquidation, de faillite ou de toute
autre situation de concours de ce dernier.<br />
20.Convention de preuve<br />
Toutes les données reprises de façon inaltérable, fiable, et sécurisée dans la base de données
informatique de l’Emetteur relatives notamment aux ordres de paiement et confirmations reçues 
de l’Utilisateur, aux notifications envoyées, aux accès, Retrait, Remboursement feront foi entre













                 


                  </Segment>
                </div>
            </div> 
          </div>

                    
          <div className="containerFooter">    
            <Footer />
          </div>
                  
      </div>
    );
  }
}



export default withTracker(() => {
   //Meteor.subscribe('all');
  return {
    
   
  };
})(CGU);
