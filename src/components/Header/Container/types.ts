export enum Headers {
    default = 'default'
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
}

export interface HeaderTypes {
    logo: LogoTypes
    MenuItens: MenuItemTypes[]
}