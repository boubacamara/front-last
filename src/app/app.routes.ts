import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatEnregistrerComponent } from './candidat/candidat-enregistrer/candidat-enregistrer.component';
import { OffreDetailComponent } from './offre/offre-detail/offre-detail.component';
import { OffreEnregistrerComponent } from './offre/offre-enregistrer/offre-enregistrer.component';
import { RecruteurEnregistrerComponent } from './recruteur/recruteur-enregistrer/recruteur-enregistrer.component';
import { ChoixCreationCompteComponent } from './choix-creation-compte/choix-creation-compte.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent, pathMatch: 'full'},
    {path: 'creation/compte', component: ChoixCreationCompteComponent},
    {path: 'recruteur/enregistrer', component: RecruteurEnregistrerComponent},
    {path: 'candidat/enregistrer', component: CandidatEnregistrerComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'offre/enregistrer', component: OffreEnregistrerComponent},
    {path: 'offre/:id', component: OffreDetailComponent},
];
