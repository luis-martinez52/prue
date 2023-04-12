import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "@layout/skeleton/skeleton.component";
const routes: Routes=[
    { path:``, component:   SkeletonComponent,
    //definiendo un array de una ruta hija
    children:[
        { path:'',loadChildren:()=>import('@modules/home/home.module').then(m => m.HomeModule)},
        { path:'directivas', loadChildren:()=>import('@modules/directivas/directivas.module')
                                                                    .then(m => m.DirectivasModule)},
        {path:'mascotar', loadChildren:()=>import('@modules/mascotar/mascotar.module')
                                                                    .then(m => m.MascotarModule)}
    ]
}, 
{path:'*',redirectTo:'',pathMatch:'full'} 
];
@NgModule({
    imports:[
        //indicamos al enrutador cuales son las rutas de la aplicacion
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}