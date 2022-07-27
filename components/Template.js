import Head from "next/head";

const Template = ({children , pages}) => {
  return (
    <div>
      <Head>
        <title>Keon - {pages}</title>
        <meta name="description" content="Pagina empresarial" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {children}
    </div>
  );
};

export default Template;
