"use client";

import React from "react";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";
import scanResultAction from "@/actions/scanResultAction";

const page = (props) => {
  return (
    <div className="w-1/2">
      <Html5QrcodePlugin
        fps={1}
        qrbox={120}
        disableFlip={false}
        supportedScanTypes={true}
        aspectRatio={1.333334}
        qrCodeSuccessCallback={scanResultAction}
      />
    </div>
  );
};

export default page;
