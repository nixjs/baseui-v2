import { CSS } from '@stitches/react'

export namespace ElementTypes {
    export interface AnimationPropArg {
        animation?: boolean
        animationName?: AnimationName
        animationDuration?: number
    }

    export type AnimationName =
        | 'fadeIn'
        | 'fadeInDown'
        | 'fadeInUp'
        | 'fadeInLeft'
        | 'fadeInRight'
        | 'slideInDown'
        | 'slideInUp'
        | 'slideInLeft'
        | 'slideInRight'

    export type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited'

    export type AnimationProp = Record<AnimationName, Record<AnimationState, any>>

    export type Palette = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link'

    export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

    export interface StyledProps {
        /**
         * Override style component. Use: https://stitches.dev/docs/overriding-styles
         */
        overrideStyled?: CSS
    }

    export interface SizeProps {
        width?: number
        height?: number
    }
}
