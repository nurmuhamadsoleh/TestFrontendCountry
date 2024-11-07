import {
  ArrowLeftOutlined,
  CloseOutlined
} from '@ant-design/icons'
import Store, { IStore } from 'store'

import { Button } from 'antd'
import React from 'react'
import { useRouter } from 'next/router'

export default function DetailCooperationComponent() {
    const router = useRouter()
    const {country, setClearCountry }: IStore = Store()
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='border-2 border-solid border-black rounded-md p-2 w-full'>
            <Button
            size="middle"
            className="text-white font-normal bg-[#8362F2]"
            onClick={() => router.push("/")}>
            <ArrowLeftOutlined className="font-bold" />
            Back
            </Button>
            <div className="mt-2">
            <h1 className="font-medium text-xl text-left mb-4">
              Negara Yang Melakukan Kerja Sama :
            </h1>
            {country?.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span className="text-left capitalize text-lg font-medium">{item}</span>
                <Button
                  size="middle"
                  className="text-white bg-red-800 hover:bg-red-400"
                  icon={
                    <CloseOutlined className="text-white hover:text-red-800 text-lg" onClick={() => setClearCountry && setClearCountry(country.filter((c) => c === item))}/>
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
