import { useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  yupSchema: AnyObjectSchema;
}

export const useFormInput = ({ yupSchema }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
    reValidateMode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return {
    register,
    errors,
    onSubmit,
  };
};
