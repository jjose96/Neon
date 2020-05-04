import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './body/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './body/home/login/login.component';
import { RegisterComponent } from './body/home/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './body/user/sidebar/sidebar.component';
import { UserComponent } from './body/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesComponent } from './body/user/notes/notes.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCNrJ0JeC_G-hDjg9T3Rg4Rhbz2s_A4VCQ',
  authDomain: 'neon-3ac65.firebaseapp.com',
  databaseURL: 'https://neon-3ac65.firebaseio.com',
  projectId: 'neon-3ac65',
  storageBucket: 'neon-3ac65.appspot.com',
  messagingSenderId: '805343233818',
  appId: '1:805343233818:web:91bdee4550e94aa3718ea3'
};
const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: 'dashboard', component: UserComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    UserComponent,
    NotFoundComponent,
    NotesComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
