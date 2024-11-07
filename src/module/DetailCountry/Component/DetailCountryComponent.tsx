import { Button, Skeleton, Space } from "antd";
import Store, { IStore } from 'store'

import { ArrowLeftOutlined } from "@ant-design/icons";
import {
GlobalOutlined
} from '@ant-design/icons'
import Image from "next/image";
import NoImage from "assets/images/noimage.jpg"
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IProps {
  isLoadingDetailCountry: boolean;
  initialDetailCountry?: any;
}
export default function DetailCountryComponent(props: IProps) {
    const {setCountry, country }: IStore = Store()
  const {initialDetailCountry, isLoadingDetailCountry} = props;
  const router = useRouter();
  return (
    <div className="flex justify-center my-2">
      <div className="p-2 border-2 border-solid border-black w-full md:w-1/2 rounded-md">
      <Button
        size="middle"
        className="text-white font-normal bg-[#8362F2] ml-4 md:ml-0"
        onClick={() => router.replace("/")}
      >
        <ArrowLeftOutlined className="font-bold" />
        Back
      </Button>
      <div className="">
        {isLoadingDetailCountry ? (
          <div className="bg-white w-full">
            <Skeleton active />
          </div>
        ): (
       <>
       <div className="w-full">
  <div className="flex flex-wrap md:flex-nowrap ml-4 gap-4">
    <div className="w-full md:w-1/2">
      <p className="font-bold text-[#8362F2] text-2xl">
        {initialDetailCountry?.region}
      </p>
      <div className="-mt-4 leading-none">
        <Image
          alt={initialDetailCountry?.flags?.alt 
          || "No Image"}
          src={initialDetailCountry?.flags?.png || NoImage}
          width={200}
          height={100}
        />
        <p className="leading-none">
          Deskripsi Bendera: {initialDetailCountry?.flag}
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 m -mt-6">
      <h1 className="font-medium text-lg leading-none">Languange:</h1>
      {initialDetailCountry &&
        Object.entries(initialDetailCountry?.languages).map(([key, value]: [string, any]) => (
          <ul className="list-none leading-none" key={key}>
            <li>
              <strong>{key}</strong>: {value as String}
            </li>
          </ul>
        ))}
      <div className="mt-4">
        <Space>
          <Button
            size="middle"
            className="text-white font-normal bg-[#62bbf2]"
            icon={
              <GlobalOutlined className="text-white text-lg hover:text-[#62bbf2]" />
            }
            onClick={() => {
              if (country && country.includes(initialDetailCountry.region)) {
                toast.info("Region sudah ada di daftar kerja sama");
                } else {
                setCountry && setCountry(initialDetailCountry.region);
                  toast.success("Berhasil Melakukan Kerja Sama");
                }
            }}
          >
            Kerja Sama
          </Button>
          <Button
            size="middle"
            className="text-white font-normal bg-[#62bbf2]"
            onClick={() => router.push(`/cooperation`)}
          >
            Daftar Kerja Sama
          </Button>
        </Space>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap md:flex-nowrap px-4 gap-4 mt-4">
    <div className="w-full md:w-1/2">
      <span className="text-sm font-medium">Mata Uang</span>
      {initialDetailCountry &&
        Object.entries(initialDetailCountry?.currencies).map(([key, value]: [string, any]) => (
          <h1
            className="font-bold text-[#8362F2] text-5xl mt-1 mb-1"
            key={key}
          >
            {value?.symbol}
          </h1>
        ))}
      <span className="text-sm font-medium">Lambang Negara</span>
      <div className="mt-2">
        <Image
          alt={"Negara"}
          src={initialDetailCountry?.coatOfArms?.png || NoImage}
          width={100}
          height={100}
        />
      </div>
      <span className="text-sm">
        Ibu Kota Negara{" "}
        <strong>
          {initialDetailCountry?.capital && initialDetailCountry?.capital[0]}
        </strong>
      </span>
    </div>
    <div className="w-full md:w-1/2">
      <span className="text-sm font-medium">Populasi</span>
      <p className="font-bold text-[#8362F2] text-5xl mt-1 mb-1">
        {initialDetailCountry?.population}
      </p>
      <div>
        <span className="text-sm font-medium">Maps/Lokasi</span>
        <div className="mt-2">
          <iframe
            src={initialDetailCountry?.maps?.googleMaps}
            width="100%"
            height="100px"
            allow="geolocation"
            sandbox="allow-scripts"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <span className="text-sm">
          Negara <strong>{initialDetailCountry?.region}</strong> Independent{" "}
          <strong>
            {initialDetailCountry?.independent ? "Yes" : "No"}
          </strong>
        </span>
      </div>
    </div>
  </div>
</div>

    </>
      )}
      </div>
    </div>
  </div>
  );
}
