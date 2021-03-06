import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
// import { ProductsService } from '../app/services/products.service';  

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule ,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }