import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';

const COMPONENTS = [AppComponent, HeaderComponent, SidebarComponent, SidebarItemComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
