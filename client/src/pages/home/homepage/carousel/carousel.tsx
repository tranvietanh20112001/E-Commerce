import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { Box } from "@mui/material";
import banner1 from "../../../../assets/banner1.png";
import banner2 from "../../../../assets/banner2.png";
import banner3 from "../../../../assets/banner3.png";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "480px",
  lineHeight: "160px",
  background: "#364d79",
  width: "100%",
};

const App: React.FC = () => {
  return (
    <Carousel autoplay>
      <Box width={"100%"}>
        <Image src={banner1} style={contentStyle} preview={false} />
      </Box>
      <Box width={"100%"}>
        <Image src={banner2} style={contentStyle} preview={false} />
      </Box>
      <Box width={"100%"}>
        <Image src={banner3} style={contentStyle} preview={false} />
      </Box>
    </Carousel>
  );
};

export default App;
