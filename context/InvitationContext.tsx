import { createContext, useContext } from 'react';
import { galleryDummy, invitationDummy, weddingDateDummy } from '../constants/dummy-data';
import useInvitation from '../hooks/useInvitation';
import { IGalleryData, IInvitationData, IWeddingDateData } from '../interfaces';

export interface IInvitationContext {
  isLoading: boolean;
  invitation: IInvitationData | null;
  weddingDate: Array<IWeddingDateData> | null;
  gallery: Array<IGalleryData> | null;
}

const InvitationContext = createContext<IInvitationContext>({
  isLoading: true,
  invitation: invitationDummy,
  weddingDate: weddingDateDummy,
  gallery: galleryDummy,
});

export const useInvitationContext = (): IInvitationContext => useContext(InvitationContext);

interface InvitationProviderProps {
  children: React.ReactNode;
}

export function InvitationProvider({ children }: InvitationProviderProps): JSX.Element {
  const {
    isLoading, invitation, weddingDate, gallery,
  } = useInvitation();

  return (
    <InvitationContext.Provider value={{
      isLoading,
      invitation,
      weddingDate,
      gallery,
    }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

export default InvitationContext;
