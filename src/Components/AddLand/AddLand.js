import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Center } from "@chakra-ui/react";

export default function AddLand() {
	return (
		<ChakraProvider>
			<Center height='300px'>
				<Button size='lg' colorScheme='green'>
					Add Land
				</Button>
			</Center>
		</ChakraProvider>
	);
}
