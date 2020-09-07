import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getStreams } from "api/streams";
import { addSizeToImg } from "utils/addSizeToImg";

const Streams = ({ isMobile }) => {
  const [streams, setStreams] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    const streams = await getStreams(id);
    setStreams(streams);
  };

  return (
    <div className="streamsContainer">
      {streams.map((stream) => {
        return (
          <div key={stream.id} className="stream">
            <img
              src={addSizeToImg(stream.thumbnail_url, isMobile, "streams")}
            />
            <p>{stream.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Streams;
