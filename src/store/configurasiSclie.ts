

export interface ICountry {
    country?: any[]
    setCountry?: (_params: any) => void
    setClearCountry?: (_params:any) => void
}
const initialState = {}
const createCountry = (set:any, _get: any) => <ICountry>{
    ...initialState,
    setCountry: (params:any) => {
        set((prevState:any) => ({ 
        country: [...(prevState?.country || []), params] 
        }));
    },
    setClearCountry: (values:any) => {
    set((prevState:any) => ({ country: prevState.country.filter((item:any) => !values.includes(item)) }));
    },
}
export default createCountry