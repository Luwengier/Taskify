'use client';

import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        type="text"
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />

      {errors?.title?.map((error: string) => (
        <div key={error}>
          <p className="text-rose-500">{error}</p>
        </div>
      )) || null}
    </div>
  );
};
