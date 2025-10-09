import { animate, animation, style } from "@angular/animations";

export const slideAndFadeAnimation = animation([
    style(
        {
            transform: 'translateX(-100%)',
            'background-color': '{{startColor}}',
            opacity: 0
        },
    ), animate('{{time}} ease-out', style({
        transform: 'translateX(0)',
        'background-color': 'white',
        opacity: 1
    })),
])
