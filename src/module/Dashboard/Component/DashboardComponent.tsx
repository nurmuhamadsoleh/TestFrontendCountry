import {
  ArrowRightOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { Button, Form as FormANTD, Skeleton } from "antd";
import { Field, Form } from 'react-final-form'

import Image from "next/image";
import Input from 'component/Input';
import React from "react";
import { useRouter } from "next/router";

interface IProps {
  Country?: any;
  isLoadingCity: boolean
  handleSubmit: (_value: any) => void
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>
}
export default function DashboardComponent(props: IProps) {
  const { Country, isLoadingCity, handleSubmit, setSearchCountry } =
    props;
  const router = useRouter()
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2">
        <div className="fixed top-1 md:mx-auto  w-full md:w-1/2 z-10 bg-[#ffffff]">
          <h1 className="text-2xl text-center font-bold ">Country</h1>
          <Form  onSubmit={handleSubmit} subscription={{ values: false }}>
          {(formProps) => {
          const { handleSubmit, dirty } = formProps;
          return (
          <FormANTD layout="horizontal" onFinish={handleSubmit} className="  mx-auto">
          <div className="flex flex-col md:flex-row gap-2 w-auto">
            <div className="w-full md:flex-1">
              <Field
                name="SEARCH"
                component={Input}
                isFormItem
                allowClear
                onChange={(e: any) => {
                  if(e.target.value.length < 1){
                    setSearchCountry("")
                  }
                }}
                autofocus
                placeholder="Search"
                showError={dirty}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-auto">
              <Button
                icon={<SearchOutlined className="text-lg text-white" />}
                htmlType="submit"
                onMouseEnter={()=>false}
                size="middle"
                className="bg-[#2d4fe7] w-full md:w-auto text-white"
              >
                Cari
              </Button>
            </div>
          </div>
          </FormANTD>
          );
          }}
          </Form>

        </div>
        <div className="mt-28 bg-white h-fit">
          {isLoadingCity ? (
            <div className="bg-white w-full">
              <Skeleton active />
            </div>
          ) : (
            <>
              {Country?.length >= 1
                ? Country.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex gap-2 justify-between border-solid border-black border-2 hover:bg-slate-200 p-2 md:mb-2"
                    >
                      <div className="flex basis-auto">
                      <Image
                        src={item?.flags.png}
                        alt={item?.flags.alt || "No Image"}
                        width={400}
                        height={200}
                        className="rounded-lg w-full h-auto max-w-full max-h-full object-contain custom:w-full custom:h-auto"
                      />
                      </div>
                      <div className="flex-wrap basis-auto">
                      <div><h1 className="text-2xl text-left font-medium">{item?.region}</h1></div>
                        <div className="-z-50">
                            <Button className="bg-blue-800 text-white rounded-md border-solid border-2 border-blue-400 " size="middle" icon={<ArrowRightOutlined className="text-white text-lg"/>} onClick={() => {
                               router.replace(`/${item?.name?.common}`)
                            }}>Detail Negara</Button>
                        </div>
                      </div>
                    </div>
                  ))
                : Country == undefined && (
                    <div className="font-bold text-red-600">Tidak ada data</div>
                  )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
