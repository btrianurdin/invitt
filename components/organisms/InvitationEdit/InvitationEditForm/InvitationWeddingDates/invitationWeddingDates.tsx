import { useAtom } from 'jotai';
import { useState } from 'react';
import tw from 'twin.macro';
import { IWeddingDateData } from '../../../../../interfaces';
import { setWeddingDate } from '../../../../../services/wedding-dates';
import { weddingDateAtom } from '../../../../../store';
import Button from '../../../../atoms/Button';
import Input from '../../../../atoms/Input';
import TextArea from '../../../../atoms/TextArea';
import ActiveDate from './ActiveDate';

export default function InvitationWeddingDates(): JSX.Element {
  const [weddingDates, setWeddingDates] = useAtom(weddingDateAtom);
  const [showDate, setShowDate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [wDates, setWDates] = useState<IWeddingDateData>({
    title: '',
    place_name: '',
    date: '',
    map_link: '',
    location: '',
  });
  let weddingDatesShow: any;

  const inputHandleChange = (e: any) => {
    setWDates({ ...wDates, [e.target.id]: e.target.value });
  };

  const saveDateHandle = async () => {
    setLoading(true);
    const res = await setWeddingDate(wDates);
    setWeddingDates([...weddingDates!, res]);
    setShowDate(true);
    setLoading(false);
  };

  if (weddingDates?.length === 0) {
    weddingDatesShow = (
      <div tw="text-center mt-5">
        There is no wedding date
      </div>
    );
  } else {
    weddingDatesShow = <ActiveDate />;
  }

  return (
    <div css={tw`my-5`}>
      {
        (weddingDates && weddingDates?.length >= 2) ? ''
          : (
            <Button
              text={showDate ? 'Add Date' : 'Cancel'}
              color={showDate ? 'success' : 'purple'}
              block
              onClick={() => setShowDate(!showDate)}
            />

          )
      }
      {
        showDate ? weddingDatesShow : (
          <form>
            <Input
              label="Title"
              id="title"
              placeholder="ex: Akad Nikah"
              value={wDates.title}
              onChange={inputHandleChange}
            />
            <Input
              label="Place Name"
              id="place_name"
              placeholder="ex: Gedung Pernikahan"
              value={wDates.place_name}
              onChange={inputHandleChange}
            />
            <Input
              type="datetime-local"
              label="Date"
              id="date"
              placeholder="ex: Gedung Pernikahan"
              value={wDates.date}
              onChange={inputHandleChange}
            />
            <TextArea
              label="Location"
              id="location"
              placeholder="Wedding location"
              value={wDates.location}
              onChange={inputHandleChange}
            />
            <Input
              type="text"
              label="Maps Link"
              id="map_link"
              placeholder="ex: https://goo.gl/maps/hduaAPfN36rzGXSa9"
              value={wDates.map_link}
              onChange={inputHandleChange}
            />
            <Button
              text="Save"
              color="pink"
              block
              tw="my-3"
              isLoading={loading}
              disabled={loading}
              onClick={saveDateHandle}
            />
          </form>
        )
      }
    </div>
  );
}
