import React from "react";

import Layout from "../components/dashboard/layout";
import QrCodeGenerator from "../components/dashboard/components/QrCodeGenerator";

export default function GenerateQrCode() {
  return (
    <Layout>
      <QrCodeGenerator />
    </Layout>
  );
}
