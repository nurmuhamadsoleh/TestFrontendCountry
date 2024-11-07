import React, { useState } from "react";

import DashboardComponent from "../Component/DashboardComponent";
import DetailCountryContainer from "module/DetailCountry/Container/DetailCountryContainer";
import { GetCityAPI } from "service/city.api";
import { useQuery } from "@tanstack/react-query";

export default function DasboardContainer() {
  const [searchCountry, setSearchCountry] = useState<string>("");

  const { data: data, isFetching: isFetchingDataCity } = useQuery(
    ["Get List City", searchCountry],
    GetCityAPI
  );
  const handleSubmit = (value: any) => {
    if(value){
      setSearchCountry(value.SEARCH || "")
    }else{
      setSearchCountry("")
    }
  }
  return (
    <>
      <DashboardComponent
      setSearchCountry={setSearchCountry}
        isLoadingCity={isFetchingDataCity}
        Country={data}
        handleSubmit={handleSubmit}
      />
     <DetailCountryContainer/>
    </>
  );
}
