import { Formik } from 'formik';
import * as yup from 'yup';
import tw from 'twin.macro';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import ErrorInput from '../../atoms/ErrorInput';
import Input from '../../atoms/Input';
import InputGroup from '../../atoms/InputGroup';
import Button from '../../atoms/Button';
import { setCompleteProfile } from '../../../services/auth';
import { ROUTE_HOME } from '../../../constants/api-paths';

interface CompleteProfileFormProps {
  templateData: string | undefined;
}

const Schema = yup.object({
  web_url: yup.string()
    .matches(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, { message: 'web url not valid' })
    .required('web url is required'),
  groom_fullname: yup.string().trim().required('groom fullname is required'),
  bride_fullname: yup.string().trim().required('bride fullname is required'),
});

export default function CompleteProfileForm({
  templateData,
}: CompleteProfileFormProps): JSX.Element {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        web_url: '',
        groom_fullname: '',
        bride_fullname: '',
      }}
      validationSchema={Schema}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        setSubmitting(true);
        const mergeValues = {
          ...values,
          template: templateData,
        };

        const res = await setCompleteProfile(mergeValues);

        if (res.status === 'error') {
          res.message.forEach((value: string) => {
            setFieldError(
              value.substring(value.indexOf('[') + 1, value.lastIndexOf(']')),
              value.substr(value.indexOf(':') + 1),
            );
          });
        } else {
          toast.success('Registration is successful');
          router.push(ROUTE_HOME);
        }
        setSubmitting(false);
      }}
    >
      {
        (formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputGroup
              type="text"
              label="Web URL"
              id="weburl"
              groupText={`${String(process.env.NEXT_PUBLIC_BASE_URL)}/`}
              placeholder="your-url"
              required
              {...formik.getFieldProps('web_url')}
            />
            <ErrorInput formik={formik} field="web_url" />
            <Input
              type="text"
              label="Groom Fullname"
              id="groom_fullname"
              required
              placeholder="ex: Alex Aricson"
              {...formik.getFieldProps('groom_fullname')}
            />
            <ErrorInput formik={formik} field="groom_fullname" />
            <Input
              type="text"
              label="Bride Fullname"
              id="bride_fullname"
              placeholder="ex: Amanda Dinda"
              required
              {...formik.getFieldProps('bride_fullname')}
            />
            <ErrorInput formik={formik} field="bride_fullname" />

            <Button
              text="Complete"
              color="pink"
              block
              typeSubmit
              css={tw`px-3.5 py-2.5 mt-3`}
              isLoading={formik.isSubmitting}
            />
          </form>
        )
      }
    </Formik>
  );
}
