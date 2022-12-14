import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { NgClass } from '@angular/common';

const COMPONENTS = [ButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [NgClass],
  exports: [...COMPONENTS],
})
export class SharedModule {}
