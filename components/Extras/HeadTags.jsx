import Head from "next/head";

const HeadTags = ({ title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="داشبورد ادمين" />
        <meta name="keywords" content="samsung apple huawei xiaomi" />
        <title>{`${title} - داشبورد`}</title>
      </Head>
    </>
  );
};

export default HeadTags;
