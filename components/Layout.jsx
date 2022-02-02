import Head from 'next/head'

const Layout = ({children, title, description}) => {
  return(
      <div>
        <Head>
            <title>{title}</title>
            <meta 
            name="description" 
            description={description} />
        </Head>
          <nav>
              navbar
          </nav>
          <main>
              {children}
          </main>
          <footer>
              footer
          </footer>
      </div>
  );
};

export default Layout;
