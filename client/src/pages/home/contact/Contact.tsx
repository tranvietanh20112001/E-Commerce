import { Box, Button, TextField, styled } from "@mui/material";
import { PhoneOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { Breadcrumb } from "antd";

const Title = styled(Typography)({
  fontWeight: "bold",
  margin: "0 12px",
  fontSize: "16px",
});

const { Text } = Typography;

const IconBackground = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "red",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const DivBackground = {
  boxShadow: 2,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "450px",
};

const Contact = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Contact",
          },
        ]}
      />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={"12px"}
      >
        <Box width={"30%"} sx={DivBackground}>
          <Box
            width="90%"
            display={"flex"}
            flexDirection={"column"}
            sx={{ gap: "12px" }}
          >
            <Box width={"100%"} display={"flex"} alignItems={"center"}>
              <Box sx={IconBackground}>
                <PhoneOutlined rotate={90} />
              </Box>
              <Title>Call To Us</Title>
            </Box>
            <Text>We are available 24/7, 7 days a week.</Text>
            <Text>+1 (123) 456-7890</Text>
            <Divider />
            <Box width={"100%"} display={"flex"} alignItems={"center"}>
              <Box sx={IconBackground}>
                <EmailIcon />
              </Box>
              <Title>Write To Us</Title>
            </Box>
            <Text>
              Fill out our form and we will contact you within 24 hours.
            </Text>
            <Text>Emails: customer@exclusive.com</Text>
          </Box>
        </Box>
        <Box width={"65%"} sx={DivBackground}>
          <Box
            width={"90%"}
            display={"flex"}
            flexDirection={"column"}
            sx={{ gap: "12px" }}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Your Phone"
                variant="outlined"
              />
            </Box>

            <Box width={"100%"}>
              <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={7}
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"end"}>
              <Button variant="contained" color="error">
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
