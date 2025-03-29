"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
import Layout from "@/components/Layout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <Layout>{children}</Layout>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
