import { Grid } from '@/shared/components/';
import { Description } from '../Description';
import { ImageDescription } from '../ImageDescription';

export interface Props {
  title: string;
  description: string;
  image: string;
  callToAction: string;
  color: string;
  video: boolean;
  videoUrl: string;
}

export const Product = (data: Props) => {
  return (
    <div className="w-full pt-10 md:px-10 px-2 ">
      <Grid columnsAmount={2}>
        <Description {...data} />
        <ImageDescription {...data} />
      </Grid>
    </div>
  );
};
