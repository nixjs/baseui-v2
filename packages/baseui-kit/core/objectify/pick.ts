export function pick(obj: Record<string, any>, arr: string[]) {
    return arr.reduce((acc: any, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {})
}
