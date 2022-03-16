import React, { useState } from "react";
import Script from "next/script";

import { Jutsu } from "react-jutsu";

const App = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Jutsu
        roomName={room}
        displayName={name}
        password={password}
        onMeetingEnd={() => console.log("Meeting has ended")}
        loadingComponent={<p>loading ...</p>}
        errorComponent={<p>Oops, something went wrong</p>}
        
      />
    </div>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div>
          <h1>corporateZone Meeting system!</h1>
        </div>
        <form>
          <input
            id="room"
            type="text"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="password"
            type="text"
            placeholder="Password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} type="submit">
            Start / Join
          </button>
        </form>
        <body>
          <Script src="https://meet.jit.si/external_api.js"></Script>
        </body>
      </div>
    </>
  );
};

export default App;
