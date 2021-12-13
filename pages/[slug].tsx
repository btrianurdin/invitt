import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { IInvitationData, IWeddingDateData } from '../interfaces';
import { getInvitationPublic, getWeddingDatePublic } from '../services/invitation';
import TemplateComponents from '../templates';
import { weddingDateDummy } from '../constants/dummy-data';

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

  const res = await getInvitationPublic(Array.isArray(slug) ? slug[0] : slug);
  if (res?.status === 'error') return { notFound: true };

  let weddingDates: IWeddingDateData[] = [];
  const resWeddingDates = await getWeddingDatePublic(slug[0]);
  if (resWeddingDates.status === 'error') weddingDates = weddingDateDummy;

  return {
    props: {
      invitation: res,
      weddingDates,
    },
  };
};
