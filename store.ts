import { atom } from 'jotai';
import { invitationDummy, weddingDateDummy } from './constants/dummy-data';
import { IInvitationData, IWeddingDateData } from './interfaces';
import { getInvitation } from './services/invitation';

export const invitationAtom = atom<IInvitationData | null>(invitationDummy);

export const weddingDateAtom = atom<IWeddingDateData[]>(weddingDateDummy);
