
import { Headers, HeaderTypes, mobileHeaders } from "../../Container/types";

const HeaderPropsMocked: HeaderTypes = {
  headerSelected: Headers.elegant,
  mobileHeader: mobileHeaders.elegant,
    logo: {
      logo: 'https://www.elegantthemes.com/images/logo-light.svg',
      url: '/',
    },
    MenuItens: [
      {
        id: '123',
        label: 'MenuText',
        subLabel: 'any_subLabel',
        url: 'google.com.br',
      },
      {
        id: '123',
        label: 'MenuText',
        url: 'google.com.br',
      },
      {
        id: '123',
        label: 'MenuText',
        subLabel: 'any_subLabel',
        url: 'google.com.br',
      },
      {
        id: '123',
        label: 'MenuText',
        url: 'google.com.br',
      },
    ],
    social: {
      facebookUrl: 'asd',
      instagramUrl: 'asdjkoias',
      tiktokUrl: 'asdjioa'
    }
  };

export const headerService = async (): Promise<HeaderTypes> => {
    return Promise.resolve(HeaderPropsMocked)
}