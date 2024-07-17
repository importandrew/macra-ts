import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand className="gap-3">
        <Image src="../makura.png" className="h-10" />
        <NavbarItem>MaCRa</NavbarItem>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="solid">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
