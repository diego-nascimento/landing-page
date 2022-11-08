import React from 'react';
import { gridItemProps } from '../../types';
import { Container, ImageComponent } from './components';
import { Text, Title } from '../shared';

interface Props extends gridItemProps {}

export const Default = ({
  callToAction,
  image,
  text,
  title,
  textColor = 'black',
  center = true,
}: Props) => {
  return (
    <Container>
      {!!image && <ImageComponent data={image} callToAction={callToAction} />}
      {!!title && (
        <Title title={title} titleColor={textColor} center={center} />
      )}
      {!!text && <Text text={text} textColor={textColor} center={center} />}
    </Container>
  );
};
