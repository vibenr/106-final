import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    Center,
    Image,
} from '@chakra-ui/react'

export default function Unverified() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <ChakraProvider>
            <Center h='300px'>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://icones.pro/wp-content/uploads/2021/05/symbole-d-avertissement-rouge.png'
                    alt='User profile Unverified'
                />
                <Button size='lg' colorScheme='red' onClick={onOpen}>
                    Profile Unverified
                </Button>
            </Center>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            User profile is unverified
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Your profile is unverified. Kindly go to your nearest verification center for verification
                        </AlertDialogBody>

                        <AlertDialogFooter>

                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Okay
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </ChakraProvider>
    )
}