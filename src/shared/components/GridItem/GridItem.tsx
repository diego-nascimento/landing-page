import { Default, Flip } from './Components';
import { GridComponents, gridItemProps } from './types';

interface Props extends gridItemProps {
  gridComponent: GridComponents;
}

export const GridItem = ({
  gridComponent,
  textColor = 'black',
  ...data
}: Props) => {
  return (
    <>
      {gridComponent === GridComponents.default && (
        <Default {...data} textColor={textColor} />
      )}
      {gridComponent === GridComponents.flip && (
        <Flip {...data} textColor={textColor} />
      )}
    </>
  );
};
