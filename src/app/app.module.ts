import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoinmarketcapService } from './coinmarketcap.service';
import { Kng2CoreModule } from 'kng2-core';
import { WelcomeComponent } from './kng-welcome/welcome.component';
import { KngNavbarComponent } from './kng-navbar/kng-navbar.component';

//
// importing material components
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdcButtonModule,
  MdcCardModule,
  MdcFabModule,
  MdcIconModule,
  MdcIconToggleModule,  
  MdcMaterialIconModule,
  MdcMenuModule,
  MdcRippleModule,
  MdcThemeModule,
  MdcTextFieldModule,
  MdcToolbarModule
} from '@angular-mdc/web';

// import { MatButtonModule,
//          MatCardModule,
//          MatGridListModule,
//          MatFormFieldModule,  
//          MatInputModule,
//          MatIconModule, 
//          MatMenuModule,
//          MatToolbarModule } from '@angular/material';


//
// routing
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { UserSignComponent, UserRegisterComponent } from './kng-user';
import { ProductComponent, 
         ProductThumbnailComponent, 
         ProductTinyComponent, 
         ProductListComponent } from './kng-product';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent, ProductThumbnailComponent, ProductTinyComponent, ProductListComponent,
    KngNavbarComponent,
    UserSignComponent, UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    //MatButtonModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule,
    MdcButtonModule,
    MdcCardModule,
    MdcFabModule,
    MdcIconModule,
    MdcMaterialIconModule,
    MdcIconToggleModule,
    MdcMenuModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcThemeModule,
    MdcToolbarModule,
    Kng2CoreModule.forRoot({API_SERVER:'http://api.karibou.ch',
        loader:[
          "categories"
        ]
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [CoinmarketcapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
