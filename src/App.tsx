/**
 * copy this file to your working directory.
 */
import React from "react";
import { Table } from "antd";
import { useVT } from "virtualizedtableforantd4";
import "antd/dist/antd.css";

export default function App(props: any) {
  const y = 500;
  const [vt] = useVT(() => {
    return {
      scroll: { y },
      debug: true
    };
  });

  const columns = [
    {
      title: "field1",
      dataIndex: "field1"
    },
    {
      title: "field2",
      dataIndex: "field2"
    }
  ];

  const dataSource = Array.from({ length: 1000 }).map((item, index) => ({
    key: index,
    field1: `field1.${index}`,
    field2: `field2.${index}`,
    children: Array.from({ length: 100 }).map((cItem, cIndex) => ({
      key: `${index}${cIndex}`,
      field1: `child.${index}.field1.${cIndex}`,
      field2: `child.${index}.field2.${cIndex}`
    }))
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      rowSelection={{}}
      components={vt}
      scroll={{ y, x: 400 }}
    />
  );
}
