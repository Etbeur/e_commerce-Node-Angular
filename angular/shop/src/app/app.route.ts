import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes:Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'inscription', component: InscriptionComponent },
    {path: 'connexion', component: ConnexionComponent },
    {path: '**', component: PageNotFoundComponent },

];