import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})

export class BorderColorDirective implements OnInit {
  @Input() public appBorderColor: string;

  constructor(private elementRef: ElementRef) {}

  private addClass(cl: string): void {
    this.elementRef.nativeElement.classList.add(cl);
  }

  public ngOnInit(): void {
    const diff: number = Date.now() - Date.parse(this.appBorderColor);
    const week: number = 604800000;
    const month: number = 2592000000;
    const halfYear: number = 15552000000;
    if (diff < week) { this.addClass('border-status-b'); }
    if (diff < month) { this.addClass('border-status-g'); }
    if (diff > halfYear) { this.addClass('border-status-r'); }
  }
}
