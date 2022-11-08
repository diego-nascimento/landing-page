

export enum GridComponents {
    default = 'default',
    textOnly = 'textOnly'
}


export interface gridImageProps {
    url: string
    alt: string
}

export interface callToActionProps {
    url: string
}

export interface gridItemProps {
    image?: gridImageProps
    title?: string
    text?: string
    callToAction?: callToActionProps
    textColor?: 'white' | 'black'
    center?: boolean
}