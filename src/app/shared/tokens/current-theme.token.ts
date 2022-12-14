import { inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from '../serivces/theming.service';
import { Theme } from '../types/theme.type';

export const CURRENT_THEME = new InjectionToken<Observable<Theme>>('Возвращает текущую тему (light / dark)', {
  factory: (): Observable<Theme> => {
    const themeService = inject(ThemingService);

    return themeService.getCurrentTheme();
  },
});
