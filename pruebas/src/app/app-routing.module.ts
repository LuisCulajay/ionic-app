import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children: [
      {
        path: "",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ":placeId",
        loadChildren: () => import('./places/detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: "add",
        loadChildren: () => import('./places/add/add.module').then( m => m.AddPageModule )
      }
    ]
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
