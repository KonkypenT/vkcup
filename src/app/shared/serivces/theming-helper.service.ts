import { Inject, Injectable, OnDestroy } from '@angular/core';
import { CURRENT_THEME } from '../tokens/current-theme.token';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Theme } from '../types/theme.type';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemingHelperService implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(CURRENT_THEME) private currentTheme$: Observable<Theme>,
    @Inject(DOCUMENT) private readonly documentRef: Document,
  ) {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public subscribeToCurrentTheme(): void {
    this.currentTheme$.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
      this.documentRef.body.classList.remove(value === 'light-theme' ? 'dark-theme' : 'light-theme');
      this.documentRef.body.classList.add(value);
    });
  }
}
