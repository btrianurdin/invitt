import { atom } from 'jotai';
import { invitationDummy, weddingDateDummy } from './constants/dummy-data';
import useInvitation from './hooks/useInvitation';
import { IInvitationData, IWeddingDateData } from './interfaces';
import { getInvitation } from './services/invitation';

export const invitationAtom = atom<IInvitationData | null>(invitationDummy);

export const getInvitationAtom = atom(async () => {
  const res = await getInvitation();

  return res;
});

export const weddingDateAtom = atom<IWeddingDateData[]>(weddingDateDummy);
