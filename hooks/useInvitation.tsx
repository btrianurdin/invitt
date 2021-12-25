import { useCallback, useEffect, useState } from 'react';
import { galleryDummy, weddingDateDummy } from '../constants/dummy-data';
import { IGalleryData, IInvitationData, IUseInvitation, IWeddingDateData } from '../interfaces';
import { getGallery, getInvitation } from '../services/invitation';
import { getWeddingDate } from '../services/wedding-dates';

export default function useInvitation(): IUseInvitation {
  const [invitation, setInvitation] = useState<IInvitationData | null>(null);
  const [weddingDates, setWeddingDates] = useState<IWeddingDateData[] | null>(null);
  const [galleries, setGalleries] = useState<IGalleryData[] | null>(null);

  const getInvitationData = useCallback(async () => {
    const res = await getInvitation();
    setInvitation(res);
  }, []);

  const getWeddingDates= useCallback(async () => {
    const res = await getWeddingDate();
    
    if (res?.status !== 'error') setWeddingDates(res);
  }, []);

  const Getgalleries = useCallback(async () => {
    const res = await getGallery();
    
    if (res?.status !== 'error') setGalleries(res);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getInvitationData();
      getWeddingDates();
      Getgalleries();
    }, 2000);
  }, []);
  

  // const { data: inv, error: invError } = useSWR(`/api${ROUTE_INVITATION_SHOW}`, fetcherAuthGet);
  // const { data: wdate, error: wdateError } = useSWR(`/api${ROUTE_WEDDINGDATE_SHOW}`, fetcherAuthGet);

  // const isLoading = (!inv && !invError) && (!wdate && !wdateError);

  return {
    isLoading: !invitation && !weddingDates && !galleries,
    invitation: invitation,
    weddingDate: weddingDates,
    gallery: galleries,
  };
}
