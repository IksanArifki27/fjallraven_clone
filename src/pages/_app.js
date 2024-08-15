import "@/styles/globals.css";
import "../styles/hamburgers.css";
import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
