import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public searchValue: string;
  public orderBy: string;
  public arrow: string;
  public isFilter: boolean = false;
  public filterValue: string;
  public isFilterBlock: boolean = false;

  constructor(private router: Router) { }

  public toggleSettings(): void {
    this.isFilterBlock = !this.isFilterBlock;
  }

  public search(load?: boolean): void {
    this.router.navigate(['/main'], {
      queryParams: {
        load,
        search: this.searchValue || undefined,
        orderBy: this.orderBy || undefined,
        arrow: this.arrow || undefined
      }
    });
  }
}
