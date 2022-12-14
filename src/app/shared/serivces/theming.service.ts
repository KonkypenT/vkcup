import { Injectable } from '@angular/core';
import { Theme } from '../types/theme.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemingService {
  private currentTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light-theme');

  public getCurrentTheme(): BehaviorSubject<Theme> {
    return this.currentTheme;
  }

  public setCurrentTheme(value: Theme): void {
    this.currentTheme.next(value);
  }

  public getCurrentThemeSnapshot(): Theme {
    return this.currentTheme.getValue();
  }
}
