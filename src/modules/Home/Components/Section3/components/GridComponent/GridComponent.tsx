import { Grid, GridComponents, GridItem } from '@/shared';
import React from 'react';

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .";

export const GridComponent = () => {
  return (
    <Grid title="Texto for everyone" titleColor="white" withShadow={false}>
      <GridItem
        gridComponent={GridComponents.default}
        title={'Test title'}
        text={text}
        textColor={'white'}
        center={false}
      />
      <GridItem
        gridComponent={GridComponents.default}
        title={'Test title'}
        text={text}
        textColor={'white'}
        center={false}
      />
      <GridItem
        gridComponent={GridComponents.default}
        title={'Test title'}
        text={text}
        textColor={'white'}
        center={false}
      />
    </Grid>
  );
};
