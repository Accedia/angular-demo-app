import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    OnChanges
    } from '@angular/core';

@Directive({
    selector: '[umsBackgroundImage]'
})
export class BackgroundImageDirective implements OnChanges {
    @Input('umsBackgroundImage') backgroundImage: string;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    public ngOnChanges(): void {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'background-image', `url("${this.backgroundImage}")`);
    }
}
