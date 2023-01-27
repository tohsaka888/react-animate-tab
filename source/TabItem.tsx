import { motion } from "framer-motion";
import React, { useMemo } from "react";
import {
  useDispatchSelectedKeys,
  useSelectedKeys,
} from "./hooks/useSelectedKeys";
import { TabItemProps } from "./type";

function TabItem({
  name,
  itemSelectedStyle,
  itemStyle,
  id,
  onSelect,
  icon,
}: TabItemProps) {
  const selectedKeys = useSelectedKeys();
  const dispatch = useDispatchSelectedKeys();
  const isSelected = useMemo(
    () => selectedKeys.some((key) => key === id),
    [selectedKeys]
  );
  return (
    <motion.div
      animate={isSelected ? "selected" : "normal"}
      initial={{
        cursor: "pointer",
        userSelect: "none",
        height: "100%",
        display: "flex",
        alignItems: "center",
        ...(itemStyle as any),
      }}
      whileHover={"selected"}
      id={"tab-item-" + id}
      variants={{
        selected: {
          opacity: 1,
          color: "#1890ff",
          textShadow: "1px 1px 2px #dfdfdf",
          ...(itemSelectedStyle as any),
        },
        normal: {
          opacity: 1,
          color: "#000",
          ...(itemStyle as any),
        },
      }}
      onClick={() => {
        dispatch([id]);
        onSelect && onSelect(id, { name, id });
      }}
    >
      {icon}
      {name}
    </motion.div>
  );
}

export default TabItem;
