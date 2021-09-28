import { SelectHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const styles = {
  select: tw`w-full p-2.5 focus:(outline-none border-color[#FF6675]) text-black border-2 
    border-color[#fff] transition-colors duration-500 rounded-sm`,
  label: tw`inline-block font-medium mb-1`,
};

export default function Select(props: InputProps): JSX.Element {
  const { label, id } = props;
  return (
    <div tw="text-left font-family['Poppins'] my-3">
      <label htmlFor={id} css={styles.label}>{label}</label>
      <select {...props} id={id} css={styles.select}>
        <option disabled selected>Pilih Kehadiran</option>
        <option value="yes">Hadir</option>
        <option value="no">Tidak Hadir</option>
      </select>
    </div>
  );
}
