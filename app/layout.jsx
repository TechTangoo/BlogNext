
import "@styles/globals.css"
import Provider from "@components/Provider";
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Place your head elements here (e.g., meta tags, title, styles, scripts) */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any other head elements as needed */}
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;