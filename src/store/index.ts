import createCountry, {ICountry} from "./configurasiSclie";
import {devtools, persist} from 'zustand/middleware'

import { create } from 'zustand'

export interface IStore extends ICountry {}
const store: any = persist((set:any, get:any) => <ICountry>{
        ...createCountry(set, get),
    },
    {
        name: 'country',
        partialize: (state:any) => ({
            country: state.country,
        }),
    }
)

const createStore: any = create(
    devtools<ICountry>(store, {
        name: 'country',
    })
)
export default createStore