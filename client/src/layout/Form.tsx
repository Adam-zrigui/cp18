import React from 'react'
import {Formik, Form as I} from 'formik'
import valid from '@/temp/valid';
import useMut from '@/handlers/useMut';
import { movie } from '@/interface';
export default function Form() {
  const initialValues = {
    title: "",
    director: "",
    description: "",
    rate: NaN,
    imgUrl: "",
    id: "",
  };
  const {error , isLoading, mutate} = useMut() 
  return (
    <Formik initialValues={initialValues}
    validationSchema ={valid}
    onSubmit={(movies : movie) => mutate(movies) }
    >
      <I>
 <input type="text" required placeholder=''  />
 <input type="text" required placeholder=''  /
 ><input type="text" required placeholder='' onKeyPress={(event) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
}}  />
 <input type="text" required placeholder=''  />
 <input type="text" required placeholder=''  />
 <button>submit</button>
      </I>
    </Formik>
  )
}
