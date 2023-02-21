import { DefaultSeo as DefaultNextSeo } from 'next-seo';

const DefaultSeo = () => {
  return (
    <>
      <DefaultNextSeo
        title="Next.js + Chakra UI"
        defaultTitle="%s | Next.js + Chakra UI"
        description="A Next.js + Chakra UI template"
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://next-chakra-template.vercel.app/',
          site_name: 'Next.js + Chakra UI',
        }}
      />
    </>
  );
};

export default DefaultSeo;
