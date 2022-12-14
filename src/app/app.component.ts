import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageService } from './shared/serivces/local-storage.service';
import { ThemingService } from './shared/serivces/theming.service';
import { Theme } from './shared/types/theme.type';
import { CURRENT_THEME } from './shared/tokens/current-theme.token';
import { Observable } from 'rxjs';
import { ThemingHelperService } from './shared/serivces/theming-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(CURRENT_THEME) public currentTheme$: Observable<Theme>,
    private localStoreService: LocalStorageService,
    private themingService: ThemingService,
    private themingHelperService: ThemingHelperService,
  ) {}

  public ngOnInit(): void {
    this.setCurrentThemeFromLocalStorage();
    this.themingHelperService.subscribeToCurrentTheme();
  }

  private setCurrentThemeFromLocalStorage(): void {
    const currentTheme = this.localStoreService.getItem('theme');

    if (!currentTheme) {
      return;
    }

    this.themingService.setCurrentTheme(currentTheme as Theme);
  }
}
