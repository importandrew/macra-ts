import {Card, CardBody, CardHeader, Divider, Image, Navbar, NavbarBrand,
  NavbarItem, Input, Spacer, Button, Link} from '@nextui-org/react';
import {useState} from "react";
import {EyeIcon} from "./EyeOpen";
import {EyeClosedIcon} from "./EyeClosed";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
        <Card fullWidth className="mx-5">
          <CardHeader className="flex justify-center bg-gray-300">Login</CardHeader>
          <Divider />
          <CardBody>
            <Input type="email" label="Email" variant="bordered"/>
            <Spacer />
            <Input label="Password" variant="bordered" endContent={
              <button className="focus:outline-none" type="button" 
                onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
              </button>
              } type={isVisible ? "text" : "password"}
              />
            <Spacer />
            <div className="flex justify-center">
              <Button as={Link} color="primary" href="/" variant="solid" className="w-2/4">
                Sign In
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}