import { HomePageComponent } from './routes/home/home.component';

export const AppRoutes = [
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' },
];
