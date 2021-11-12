import { Formik } from 'formik';
import tw from 'twin.macro';
import * as yup from 'yup';
import { useAuthContext } from '../../../context/AuthContext';
import Button from '../../atoms/Button';
import ErrorInput from '../../atoms/ErrorInput';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

const Schema = yup.object({
  fullname: yup.string().required('full name can\'t be empty'),
  gender: yup.string(),
  phoneNumber: yup.string().required('phone number can\'t be empty'),
});

export default function EditAccount(): JSX.Element {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div>
      <h1 css={tw`text-xl font-medium pb-1.5 border-b border-pink-400 inline-block`}>Edit Account</h1>
      <div>
        <Formik
          initialValues={{
            fullname: user?.fullname,
            gender: user?.gender,
            phoneNumber: user?.phoneNumber,
          }}
          validationSchema={Schema}
          onSubmit={async (values, { setFieldError, setSubmitting }) => {
            console.log('test');
          }}
        >
          {
            (formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Input
                  type="text"
                  label="Email"
                  id="email"
                  disabled
                  placeholder="Your email"
                  defaultValue={user?.email}
                />

                <Input
                  type="text"
                  label="Fullname"
                  id="fullname"
                  placeholder="Your fullname"
                  {...formik.getFieldProps('fullname')}
                  isError={!!formik.errors.fullname}
                />
                <ErrorInput formik={formik} field="fullname" />
                <Select label="Gender" id="gender" required {...formik.getFieldProps('gender')}>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </Select>
                <ErrorInput formik={formik} field="gender" />
                <Input
                  type="text"
                  label="Phone Number"
                  id="phoneNumber"
                  placeholder="Your phone number"
                  {...formik.getFieldProps('phoneNumber')}
                  isError={!!formik.errors.phoneNumber}
                />
                <ErrorInput formik={formik} field="phoneNumber" />

                <Button text="Edit" color="pink" block tw="px-3.5 py-2.5 mt-3" typeSubmit isLoading={formik.isSubmitting} />
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}
