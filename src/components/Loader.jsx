import React from "react";
import { Stack } from "@mui/material";
import { InfintySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <InfintySpin color="gray" />
    </Stack>
  );
};

export default Loader;
