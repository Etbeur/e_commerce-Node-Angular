import { PageNotFoundComponent } from './error/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';

export const routes:Routes = [
    {path: 'home', component: HomeComponent },
    {path: '**', component: PageNotFoundComponent },

];