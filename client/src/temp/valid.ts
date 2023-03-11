import * as yup from "yup"

export default yup.object().shape({
    title: yup.string().required(),
    imgUrl: yup.string().required(),
    director: yup.string().required(),
    description: yup.string().required(),
    rate: yup.number().required().min(1, 'rates only from 1 to 5').max(5 ,'rates only from 1 to 5'),
})