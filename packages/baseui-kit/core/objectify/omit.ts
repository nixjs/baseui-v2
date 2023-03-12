export function omit<T extends Record<any, any>>(object: T, keysToOmit: string[] = []) {
    const clone = Object.assign({}, object)
    for (const key of keysToOmit) {
        // eslint-disable-next-line no-prototype-builtins
        if ((clone as any).hasOwnProperty(key)) delete clone[key]
    }
    return clone
}
