"use client";

import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFFFFF0A",
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 16,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
);

export default withTheme;
