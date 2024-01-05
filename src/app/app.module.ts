import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product.component';
import {FormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
