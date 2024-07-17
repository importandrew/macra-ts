import {Navbar, NavbarBrand, NavbarItem, Image} from "@nextui-org/react";

export default function Header() {
    return (
        <div>
            <Navbar maxWidth="full">
                <NavbarBrand className="gap-3">
                <Image src="../makura.png" className="h-10" />
                    <NavbarItem>MaCRa</NavbarItem>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}