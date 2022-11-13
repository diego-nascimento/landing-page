import { Grid } from '@/shared';
import React from 'react';
import { Container, Header, Box } from './components';
import { FaUserCircle, FaTools } from 'react-icons/fa';

export const Section1 = () => {
  return (
    <Container>
      <Header />
      <Grid columnsAmount={2} withShadow={false}>
        <Box
          title="Envie um email"
          icon={FaUserCircle}
          text="Nos envie um email em caso de alguma duvida"
          color="#8f42ec"
        >
          asd
        </Box>
        <Box
          title="Chat online"
          text="Se precisar, pode falar diretamente conosco"
          icon={FaTools}
          color="#6797ff"
        >
          asd
        </Box>
      </Grid>
    </Container>
  );
};
