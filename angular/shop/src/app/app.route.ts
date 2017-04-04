import { FormulaireConnexionComponent } from './formulaire-connexion/formulaire-connexion.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes } from '@angular/router';

export const routes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'inscription', component: FormulaireInscriptionComponent},
    {path: 'connexion', component: FormulaireConnexionComponent},
    {path: '**', component:PageNotFoundComponent}

];