import { Grid, GridComponents, GridItem } from '@/shared';
import React from 'react';

export const GridComponent = () => {
  return (
    <Grid
      title="The Complete Brindingbinbin Design System Is Here"
      titleColor="white"
      withShadow={false}
    >
      <GridItem
        title="Complete Design Control"
        textColor="white"
        gridComponent={GridComponents.default}
        text="Divi isn't just a WordPress theme, it's a complete design framework that allows you to design and customize every part of your website from the ground up. You have control over everything down to the finest detail. Create the perfect websites for you and your clients."
      />
      <GridItem
        title="Optimize & Convert"
        gridComponent={GridComponents.default}
        textColor="white"
        text="Divi not only comes with powerful design tools, it also helps you make your website a success. Build your marketing lists with Bloom pop-ups. Promote your website on social media with Monarch social sharing. Increase website conversions with Divi Leads split testing."
      />
      <GridItem
        title="Build Websites Faster"
        gridComponent={GridComponents.default}
        textColor="white"
        text="If you are a web design professional, you will be amazed by Divi's speed and efficiency. Divi isn't just an easy-to-use website builder for beginners, it's an advanced design system that can help take your team's work flow to the next level."
      />
    </Grid>
  );
};
