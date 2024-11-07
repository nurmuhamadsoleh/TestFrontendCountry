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
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-2 border-solid border-black rounded-md w-auto max-h-[500px] overflow-y-auto">
          {/* Bagian Fixed */}
          <div className="p-4 bg-white sticky top-0 z-10 border-b">
            <Button
              size="middle"
              className="text-white font-normal bg-[#8362F2]"
              onClick={() => router.push("/")}
            >
              <ArrowLeftOutlined className="font-bold" />
              Back
            </Button>
            <h1 className="font-medium text-xl text-left mt-4">
              Negara Yang Melakukan Kerja Sama:
            </h1>
          </div>
          {/* Bagian Scrollable */}
          <div className="p-4 max-h-[400px]">
            {country?.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span className="text-left capitalize text-lg font-medium">
                  {item}
                </span>
                <Button
                  size="middle"
                  onClick={() =>
                    setClearCountry &&
                    setClearCountry(country.filter((c) => c === item))
                  }
                  className="text-white bg-red-800 hover:bg-red-400"
                  icon={
                    <CloseOutlined
                      className="text-white hover:text-red-800 text-lg"
                    />
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
