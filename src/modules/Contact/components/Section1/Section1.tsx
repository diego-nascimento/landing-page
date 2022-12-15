import { Button, Grid, Input, ModuleHeader } from '@/shared/components';
import React from 'react';
import { Container, Box } from './components';
import { FaUserCircle, FaTools } from 'react-icons/fa';
import { useFormInput } from '@/shared/hooks';
import { schema } from './schema';
import { handleFormInput } from './handleFormInput';

export const Section1 = () => {
  const { errors, register, onSubmit } = useFormInput({
    yupSchema: schema,
    onSubmit: handleFormInput,
  });

  return (
    <Container>
      <ModuleHeader
        title="Contato"
        text="Por favor, entre em contato se tiver alguma duvida"
      />
      <Grid columnsAmount={2} withShadow={false}>
        <Box
          title="Envie um email"
          icon={FaUserCircle}
          text="Nos envie um email em caso de alguma duvida"
          color="#8f42ec"
        >
          <form className="w-full" onSubmit={onSubmit}>
            <Input
              placeholder="Nome"
              type="text"
              field="name"
              register={register}
              errors={errors}
              color={'#8f42ec'}
              tag={'input'}
            />
            <Input
              placeholder="E-mail"
              type="text"
              field="email"
              register={register}
              errors={errors}
              color={'#8f42ec'}
              tag={'input'}
            />
            <Input
              placeholder="Sua mensagem"
              type="text"
              field="message"
              register={register}
              errors={errors}
              color={'#8f42ec'}
              tag={'textarea'}
            />
            <Button
              text="Enviar mensagem"
              background={'#8f42ec'}
              textColor={'white'}
              type={'submit'}
            />
          </form>
        </Box>
        <Box
          title="Chat online"
          text="Se precisar, pode falar diretamente conosco"
          icon={FaTools}
          color="#6797ff"
          withShadow={false}
        >
          <Button
            text="Chat com o suporte"
            background={'#6797ff'}
            textColor={'white'}
            type={'button'}
            onClick={() => console.log('abriu o whatsapp')}
          />
        </Box>
      </Grid>
    </Container>
  );
};
