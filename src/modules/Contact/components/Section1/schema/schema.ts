import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Campo obrigatorio').max(50, 'Quantidade maxima de caracteres atingido'),
    email: yup.string().email('Email invalido').required('Campo obrigatorio')
})