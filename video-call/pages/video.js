import React, { useState } from "react";
import Script from "next/script";
import { Jutsu } from "react-jutsu";

const video = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Jutsu
          roomName="corporate_zone"
          displayName="morsalin Kausar"
          password="jamalpur247"
          onMeetingEnd={() => console.log("Meeting has ended")}
          loadingComponent={<p>loading ...</p>}
          errorComponent={<p>Oops, something went wrong</p>}
        />
      </div>
      <body>
        <Script src="https://meet.jit.si/external_api.js"></Script>
      </body>
    </>
  );
};

export default video;
