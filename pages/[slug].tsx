import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { IInvitationData } from '../interfaces';
import { getInvitationPublic } from '../services/invitation';
import TemplateComponents from '../templates';

interface InvitationType extends IInvitationData {
  template: string;
}

interface InvitationMainProps {
  invitation: InvitationType;
}

export default function InvitationMain({ invitation }: InvitationMainProps): JSX.Element {
  const props = { invitation };
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

  return {
    props: {
      invitation: res,
    },
  };
};
