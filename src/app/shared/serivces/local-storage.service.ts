import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string | null {
    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return value;
  }
}
