import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const WebSocketComponent = () => {
  const [connected, setConnected] = useState(false);
  const stompClient = useRef(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:5175/ws");
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      setConnected(true);
      // Connection established, you can send messages here
      console.log("Connected");
    });

    return () => {
      if (connected) {
        stompClient.current.disconnect(() => {
          console.log("Disconnected");
        });
      }
    };
  }, [connected]);

  // useEffect(() => {
  //   const client = Stomp.over(() => new WebSocket("ws://localhost:5175/ws"));
  //   client.connect(
  //     {},
  //     (frame) => {
  //       console.log("Connected: " + frame);
  //     },
  //     (error) => {
  //       console.log("Error: " + error);
  //     }
  //   );
  // }, []);

  // const sendMessage = () => {
  //   if (connected) {
  //     stompClient.current.send(
  //       "/your/destination",
  //       {},
  //       JSON.stringify({ message: "Hello World" })
  //     );
  //   } else {
  //     console.error("Connection not established yet");
  //   }
  // };

  return (
    <div>
      <button>Send Message</button>
    </div>
  );
};

export default WebSocketComponent;
