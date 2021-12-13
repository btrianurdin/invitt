import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import { removeWeddingDate } from '../../../../../services/wedding-dates';
import { weddingDateAtom } from '../../../../../store';
import Button from '../../../../atoms/Button';

export default function ActiveDate(): JSX.Element {
  const [weddingDates, setWeddingDates] = useAtom(weddingDateAtom);
  const [loading, setLoading] = useState(false);

  const deleteHandler = async (id: any, i: number) => {
    setLoading(true);
    const res = await removeWeddingDate(id);

    if (!res.status) {
      const temp: any = [...weddingDates!];
      temp.splice(i, 1);
      setWeddingDates(temp);
    } else {
      toast.error('failed remove date');
    }
    setLoading(false);
  };

  return (
    <div css={tw`mt-5`}>
      {
        weddingDates
        && weddingDates?.map((w, i) => (
          <div tw="my-5" key={`${w.title}-${i + 1}`}>
            <h3 tw="text-xl border-b pb-2 text-pink-600">
              Date
              {' '}
              {i + 1}
            </h3>
            <div tw="my-2">
              <h4 tw="font-medium">Title</h4>
              <h5 tw="font-light">{w.title}</h5>
            </div>
            <div tw="my-2">
              <h4 tw="font-medium">Place Name</h4>
              <h5 tw="font-light">{w.place_name}</h5>
            </div>
            <div tw="my-2">
              <h4 tw="font-medium">Date</h4>
              <h5 tw="font-light">{w.date}</h5>
            </div>
            <div tw="my-2">
              <h4 tw="font-medium">Location</h4>
              <h5 tw="font-light">{w.location}</h5>
            </div>
            <div tw="my-2">
              <Button
                text="Delete"
                color="danger"
                block
                onClick={() => deleteHandler(w._id, i)}
                isLoading={loading}
                disabled={loading}
              />
            </div>
          </div>
        ))
      }
    </div>
  );
}
