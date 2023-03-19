/* eslint-disable react/jsx-no-undef */
import {Flex} from "@chakra-ui/react"
import React from "react"

export const Section = ({children,...props}) => {
    return (
        <Flex direction="column" w="100%" position="relative" justify="center"  h="100vh" {...props}>
            {children}
        </Flex>
    )
}