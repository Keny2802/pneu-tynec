import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Flex from "./Flex";
import Cta from "./Cta";
import Seperator from "./Seperator";
import ListItem from "./ListItem";

type props = {
    className?: string;
    isMobileMenuDisplayed: boolean;
    setMobileMenuDiplay: (bool: boolean) => void;
    children?: ReactNode;
};

const MobileMenu = ({
    className,
    isMobileMenuDisplayed,
    children
}: props) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, isMobileMenuDisplayed ? "translate-x-0 md:-translate-x-full" : "-translate-x-full", "fixed inset-0 w-[320px] h-screen z-50 p-2.5 md:p-3 lg:p-4 bg-white shadow-lg transition-transform duration-300 ease-out mobile-menu-component")}
            style={{
                background: "var(--primary-color)"
            }}>
                <Flex
                type="flexCol"
                className="justify-between h-full">
                    <Logo />
                    <Seperator variant="secondary" />
                    <Flex
                    type="flexCol"
                    className="justify-between h-full">
                        <ul className="mt-2.5 md:mt-3 lg:mt-4">
                            <Flex type="flexCol">
                                {   
                                    [
                                        {
                                            href: "#uvod",
                                            text: "Domů"
                                        },
                                        {
                                            href: "#sluzby",
                                            text: "Služby"
                                        },
                                        {
                                            href: "#cenik",
                                            text: "Ceník"
                                        },
                                        {
                                            href: "#o-mne",
                                            text: "O mně"
                                        },
                                        {
                                            href: "#kontakt",
                                            text: "Kontakt"
                                        },
                                    ].map((link, idx) => {
                                        const {
                                            href,
                                            text
                                        } = link;

                                        return (
                                            <Fragment key={idx}>
                                                <ListItem>
                                                    <Link
                                                        href={href}>
                                                        {text}
                                                    </Link>
                                                </ListItem>
                                                {/* <Seperator /> */}
                                            </Fragment>
                                        );
                                    })
                                }
                            </Flex>
                        </ul>
                        <Cta
                        variant="secondary"
                        href="tel:+420602822813">
                            +420 602 822 813
                        </Cta>
                    </Flex>
                </Flex>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;