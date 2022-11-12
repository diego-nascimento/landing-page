export enum Footers {
    default = 'default',
    elegant = 'elegant'
}


interface FooterSectionItem {
    label: string
    url: string
    id: string
}
export interface FooterSection {
    id: string
    title: string
    itens: FooterSectionItem[]
}

export type socialNetworkTypes ={
    card: 'facebook' | 'instagram' | 'twitter'  | 'linkedin' | 'youtube'
    url: string
    numberOfFollows?: number
}
export interface FooterTypes {
    logoUrl:string
    sections: FooterSection[]
    socials: socialNetworkTypes[]
}