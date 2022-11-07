export enum Footers {
    default = 'default',
    elegant = 'elegant'
}


interface FooterSectionItem {
    label: string
    url: string
}
export interface FooterSection {
    id: string
    title: string
    itens: FooterSectionItem[]
}
export interface FooterTypes {
    logoUrl:string
    sections: FooterSection[]
}