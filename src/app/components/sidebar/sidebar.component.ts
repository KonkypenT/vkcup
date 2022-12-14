import { Component, Input } from '@angular/core';
import { Theme } from '../../shared/types/theme.type';
import { ButtonIcon } from '../../shared/enums/button-icon.enum';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ROUTING_NAMES } from '../../routing/routing-names.const';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  public theme: Theme = 'light-theme';

  public readonly iconsButton = ButtonIcon;

  public readonly routingName = ROUTING_NAMES;

  public currentCategory$: Observable<string> = this.activatedRoute.queryParams.pipe(map((p) => p['option']));

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public changeQuery(option: string): void {
    const queryParams: Params = { option };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
