import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  video: string;
  closeVideo: () => void;
}

export const ShowVideo = ({ video, closeVideo }: Props) => {
  return (
    <div
      className="fixed left-0 top-0 w-full h-full flex justify-center items-center z-20 bg-black/70 overflow-hidden"
      onClick={closeVideo}
    >
      <div className="relative flex justify-center items-center md:full md:pb-0 md:h-auto  w-full pb-[56.25%] h-0">
        <div className="md:relative">
          <AiOutlineClose
            color="white"
            size={24}
            className="absolute -right-0 -top-6 cursor-pointer"
            onClick={closeVideo}
          />
          <iframe
            width="750"
            height="425"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="shadow-2xl md:relative absolute md:w-[750px] sm:h-[425px] top-0 left-0 w-full h-64"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
