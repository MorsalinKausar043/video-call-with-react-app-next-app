import { JitsiMeeting, JaaSMeeting } from "@jitsi/react-sdk";

const call = () => {
  return (
    <>
      <JaaSMeeting
        roomName={"kausar"}
        getIFrameRef={(node) => (node.style.height = "800px")}
        APP_NAME="corporatezone"
        AUDIO_LEVEL_PRIMARY_COLOR="rgba(255,255,255,0.4)"
        AUDIO_LEVEL_SECONDARY_COLOR="rgba(255,255,255,0.2)"
        DEFAULT_WELCOME_PAGE_LOGO_URL="https://i.ibb.co/fkJ601y/kaudar-logo.png"
        DEFAULT_LOGO_URL="https://i.ibb.co/fkJ601y/kaudar-logo.png"
      />
    </>
  );
};

export default call;