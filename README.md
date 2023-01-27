# react-anime-tab

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/tohsaka888/create-react-swc-app/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## example

```tsx
import React, { Key, useState } from "react";
import "@/style/global.css";
import { Tabs } from "@source/index";

function App() {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  return (
    <Tabs
      items={new Array(10).fill(null).map((_, idx) => ({
        name: "item" + idx,
        id: "item" + idx,
        icon: <div style={{ marginRight: "8px" }}>1</div>,
      }))}
      defaultSelectedKeys={["item0"]}
      style={{ height: "60px" }}
      itemStyle={{ padding: "0px 12px" }}
      itemSelectedStyle={{ padding: "0px 12px", color: "red" }}
      lineStyle={{ background: "red" }}
      // selectedKeys={selectedKeys}
      // onSelect={(id, item) => {
      //   setSelectedKeys([...selectedKeys, id]);
      // }}
    />
  );
}

export default App;
```
