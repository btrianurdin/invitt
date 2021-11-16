import { createContext, useContext } from 'react';

const InvitationDispatch = createContext(null);

export const useInvitationDispatch = (): any => useContext(InvitationDispatch);

export default InvitationDispatch;
