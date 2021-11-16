import {
  createContext, useContext, useReducer,
} from 'react';
import { galleryDummy, invitationDummy, weddingDateDummy } from '../constants/dummy-data';
import useInvitation from '../hooks/useInvitation';
import { IGalleryData, IInvitationData, IWeddingDateData } from '../interfaces';
import InvitationDispatch from './InvitationDispatch';
import InvitationReducer from './reducers/InvitationReducer';

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
  const [inv, setInv] = useReducer(InvitationReducer, {
    isLoading,
    invitation,
    weddingDate,
    gallery,
  });

  return (
    <InvitationContext.Provider value={inv}>
      {children}
    </InvitationContext.Provider>
  );
}

export default InvitationContext;
