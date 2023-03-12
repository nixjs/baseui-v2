import React from 'react'

export interface PortalContextState {
    onClose?: () => void
}

export const PortalContext = React.createContext<PortalContextState>({} as PortalContextState)

export function usePortal(): PortalContextState {
    return React.useContext(PortalContext)
}
