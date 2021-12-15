import type { NextPage } from "next";
import Head from "next/head";
import { HubSection } from "@app/modules/hub/hub.section";

const HubPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arbos - Hub</title>
      </Head>
      <HubSection />
    </div>
  );
};

export default HubPage;
