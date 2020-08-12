export class TwoColorIconProps {
    primary: string;
    secondary: string;

    constructor(primary?: string, secondary?: string) {
        this.primary = primary ?? 'currentColor';
        this.secondary = secondary ?? 'currentColor';
    }
}
