import DetailCountryComponent from "../Component/DetailCountryComponent";
import { GetDetailCityAPI } from "service/city.api";
import React from "react";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  region?: string
}
export default function DetailCountryContainer(props: IProps) {
  const {region} = props
    const { data: dataregion, isFetching: isFetchingDataCity } = useQuery(
    ["Get List City", region],
    GetDetailCityAPI
  );
  return <DetailCountryComponent initialDetailCountry={dataregion && dataregion[0]} isLoadingDetailCountry={isFetchingDataCity}/>;
}
