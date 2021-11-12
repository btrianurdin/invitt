import tw from 'twin.macro';
import Input from '../../atoms/Input';

export default function EditPassword(): JSX.Element {
  return (
    <div>
      <h1 tw="text-xl font-medium pb-1.5 border-b border-pink-400 inline-block">Change Password</h1>
      <div>
        <form>
          <Input label="New Password" />
          <Input label="Email" disabled />
          <Input label="Phone Number" />
        </form>
      </div>
    </div>
  );
}
