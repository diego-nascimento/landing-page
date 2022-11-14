import { Grid } from '@/shared';
import React from 'react';
import { Container, Header, Box, Input } from './components';
import { FaUserCircle, FaTools } from 'react-icons/fa';
import { useFormInput } from '@/shared/hooks';
import { schema } from './schema';

export const Section1 = () => {
  const { errors, register, onSubmit } = useFormInput({
    yupSchema: schema,
  });

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
          <Input
            placeholder="Nome"
            type="text"
            field="name"
            register={register}
            errors={errors}
            color={'#8f42ec'}
          />
          <Input
            placeholder="E-mail"
            type="text"
            field="email"
            register={register}
            errors={errors}
            color={'#8f42ec'}
          />
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
