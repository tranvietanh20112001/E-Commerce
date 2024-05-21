import { Box } from "@mui/material";
import { Breadcrumb, Image } from "antd";
import { Typography } from "antd";
import banner4 from "../../../assets/banner4.jpg";
import StoreIcon from "@mui/icons-material/StorefrontOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMallOutlined";
import PaidIcon from "@mui/icons-material/PaidOutlined";
import CreditScoreIcon from "@mui/icons-material/CreditScoreOutlined";
const { Title, Text } = Typography;
const DivBackground = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "48px",
};

const Card = {
  width: "270px",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "4px",
};

const DivIconBackground = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: "gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const IconBackground = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const About = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "About",
          },
        ]}
      />
      <Box height={"600px"} sx={DivBackground}>
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"12px"}
        >
          <Title level={4}>Our Story</Title>
          <Text>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </Text>
          <Text>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Text>
        </Box>

        <Box width={"50%"} height={"100%"}>
          <Image src={banner4} preview={false} height={"100%"} width={"100%"} />
        </Box>
      </Box>

      <Box sx={DivBackground}>
        <Box sx={Card}>
          <Box sx={DivIconBackground}>
            <Box sx={IconBackground}>
              <StoreIcon fontSize="large" />
            </Box>
          </Box>
          <Title level={2}>10.5k</Title>
          <Text>Sallers active our site</Text>
        </Box>

        <Box sx={Card}>
          <Box sx={DivIconBackground}>
            <Box sx={IconBackground}>
              <PaidIcon fontSize="large" />
            </Box>
          </Box>
          <Title level={2}>33k</Title>
          <Text>Mopnthly Produduct Sale</Text>
        </Box>

        <Box sx={Card}>
          <Box sx={DivIconBackground}>
            <Box sx={IconBackground}>
              <LocalMallIcon fontSize="large" />
            </Box>
          </Box>
          <Title level={2}>45.5k</Title>
          <Text>Customer active in our site</Text>
        </Box>

        <Box sx={Card}>
          <Box sx={DivIconBackground}>
            <Box sx={IconBackground}>
              <CreditScoreIcon fontSize="large" />
            </Box>
          </Box>
          <Title level={2}>25k</Title>
          <Text>Anual gross sale in our site</Text>
        </Box>
      </Box>
    </>
  );
};
