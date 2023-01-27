import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelectedKeys } from "./hooks/useSelectedKeys";
import { LineProps } from "./type";

function UnderLine({ lineStyle }: LineProps) {
  const selectedKeys = useSelectedKeys();
  const [movement, setMovement] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const selectedElement = document.getElementById(
      "tab-item-" + selectedKeys[0]
    );

    if (selectedElement) {
      setMovement({
        left: selectedElement.getBoundingClientRect().left,
        width: selectedElement.getBoundingClientRect().width,
      });
    }
  }, [selectedKeys]);

  if (selectedKeys.length === 1) {
    return (
      <motion.div
        initial={{
          height: "2px",
          background: "#1890ff",
          position: "absolute",
          bottom: "0px",
          ...(lineStyle as any),
        }}
        animate={{ ...(lineStyle as any), ...movement }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      />
    );
  } else {
    return <></>;
  }
}

export default UnderLine;
