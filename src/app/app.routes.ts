import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    { path: 'app', component: AppComponent},
    { path: 'posts', component: PostsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);