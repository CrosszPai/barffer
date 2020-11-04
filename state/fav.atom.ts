import { atom } from 'recoil'

export const favListState = atom({
    key: 'favList',
    default: new Set() as Set<string>,
})