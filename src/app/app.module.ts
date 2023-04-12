import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AppRoutingModule } from './app-ruting.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,//para incorporar animacion del navegador
    AppRoutingModule,//modulo de rutas
    CoreModule,//para clases utilizadas por app.module
    SharedModule//recursos que se van a utilizar en mas de un modulo
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass: PathLocationStrategy,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
