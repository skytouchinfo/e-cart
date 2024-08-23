import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src',
  },
})
export class ImagePreloadDirective {
  @Input() src?: string;
  @Input() default?: string;
  @HostBinding('class') className?: string;
  private errorCount: number = 0;

  constructor() {}

  updateUrl() {
    this.errorCount++;
    this.src = this.default;
  }
  load() {
    this.className = 'image-className';
  }
}
