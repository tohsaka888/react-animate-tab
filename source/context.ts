import { createContext, Dispatch, Key, SetStateAction } from "react";

export const SelectKeysContext = createContext<Key[]>([]);
export const DispatchSelectKeysContext = createContext<
  Dispatch<SetStateAction<Key[]>>
>(null!);
