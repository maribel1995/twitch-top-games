import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStreams } from "api/streams";
import { addSizeToImg } from "utils/addSizeToImg";
import { FakeCard } from "components/fakeCard";

const Streams = ({ isMobile }) => {
  const [streams, setStreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    const streams = await getStreams(id);
    setStreams(streams);
    setIsLoading(false);
  };

  const renderFakeCards = () => {
    return [...new Array(10)].map((el, i) => (
      <FakeCard key={i} isMobile={isMobile} page={"streams"} />
    ));
  };

  const renderStreams = () => {
    return streams.map((stream, i) => {
      return (
        <div key={stream.id} className="stream">
          <img
            src={addSizeToImg(stream.thumbnail_url, isMobile, "streams")}
            loading="lazy"
          />
          <p>{stream.title}</p>
        </div>
      );
    });
  };

  return (
    <div className="streamsContainer">
      {isLoading ? renderFakeCards() : renderStreams()}
    </div>
  );
};

export default Streams;
