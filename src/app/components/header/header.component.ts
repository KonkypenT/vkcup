import { Component, Input } from '@angular/core';
import { Theme } from '../../shared/types/theme.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  public theme: Theme = 'light-theme';
}
