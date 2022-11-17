export enum Headers {
    default = 'default',
    elegant = 'elegant'
}

export enum mobileHeaders {
    default = 'default',
    elegant = 'elegant'
}

export type LogoTypes = {
    logo: string,
    url: string
}

export type MenuItemTypes = {
    id: string
    url: string
    label: string
    subLabel?: string
    emphasis?: boolean
}

export type SocialTypes = {
    facebookUrl?: string
    instagramUrl?: string
    tiktokUrl?: string
}

export interface HeaderTypes {
    logo: LogoTypes
    MenuItens: MenuItemTypes[]
    social: SocialTypes
    mobileHeader?: mobileHeaders
    headerSelected?: Headers
    whiteBackground?:boolean
}