import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            tertiary: string;
            border100: string;

            white: string;
            black: string;
            grey: string;

            success: string;
            info: string;
            warning: string;
        },
    };
}