import { atom } from 'jotai';
import { invitationDummy } from './constants/dummy-data';
import { IInvitationData, IWeddingDateData } from './interfaces';

export const invitationAtom = atom<IInvitationData | null>(invitationDummy);

export const weddingDateAtom = atom<IWeddingDateData[] | null>(null);
