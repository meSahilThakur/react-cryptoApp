import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  
  const homeImg = 
  //  "https://images.unsplash.com/photo-1629449711346-2ce4d83b94eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
   "https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png"

  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{ translateY: "20px" }}
        transition={{
          duration:1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={homeImg} />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={["-20", "-14"]}
      >
        Crypton
      </Text>
    </Box>
  );
};

export default Home;
