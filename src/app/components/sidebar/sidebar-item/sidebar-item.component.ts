import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '../../../shared/types/theme.type';
import { ButtonIcon } from '../../../shared/enums/button-icon.enum';
import { ROUTING_NAMES } from '../../../routing/routing-names.const';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input()
  public theme: Theme = 'light-theme';

  @Input()
  public text: string = '';

  @Input()
  public icon: ButtonIcon = ButtonIcon.NoIcon;

  @Input()
  public route: string = ROUTING_NAMES.inbox;

  @Input()
  public currentRoute: string = '';

  @Output()
  public chooseOption: EventEmitter<string> = new EventEmitter<string>();
}
