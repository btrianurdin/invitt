import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import ErrorInput from '../../atoms/ErrorInput';
import { setEditPassword } from '../../../services/user';
import { removeCookiesAuth } from '../../../services/auth';
import { ROUTE_SIGNIN } from '../../../constants/api-paths';

const Schema = yup.object({
  oldPassword: yup.string().required('old password is required'),
  newPassword: yup.string().required('new password is required').min(6, 'password password must be more than 6'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Password not match'),
});

export default function EditPassword(): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <h1 css={tw`text-xl font-medium pb-1.5 border-b border-pink-400 inline-block`}>Edit Password</h1>
      <div>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={Schema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            const res = await setEditPassword(values);

            if (res.status === 'error') {
              toast.error(res.message);
            } else {
              toast.success('Successful edit password');

              removeCookiesAuth();
              setTimeout(() => {
                if (window) {
                  window.location.assign(ROUTE_SIGNIN);
                } else {
                  router.reload();
                }
              }, 500);
            }
          }}
        >
          {
            (formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Input
                  type="password"
                  label="Old Password"
                  id="oldPassword"
                  {...formik.getFieldProps('oldPassword')}
                  isError={!!formik.errors.oldPassword}
                />
                <ErrorInput formik={formik} field="oldPassword" />

                <Input
                  type="password"
                  label="New Password"
                  id="newPassword"
                  {...formik.getFieldProps('newPassword')}
                  isError={!!formik.errors.newPassword}
                />
                <ErrorInput formik={formik} field="newPassword" />

                <Input
                  type="password"
                  label="Confirm Password"
                  id="confirmPassword"
                  {...formik.getFieldProps('confirmPassword')}
                  isError={!!formik.errors.confirmPassword}
                />
                <ErrorInput formik={formik} field="confirmPassword" />

                <Button
                  text="Save"
                  color="pink"
                  block
                  tw="px-3.5 py-2.5 mt-3"
                  typeSubmit
                  isLoading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                />
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}
