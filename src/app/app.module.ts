import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const firebaseConfig = {

  apiKey: 'AIzaSyCNLGVnvogxDgkC_40WbbK5lfaA-iIOV1U',
  authDomain: 'todoapp-16df8.firebaseapp.com',
  projectId: 'todoapp-16df8',
  storageBucket: 'todoapp-16df8.appspot.com',
  messagingSenderId: '456077548919',
  appId: '1:456077548919:web:104105b4a922ed28d01572',
  measurementId: '${config.measurementId}'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
