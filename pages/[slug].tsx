import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { IGalleryData, IInvitationData, IWeddingDateData } from '../interfaces';
import { getInvitationPublic } from '../services/invitation';
import TemplateComponents from '../templates';
import { getWeddingDatePublic } from '../services/wedding-dates';
import { getGalleryPublic } from '../services/gallery';

interface InvitationType extends IInvitationData {
  template: string;
}

interface InvitationMainProps {
  invitation: InvitationType;
  weddingDates: IWeddingDateData[];
  galleries: IGalleryData[];
}

export default function InvitationMain({
  invitation,
  weddingDates,
  galleries,
}: InvitationMainProps): JSX.Element {
  const props = { invitation, weddingDates, galleries };

  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
      </Head>
      {React.createElement(TemplateComponents[(invitation.template as any)], props)}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { slug } = req.query;

  if (!slug) return { notFound: true };

  const getSlug = Array.isArray(slug) ? slug[0] : slug;

  const res = await getInvitationPublic(getSlug);
  if (res?.status === 'error') return { notFound: true };

  const resWeddingDates = await getWeddingDatePublic(getSlug);
  const resGalleries = await getGalleryPublic(getSlug);

  return {
    props: {
      invitation: res,
      weddingDates: resWeddingDates,
      galleries: resGalleries,
    },
  };
};
