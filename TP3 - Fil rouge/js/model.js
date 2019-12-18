
let evenements = [];
evenements.push(new Evenement("Les crocodiles","../src/crocodiles.jpg","19 novembre 2019","15:00","17:00", "Nourriture","Gratuit"));
evenements.push(new Evenement("Les pinguins","../src/pinguins.jpg","12 décembre 2019","13:00","14:00", "Soin","Payant"));
evenements.push(new Evenement("Les perroquets","../src/perroquets.jpg","20 décembre 2019","16:00","17:00", "Naissance","Payant"));
evenements.push(new Evenement("Les ours","../src/ours.jpg","15 janvier 2019","17:00","18:00", "Soin","Payant"));

let visiteAudio = [];
visiteAudio.push(new VisiteAudio("https://www.freesoundeffects.com/free-track/alligator3-89353/","Aligator"));
visiteAudio.push(new VisiteAudio("https://www.freesoundeffects.com/free-track/batflyby-89370/","Oiseau"));
visiteAudio.push(new VisiteAudio("https://www.freesoundeffects.com/free-track/wolf5-466161/","Loup"));

let visiteVideo = [];
visiteVideo.push(new VisiteVirtuelle("../src/loutre.mp4","Loutre"));
visiteVideo.push(new VisiteVirtuelle("../src/girafe.mp4","Girafe"));

let navbar = new NavBar('Accueil',new Menu('Menu','Connexion','Préparer sa visite', 'Parainage','Donation'),new Themes('Les thèmes','Marins','Désert','Jungle','Glace'),'Les évènements','Visite Virtuelle (audio)','Visite Virtuelle (vidéo)','Contact');
