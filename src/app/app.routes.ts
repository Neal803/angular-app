import { Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { SaleComponent } from './components/screens/sale/sale.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';
import { ProfileComponent } from './components/screens/profile/profile.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
    path: 'sale',
    component: SaleComponent
    },
{
    path: 'favorites',
    component: FavoritesComponent
    },
{
    path: 'profile',
    component: ProfileComponent
}
 
];
