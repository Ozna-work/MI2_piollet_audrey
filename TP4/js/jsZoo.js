class NavBar {
    constructor(accueil,menu,themes,evenements,visiteaudio,visitevideo,contact) {
        this.accueil = accueil;
        this.menu = menu;
        this.themes = themes;
        this.evenements = evenements;
        this.visiteaudio = visiteaudio;
        this.visitevideo = visitevideo;
        this.contact = contact;

    }
}

class Evenement {
    constructor(typeAnimal,cheminImg,date,heuredeb,heurefin,typeEvenement,tarif) {
        this.typeAnimal = typeAnimal;
        this.cheminImg = cheminImg;
        this.date = date;
        this.heuredeb = heuredeb;
        this.heurefin = heurefin;
        this.typeEvenement = typeEvenement;
        this.tarif = tarif;

    }
}

class VisiteAudio {
    constructor(lienAudio,nomAudio) {
        this.lienAudio = lienAudio;
        this.nomAudio = nomAudio;
    }
}

class VisiteVirtuelle {
    constructor(lienVideo,nomVideo) {
        this.lienVideo = lienVideo;
        this.nomVideo = nomVideo;
    }
}

class Themes {
    constructor(titre,marin,desert,jungle,glace) {
        this.titre = titre;
        this.marin = marin;
        this.desert = desert;
        this.jungle = jungle;
        this.glace = glace;
    }
}

class Menu {
    constructor(titre,connexion,visite,parainage,donation) {
        this.titre = titre;
        this.connexion = connexion;
        this.visite = visite;
        this.parainage = parainage;
        this.donation = donation;

    }
}