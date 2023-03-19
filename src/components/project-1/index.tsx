import { Section } from "../ui/section"
import { Text,Flex } from "@chakra-ui/react"
import Rellax from "rellax";
import { useEffect } from "react";

export const Project1 = () => {
    useEffect(() => {
        new Rellax(".text", { 
          speed: 10,
        });
        new Rellax(".clouds", {
            speed: 8,
          });
      }, []);
    const boxOptions = {
        h:"100vh",
        position:"absolute",
        bgSize:"cover",
        bgPosition:"50% 50%",
        bgRepeat:"no-repeat"
    }
    return (
        <>
        <Section className="acceuil" overflowY="hidden">
            <Flex w="100%" bg="url('/project1/goldent_gate.jpg')" sx={boxOptions} />
            <Flex w="80%" bg="url('/project1/upper.png')" top="20%" sx={boxOptions}  />
            <Flex w="100%" bg="url('/project1/text.png')" top="15%" mixBlendMode="overlay" sx={boxOptions} className="text"   />
            <Flex w="100%" bg="url('/project1/clouds.png')" sx={boxOptions} className="clouds" />
        </Section>
        <Section align="center">
            <Text fontSize="70px" maxW="400px" textAlign="center" fontWeight="600">First Project Animation</Text>
        </Section>  
    </>
    )
}