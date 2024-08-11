import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatEnregistrerComponent } from './candidat/candidat-enregistrer/candidat-enregistrer.component';
import { OffreDetailComponent } from './offre/offre-detail/offre-detail.component';
import { OffreEnregistrerComponent } from './offre/offre-enregistrer/offre-enregistrer.component';
import { RecruteurEnregistrerComponent } from './recruteur/recruteur-enregistrer/recruteur-enregistrer.component';
import { ChoixCreationCompteComponent } from './choix-creation-compte/choix-creation-compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent as Accueil } from './dashbord/accueil/accueil.component';
import { CategorieComponent } from './dashbord/categories/categorie/categorie.component';
import { CategorieAjouterComponent } from './dashbord/categories/categorie-ajouter/categorie-ajouter.component';
import { RoleComponent } from './dashbord/roles/role/role.component';
import { RoleAjouterComponent } from './dashbord/roles/role-ajouter/role-ajouter.component';
import { ProfileAjouterComponent } from './dashbord/profiles/profile-ajouter/profile-ajouter.component';


export const routes: Routes = [
    {path: '', component: AccueilComponent, pathMatch: 'full'},
    {path: 'creation/compte', component: ChoixCreationCompteComponent},
    {path: 'recruteur/enregistrer', component: RecruteurEnregistrerComponent},
    {path: 'candidat/enregistrer', component: CandidatEnregistrerComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'offre/enregistrer', component: OffreEnregistrerComponent},
    {path: 'offre/:id', component: OffreDetailComponent},

    {path: 'dashbord', component: Accueil},
    {path: 'profile/ajouter', component: ProfileAjouterComponent},
    {path: 'categories', component: CategorieComponent},
    {path: 'categorie/ajouter', component: CategorieAjouterComponent},
    {path: 'roles', component: RoleComponent},
    {path: 'role/ajouter', component: RoleAjouterComponent}
];
