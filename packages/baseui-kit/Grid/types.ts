import * as React from 'react'
import { ElementTypes } from '../types'

export namespace GridTypes {
    export type StringOrNumberValue = number | string
    export type BooleanOrStringOrNumberValue = boolean | number | string

    interface ColumnOrderOffsetProps {
        size: BooleanOrStringOrNumberValue
        order: StringOrNumberValue
        offset?: StringOrNumberValue
    }

    export interface BaseProps {
        className?: string
        children: React.ReactNode
    }

    export interface ContainerProps extends BaseProps {
        fluid?: boolean | ElementTypes.Breakpoint
        fixed?: boolean
    }

    export type ColumnProps = BooleanOrStringOrNumberValue | ColumnOrderOffsetProps

    export interface ColProps extends BaseProps {
        xs?: ColumnProps
        sm?: ColumnProps
        md?: ColumnProps
        lg?: ColumnProps
        xl?: ColumnProps
        widths?: ElementTypes.Breakpoint[]
    }
}
