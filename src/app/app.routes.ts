import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatEnregistrerComponent } from './candidat/candidat-enregistrer/candidat-enregistrer.component';
import { CandidatConnexionComponent } from './candidat/candidat-connexion/candidat-connexion.component';
import { OffreDetailComponent } from './offre/offre-detail/offre-detail.component';
import { OffreEnregistrerComponent } from './offre/offre-enregistrer/offre-enregistrer.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent, pathMatch: 'full'},
    {path: 'candidat/enregistrer', component: CandidatEnregistrerComponent},
    {path: 'candidat/connexion', component: CandidatConnexionComponent},
    {path: 'offre/enregistrer', component: OffreEnregistrerComponent},
    {path: 'offre/:id', component: OffreDetailComponent},
];
