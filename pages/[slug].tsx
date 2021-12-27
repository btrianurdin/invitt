import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { IInvitationData, IWeddingDateData } from '../interfaces';
import { getInvitationPublic } from '../services/invitation';
import TemplateComponents from '../templates';
import { weddingDateDummy } from '../constants/dummy-data';
import { getWeddingDatePublic } from '../services/wedding-dates';

interface InvitationType extends IInvitationData {
  template: string;
}

interface InvitationMainProps {
  invitation: InvitationType;
  weddingDates: IWeddingDateData[];
}

export default function InvitationMain({
  invitation,
  weddingDates,
}: InvitationMainProps): JSX.Element {
  const props = { invitation, weddingDates };
  console.log(weddingDates);

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

  return {
    props: {
      invitation: res,
      weddingDates: resWeddingDates,
    },
  };
};
