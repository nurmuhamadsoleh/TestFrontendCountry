import DetailCountryContainer from "module/DetailCountry/Container/DetailCountryContainer";
import React from "react";
import { useRouter } from "next/router";

export default function Detailcountry() {
  const router = useRouter()
  return <DetailCountryContainer region={router.query.common as string}/>;
}
