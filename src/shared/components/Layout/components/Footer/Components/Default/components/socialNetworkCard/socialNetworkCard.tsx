import Link from 'next/link';
import React, { useMemo } from 'react';
import { socialNetworkTypes } from '../../../../Container/types';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

interface Props extends socialNetworkTypes {}

export const SocialNetworkCard = (data: Props) => {
  return (
    <Link href={data.url}>
      <Content {...data} />
    </Link>
  );
};

export const Content = (data: Props) => {
  const handleIcon = () => {
    switch (data.card) {
      case 'youtube':
        return <FaYoutube size={30} color="#FF0000" />;
      case 'twitter':
        return <FaTwitter size={30} color="#1DA1F2" />;
      case 'linkedin':
        return <FaLinkedinIn size={30} color="#0e76a8" />;
      case 'instagram':
        return <FaInstagram size={30} color="#C13584" />;
      default:
        return <FaFacebookF size={30} color="#4267B2" />;
    }
  };

  const numberOfFollows = useMemo(() => {
    if (!!!data.numberOfFollows) return '';
    if (data.numberOfFollows >= 10000) {
      return `${(data.numberOfFollows / 1000).toFixed()}K`;
    }

    return `${data.numberOfFollows?.toString()}`;
  }, [data.numberOfFollows]);
  return (
    <li className="px-2 flex justify-center sm:justify-start hover:scale-105 transition-transform duration-500 bg-white">
      <div className="w-full  py-5 flex flex-col justify-center items-center  shadow-xl rounded-lg">
        {handleIcon()}
        {data.numberOfFollows && (
          <span className="text-black  font-medium pt-2">
            {numberOfFollows}
          </span>
        )}
        <span className="text-gray-400">Followers</span>
      </div>
    </li>
  );
};
