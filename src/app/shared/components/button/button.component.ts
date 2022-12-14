import { Component, Input } from '@angular/core';
import { Theme } from '../../types/theme.type';
import { ButtonIcon } from '../../enums/button-icon.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public theme: Theme = 'light-theme';

  @Input()
  public text: string = '';

  @Input()
  public icon: ButtonIcon = ButtonIcon.NoIcon;

  @Input()
  public isAction: boolean = false;
}
