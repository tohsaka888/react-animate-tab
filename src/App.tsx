import React, { Key, useState } from "react";
import "@/style/global.css";
import { Tabs } from "@source/index";

function App() {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
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
    </div>
  );
}

export default App;
