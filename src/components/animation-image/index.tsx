import { Section } from "../ui/section"
import { Flex,Image,Text,Stack} from "@chakra-ui/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef } from "react"


export const AnimationImage = ( )=> {
    const firstRef = useRef()
    const secRef = useRef()
    const cursorRef = useRef()
 
    useEffect(() => {
        if(secRef && firstRef)
        gsap.to(secRef.current,{
            y:937,
            scrollTrigger:{
                trigger:".first",
               
                start:"top 85px",
                end:"bottom -937px",
                markers:{
                    startColor:"red",
                    endColor:"green",
                    fontSize:"20px",
                }
        }})
    },)


// CURSOR ANIMATION

    const updateCursor = (e) => {
        const {clientX,clientY,pageX,pageY} = e
        const {left,top} = cursorRef.current.getBoundingClientRect()
        gsap.to(cursorRef.current,{
            x:(pageX - 12) + "px",
            y:(pageY - 12)+ "px",
            duration:0.1
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove",(e) => updateCursor(e))
    })


    return (
        <>
        <Flex ref={cursorRef} bg="white" borderRadius="full" boxSize="24px" position="absolute"/>
        <Section>
            <Stack spacing='10%' direction="row" align="center" maxW="80vw" mx="auto">
            <Flex h="80vh" my="auto" w="30%" bg="rebeccapurple"  className="first" ref={secRef} >
                <Image src="/2.jpg" alt="animation image" objectFit="cover" w="100%"  />
            </Flex>
            <Flex direction="column" w="calc(60% + 10%)" >
                <Text fontSize="70px" fontWeight="bold" textTransform="uppercase" color="white">Animation Image</Text>
                <Text fontSize="18px" fontWeight="400" color="rgba(255,255,255,0.6)" >Lorem ipsum dolor, sit amet consecteturLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adip adip</Text>
           </Flex>
            </Stack>
        </Section>
        <Section>
            <Stack ref={firstRef} spacing='10%' direction="row" align="center" maxW="80vw" mx="auto">
            <Flex h="80vh" my="auto" w="30%" bg="rebeccapurple">
                <Image src="/2.jpg" alt="animation image" objectFit="cover" w="100%"  />
            </Flex>
            <Flex h="80vh" my="auto" w="30%" bg="rebeccapurple">
                <Image src="/2.jpg" alt="animation image" objectFit="cover" w="100%"  />
            </Flex>
            <Flex h="80vh" my="auto" w="30%" bg="rebeccapurple">
                <Image src="/2.jpg" alt="animation image" objectFit="cover" w="100%"  />
            </Flex>
            
            </Stack>
        </Section>
        <Section>
            <Stack spacing='10%' direction="row-reverse" align="center" maxW="80vw" mx="auto">
            <Flex h="80vh" my="auto" w="30%" bg="rebeccapurple" >
                <Image src="/2.jpg" alt="animation image" objectFit="cover" w="100%"  />
            </Flex>
            <Flex direction="column" w="calc(60% + 10%)" >
                <Text fontSize="70px" fontWeight="bold" textTransform="uppercase" color="white">Animation Image</Text>
                <Text fontSize="18px" fontWeight="400" color="rgba(255,255,255,0.6)" >Lorem ipsum dolor, sit amet consecteturLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit amet consectetur adip adip</Text>
           </Flex>
            </Stack>
        </Section>
        </>
    )
}