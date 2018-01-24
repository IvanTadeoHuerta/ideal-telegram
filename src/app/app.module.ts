import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdministradorModule } from './administrador/administrador.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrientadoresComponent } from "./administrador/orientadores/orientadores.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'admon/orientadores',
        component: OrientadoresComponent
      }
    ]
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyATH1wha_qcUW8rJKLuqMFgauw1FvH-ftE",
  authDomain: "systemreport-f84d9.firebaseapp.com",
  databaseURL: "https://systemreport-f84d9.firebaseio.com",
  storageBucket: "systemreport-f84d9.appspot.com",
  messagingSenderId: "1055620503994"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AdministradorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
