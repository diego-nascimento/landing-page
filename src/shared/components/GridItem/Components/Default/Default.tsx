import React from 'react';
import { gridItemProps } from '../../types';
import { Container } from './components';
import { Text, Title, ImageComponent } from '../shared';

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
    <Container callToAction={callToAction}>
      {!!image && <ImageComponent data={image} />}
      {!!title && (
        <Title title={title} titleColor={textColor} center={center} />
      )}
      {!!text && <Text text={text} textColor={textColor} center={center} />}
    </Container>
  );
};
