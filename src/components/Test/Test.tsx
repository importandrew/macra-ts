import {useQuery} from '@tanstack/react-query';
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Spinner, Navbar, NavbarBrand, NavbarItem, Image} from "@nextui-org/react";

export default function TestPage() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const url = '/test2'
            const response = await fetch(import.meta.env.VITE_API_ADDR + url)
            if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText} while processing URL ${url}`)
            }
            return response.json()
        },
    })

    if (isPending) {
        return (
        <div className="flex flex-col h-screen w-screen my-auto">
            <div>
                <Navbar maxWidth="full">
                    <NavbarBrand className="gap-3">
                    <Image src="../makura.png" className="h-10" />
                        <NavbarItem>MaCRa</NavbarItem>
                    </NavbarBrand>
                </Navbar>
            </div>
            <div className="flex flex-col max-w-screen h-screen text-2xl text-center justify-center items-center mx-5">
            <Spinner label="Loading..." size="lg" />
            </div>
        </div>
    )}

    if (isError) {
        return <span>Error: {error.message}</span>
        // const {isOpen, onOpenChange} = useDisclosure();
        // return (
        //     <div className="flex flex-col gap-2">
        //         <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="xs">
        //         <ModalContent>
        //             {(onClose) => (
        //             <>
        //                 <ModalHeader className="flex flex-col gap-1">
        //                     Error
        //                 </ModalHeader>
        //                 <ModalBody>
        //                     <p>{error.message}</p>
        //                 </ModalBody>
        //                 <ModalFooter>
        //                     <Button color="primary" onPress={onClose}>
        //                         OK
        //                     </Button>
        //                 </ModalFooter>
        //             </>
        //             )}
        //         </ModalContent>
        //         </Modal>
        //     </div>
        // );
    }

    if (data.hasOwnProperty("errorText")) {
        return <span>Error: {data.errorText}</span>
    }
    
    return (
        <div>{data.asd}</div>
    )
}


