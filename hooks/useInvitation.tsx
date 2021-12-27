import { useCallback, useEffect, useState } from 'react';
import { IGalleryData, IInvitationData, IUseInvitation, IWeddingDateData } from '../interfaces';
import { getGallery } from '../services/gallery';
import { getInvitation } from '../services/invitation';
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
    getInvitationData();
    getWeddingDates();
    Getgalleries();
  }, []);
  
  return {
    isLoading: !invitation && !weddingDates && !galleries,
    invitation: invitation,
    weddingDate: weddingDates,
    gallery: galleries,
  };
}
