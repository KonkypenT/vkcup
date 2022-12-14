import { Component, Inject, Input } from '@angular/core';
import { Theme } from '../../shared/types/theme.type';
import { ButtonIcon } from '../../shared/enums/button-icon.enum';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ROUTING_NAMES } from '../../routing/routing-names.const';
import { map, Observable } from 'rxjs';
import { CURRENT_THEME } from '../../shared/tokens/current-theme.token';
import { ThemingService } from '../../shared/serivces/theming.service';
import { LocalStorageService } from '../../shared/serivces/local-storage.service';

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

  constructor(
    @Inject(CURRENT_THEME) public currentTheme$: Observable<Theme>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemingService,
    private localStoreService: LocalStorageService,
  ) {}

  public changeQuery(option: string): void {
    const queryParams: Params = { option };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  public changeTheme(): void {
    const currentTheme = this.themeService.getCurrentThemeSnapshot();

    this.themeService.setCurrentTheme(currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
    this.localStoreService.setItem('theme', currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
}
