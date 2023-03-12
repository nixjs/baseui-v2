import { isArray, isPlainObject, merge } from './merge'
import { omit } from './omit'
import { compact } from './compact'
import { pick } from './pick'
import { renameKeys } from './renameKeys'

export { isArray, isPlainObject, merge, omit, compact, pick, renameKeys }

export const Objectify = {
    isArray,
    isPlainObject,
    merge,
    omit,
    compact,
    pick,
    renameKeys,
}
