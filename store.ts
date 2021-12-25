import { atom } from 'jotai';
import { invitationDummy } from './constants/dummy-data';
import { IGalleryData, IInvitationData, IWeddingDateData } from './interfaces';

export const invitationAtom = atom<IInvitationData | null>(invitationDummy);

export const weddingDateAtom = atom<IWeddingDateData[] | null>(null);

export const weddingGalleryAtom = atom<IGalleryData[] | null>(null);
