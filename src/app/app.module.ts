import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
