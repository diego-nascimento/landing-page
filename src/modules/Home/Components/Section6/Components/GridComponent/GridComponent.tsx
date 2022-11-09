import { Grid, GridComponents, GridItem } from '@/shared';
import React from 'react';

const image = {
  alt: 'teste',
  url: 'https://www.elegantthemes.com/images/icons/big/editor.svg',
};

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .";

export const GridComponent = () => {
  return (
    <Grid title="Trying the foursome" columnsAmount={4}>
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
        callToAction={{ url: '/google.com.br' }}
        textColor="black"
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
        callToAction={{ url: '/google.com.br' }}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
        callToAction={{ url: '/google.com.br' }}
      />
      <GridItem
        gridComponent={GridComponents.flip}
        image={image}
        title={'Test title'}
        text={text}
      />
    </Grid>
  );
};
