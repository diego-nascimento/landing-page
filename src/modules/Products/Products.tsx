import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import { ModuleHeader } from '../../shared/components/';
import { Container, Product } from './components';
import { useRouter } from 'next/router';

interface Props extends LayoutProps {}

export const Products = (data: Props) => {
  return (
    <Layout
      data={{
        ...data,
        HeaderProps: { ...data.HeaderProps, whiteBackground: true },
      }}
    >
      <Container>
        <ModuleHeader title="Nossos produtos" text="Veja nossos cursos" />
        <Product
          title="Curso 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          color="#8A2FEB"
          callToAction="/curso1"
          image={'https://www.elegantthemes.com/images/divi-preview.jpg'}
          video={true}
          videoUrl={'https://www.youtube.com/embed/u50KhrwBoSQ'}
        />

        <Product
          title="Curso 2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          color="#29D787"
          callToAction="/curso2"
          image={'https://www.elegantthemes.com/images/extra-preview.jpg'}
          video={true}
          videoUrl={'https://www.youtube.com/embed/u50KhrwBoSQ'}
        />
        <Product
          title="Curso 3"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          color="#FF7717"
          callToAction="/curso3"
          image={'https://www.elegantthemes.com/images/monarch-preview.jpg'}
          video={true}
          videoUrl={'https://www.youtube.com/embed/u50KhrwBoSQ'}
        />
      </Container>
    </Layout>
  );
};
