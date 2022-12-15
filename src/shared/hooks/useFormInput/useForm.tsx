import { FieldValues, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type onSubmitType = (data: FieldValues) => Promise<null>;
interface Props {
  yupSchema: AnyObjectSchema;
  onSubmit: onSubmitType;
}

export const useFormInput = ({
  yupSchema,
  onSubmit: handleOnSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
    reValidateMode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => handleOnSubmit(data));

  return {
    register,
    errors,
    onSubmit,
  };
};
