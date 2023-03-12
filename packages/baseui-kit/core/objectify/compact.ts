export function compact<T extends Record<any, any>>(object: T) {
    const data = Array.isArray(object) ? object.filter(Boolean) : object
    return Object.keys(data).reduce(
        (acc: any, key) => {
            const value = (data as any)[key]
            if (value) acc[key] = typeof value === 'object' ? compact(value) : value
            return acc
        },
        Array.isArray(object) ? [] : {}
    )
}
