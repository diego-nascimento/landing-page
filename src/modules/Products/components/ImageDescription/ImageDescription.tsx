import React, { useState } from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { ShowVideo } from '../showVideo';

interface Props {
  image: string;
  videoUrl?: string;
  video?: boolean;
}

export const ImageDescription = ({ image, video = false, videoUrl }: Props) => {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      {showVideo && videoUrl && (
        <ShowVideo video={videoUrl} closeVideo={closeVideo} />
      )}
      <aside className="p-10 relative select-none">
        {video && videoUrl && (
          <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center ">
            <div
              className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white flex justify-center items-center border-8 border-black/20 hover:border-white hover:scale-110 transition-all duration-500 shadow-2xl  cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <GrPlayFill size={36} />
            </div>
          </div>
        )}

        <img src={image} alt={image} />
      </aside>
    </>
  );
};
