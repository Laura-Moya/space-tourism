import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
// importa los demás componentes que usas en rutas

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'destination', component: DestinationComponent, pathMatch: 'full' },
  { path: 'crew', component: CrewComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DestinationComponent,
    CrewComponent
    // otros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // ¡Muy importante!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
