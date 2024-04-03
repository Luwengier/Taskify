'use client';

import { createBoard } from '@/actions/create-board';

import { FormInput } from './form-input';
import { FormButton } from './form-button';
import { useAction } from '@/hooks/use-action';

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log('Success:', data);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />

      <FormButton />
    </form>
  );
};

export default Form;
