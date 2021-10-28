import { FormikProps } from 'formik';
import tw from 'twin.macro';

interface ErrorInputProps {
  formik: FormikProps<any>;
  field: string;
}

export default function ErrorInput({ formik, field }: ErrorInputProps): JSX.Element {
  return (
    <>
      {
      formik.touched[(field as any)] && formik.errors[(field as any)] ? (
        <small css={tw`block -mt-3! mb-3 text-red-700 font-light`}>
          { formik.errors[(field as any)] }
        </small>
      ) : null
      }
    </>
  );
}
