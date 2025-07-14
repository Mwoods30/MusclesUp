import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutComponent } from './workout/workout.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // default route (home)
  { path: 'profile', component: ProfileComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'signin', component: SigninComponent },

  // Optional: redirect unknown URLs to home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];