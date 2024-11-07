import axios from "axios";

export async function GetCityAPI(params: any) {
  const [// eslint-disable-next-line no-unused-vars
    _queryKey,filterValue] = params.queryKey || [];
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/v3.1/${filterValue === "" ? "all" : `name/${filterValue}`}`,
    params
  );
  return data;
}
export async function GetDetailCityAPI(params: any) {
  const [// eslint-disable-next-line no-unused-vars
    _queryKey,filterValue] = params.queryKey || [];
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/v3.1/name/${filterValue}`,
    params
  );
  return data;
}
