import { motion } from "framer-motion";
import React from "react";
import { SelectKeysProvider } from "./hooks/useSelectedKeys";
import TabItem from "./TabItem";
import { TabProps } from "./type";
import UnderLine from "./UnderLine";

function Tabs({
  items,
  defaultSelectedKeys,
  style,
  selectedKeys: userSelectedKeys,
  lineStyle,
  ...props
}: TabProps) {
  return (
    <SelectKeysProvider
      defaultKeys={defaultSelectedKeys}
      userSelectedKeys={userSelectedKeys}
    >
      <motion.div
        initial={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          ...(style as any),
        }}
        style={style}
        id={"tab-container"}
      >
        {items.map((item) => {
          return <TabItem {...item} {...props} key={item.id} />;
        })}
        <UnderLine lineStyle={lineStyle} />
      </motion.div>
    </SelectKeysProvider>
  );
}

export default Tabs;
