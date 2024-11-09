"use client"
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

interface Props {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <Tilt className="shadow-lg mx-auto p-5 rounded-xl bg-[#814ced] h-52 w-64 text-center transform transition-transform hover:scale-105">
      <div className="flex justify-center">
        <Image
          src={service.icon}
          alt={service.title}
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      <h1 className="mt-4 text-lg font-semibold text-white">{service.title}</h1>
      <p className="mt-2 text-sm text-white text-opacity-80">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
