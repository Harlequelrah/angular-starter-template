import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[highlight]',
    standalone: false,
})
export class HighlightDirective implements AfterViewInit {

    @Input() color = 'gold';
    @Input() clickedColor = 'purple';

    constructor(private el: ElementRef,
        private renderer: Renderer2) { }

    ngAfterViewInit() {
        this.setBackgroundColor(this.color);
    }

    setBackgroundColor(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }

    @HostListener('click') onClick() {
        this.color = this.clickedColor;
    }
}
