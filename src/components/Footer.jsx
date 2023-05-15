import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {

    const avatarImg = "https://media.licdn.com/dms/image/C4D03AQG5kfV1Z2gbDA/profile-displayphoto-shrink_400_400/0/1653312889628?e=1689811200&v=beta&t=n6RH-oTJtWPhtu7xa81soyRiG33MJ3__dNek28hwl28"

    return(
        <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16", "8"]}>
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} >
                <VStack w={"full"} alignItems={["center", "flex-start"]} >
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>
                        Best Cryto Trading App in India, Our guidance at reasonable price.
                    </Text>
                </VStack>
                <VStack>
                    <Avatar src={avatarImg} boxSize={"28"} mt={["4", "0"]} />
                    <Text>Sahil Thakur</Text>
                </VStack>
            </Stack>
        </Box>
    )
}
export default Footer;