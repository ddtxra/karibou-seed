import { Routes } from '@angular/router';
import { LoaderResolve } from 'kng2-core';

import { KngHomeComponent } from '../kng-home/kng-home.component';
import { ProductListComponent, ProductComponent } from '../kng-product';
import { KngNavbarComponent } from '../kng-navbar';


// export const appRoutes: Routes = [
//   { 
//     path:'', 
//     pathMatch:'prefix',
//     resolve:{ loader:LoaderResolve },
//     children:[
//       { path: 'me', loadChildren: '../kng-user/user.module#UserModule' },
//       { path: 'shops', loadChildren: '../kng-shops/kng-shops.module#ShopsModule' },
//       { path: 'content', loadChildren: '../kng-document/kng-document.module#KngDocumentModule' },      
//       { path: 'admin', loadChildren: '../kng-admin/admin.module#AdminModule'  },
//       { path: 'cart',loadChildren: '../kng-cart/kng-cart.module#KngCartModule'   },
//       { path:'home',component:KngHomeComponent,resolve:{ loader:LoaderResolve },children:[
//         { path: 'products/:sku', component: ProductComponent},
//         { path: 'category/:category/:child', component: ProductListComponent},
//         { path: 'category/:category', component: ProductListComponent},
//         { path: '', pathMatch:'full', redirectTo:''}
//       ]},
//       { path:'',pathMatch:'full', redirectTo:'home' },
//     ]
//   }
// ];

export const appRoutes: Routes = [
  { path: 'me', loadChildren: '../kng-user/user.module#UserModule' },
  { path: 'shops', loadChildren: '../kng-shops/kng-shops.module#ShopsModule' },
  { path: 'content', loadChildren: '../kng-document/kng-document.module#KngDocumentModule' },      
  { path: 'admin', loadChildren: '../kng-admin/admin.module#AdminModule'  },
  { path: 'cart',  loadChildren: '../kng-cart/kng-cart.module#KngCartModule'   },
  { path: 'home', component:KngHomeComponent,resolve:{ loader:LoaderResolve },children:[
    { path: 'products/:sku', component: ProductComponent},
    { path: 'category/:category/:child', component: ProductListComponent},
    { path: 'category/:category', component: ProductListComponent},
    { path: 'category', pathMatch:'full', redirectTo:'' },
    { path: '', pathMatch:'full', redirectTo:''}
  ]},
  // { path:'',pathMatch:'full', redirectTo:'home' },
];
