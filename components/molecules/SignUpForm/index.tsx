import { Formik } from 'formik';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import * as yup from 'yup';
import { ROUTE_COMPLETE_PROFILE } from '../../../constants/api-paths';
import { setCookiesAuth, setSignUp } from '../../../services/auth';
import Button from '../../atoms/Button';
import ErrorInput from '../../atoms/ErrorInput';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

const Schema = yup.object({
  email: yup.string().email().required('email is required'),
  fullname: yup.string().required('fullname is required'),
  password: yup.string().min(6, 'password must be more than 6').required('password is required'),
  gender: yup.string().required('gender is required'),
  phoneNumber: yup.string().required('phone number is required'),
});

export default function SignUpForm(): JSX.Element {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: '',
        fullname: '',
        password: '',
        gender: 'man',
        phoneNumber: '',
      }}
      validationSchema={Schema}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        setSubmitting(true);
        const res = await setSignUp(values);

        if (res.status === 'error') {
          res.message.forEach((value: string) => {
            setFieldError(
              value.substring(value.indexOf('[') + 1, value.lastIndexOf(']')),
              value.substr(value.indexOf(':') + 1),
            );
          });
        } else {
          setCookiesAuth(res.token);

          router.push(ROUTE_COMPLETE_PROFILE);
        }
        setSubmitting(false);
      }}
    >
      {
        (formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              label="Email"
              id="email"
              required
              placeholder="Your email"
              {...formik.getFieldProps('email')}
            />
            <ErrorInput formik={formik} field="email" />
            <Input
              type="text"
              label="Fullname"
              id="fullname"
              required
              placeholder="Your fullname"
              {...formik.getFieldProps('fullname')}
            />
            <ErrorInput formik={formik} field="fullname" />
            <Input
              type="password"
              label="Password"
              id="password"
              required
              placeholder="Your password"
              {...formik.getFieldProps('password')}
            />
            <ErrorInput formik={formik} field="password" />
            <Select label="Gender" id="gender" required {...formik.getFieldProps('gender')}>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </Select>
            <ErrorInput formik={formik} field="gender" />
            <Input
              type="text"
              label="Phone Number"
              id="phoneNumber"
              required
              placeholder="Your phone number"
              {...formik.getFieldProps('phoneNumber')}
            />
            <ErrorInput formik={formik} field="phoneNumber" />

            <Button
              text="Sign Up"
              color="pink"
              block
              tw="px-3.5 py-2.5 mt-3"
              typeSubmit
              isLoading={formik.isSubmitting}
              disabled={formik.isSubmitting}
            />
            <div css={tw`text-center`} />
          </form>
        )
      }
    </Formik>
  );
}
