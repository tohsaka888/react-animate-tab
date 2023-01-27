import { CSSProperties, Key } from "react";

export type ItemProps = {
  name: string;
  id: Key;
  icon?: React.ReactNode;
};

export type TabItemProps = ItemProps & {
  itemSelectedStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  onSelect?: (id: Key, item: ItemProps) => void;
};

export type LineProps = {
  lineStyle?: CSSProperties;
};

export type TabProps = {
  items: ItemProps[];
  defaultSelectedKeys: Key[];
  style?: CSSProperties;
  selectedKeys?: Key[];
} & Pick<TabItemProps, "itemStyle" | "itemSelectedStyle" | "onSelect"> &
  LineProps;
