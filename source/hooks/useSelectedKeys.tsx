import { DispatchSelectKeysContext, SelectKeysContext } from "@source/context";
import React, { Key, ReactNode, useContext, useEffect, useState } from "react";

export function SelectKeysProvider({
  children,
  defaultKeys,
  userSelectedKeys,
}: {
  children: ReactNode;
  defaultKeys: Key[];
  userSelectedKeys?: Key[];
}) {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>(
    userSelectedKeys || defaultKeys
  );

  useEffect(() => {
    userSelectedKeys && setSelectedKeys(userSelectedKeys);
  }, [userSelectedKeys]);

  return (
    <SelectKeysContext.Provider value={selectedKeys}>
      <DispatchSelectKeysContext.Provider
        value={userSelectedKeys ? () => {} : setSelectedKeys}
      >
        {children}
      </DispatchSelectKeysContext.Provider>
    </SelectKeysContext.Provider>
  );
}

function useSelectedKeys() {
  return useContext(SelectKeysContext);
}

function useDispatchSelectedKeys() {
  return useContext(DispatchSelectKeysContext);
}

export { useSelectedKeys, useDispatchSelectedKeys };
