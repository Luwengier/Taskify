'use client';

import { create, State } from '@/actions/create-board';
import { useFormState } from 'react-dom';
import { FormInput } from './form-input';
import FormButton from './form-button';

const Form = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />

      <FormButton />
    </form>
  );
};

export default Form;
