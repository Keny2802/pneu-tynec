"use client";

import {
    ReactNode,
    useState,
    useEffect,
    Fragment,
} from "react";
import {
    PhoneIcon,
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

import Logo from "./Logo";
import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon";
import ListItem from "./ListItem";
import HeaderLink from "./HeaderLink";
import MobileMenu from "./MobileMenu";
import Cta from "./Cta";

type props = {
    className?: string;
    children?: ReactNode;
};

const Header = (props: props) => {
    const [isMobileMenuDisplayed, setMobileMenuDiplay] = useState<boolean>(false);
    const [isHeaderScrolling, scrollFromToHeader] = useState<boolean>(false);

    // useEffect(() => {
    //     const scrolling = () => {
    //         if (window.scrollY > 0) {
    //             scrollFromToHeader(true);
    //         } else {
    //             scrollFromToHeader(false);
    //         };
    //     };

    //     window.addEventListener("scroll", scrolling);

    //     return () => {
    //         window.removeEventListener("scroll", scrolling);
    //     };
    // }, [isHeaderScrolling]);

    return (
        <Fragment>
            <Wrapper className={clsx(props.className, isHeaderScrolling ? "fixed inset-0" : "static", `w-full p-2.5 md:p-3 lg:p-4 z-50 bg-[#FACC15] text-black shadow-lg upper-header-component`)}>
                <Flex
                type="flexRowOnly"
                className="justify-between">
                    {/* {
                        isHeaderScrolling ? (
                            <Logo
                            type="boldText"
                            className="transition-all duration-200 ease-in-out"
                            />
                        ) : (
                            <Logo
                            type="bodyText"
                            className="transition-all duration-200 ease-in-out"
                            />
                        )
                    } */}
                    <Logo type="cardHeading" />
                    <Flex
                    type="flexRowOnly"
                    className="hidden md:block">
                        <ul>
                            <Flex type="flexRowOnly">
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
                                            href: "#o-nas",
                                            text: "O nás"
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
                                            <ListItem key={idx}>
                                                <HeaderLink
                                                    href={href}>
                                                    {text}
                                                </HeaderLink>
                                            </ListItem>
                                        );
                                    })
                                }
                            </Flex>
                        </ul>
                    </Flex>
                    <Cta
                    variant="secondary"
                    href="#kontakt">
                        Objednat si termín
                    </Cta>
                    {
                        isMobileMenuDisplayed ? (
                            <Icon
                            onClick={() => setMobileMenuDiplay(false)}
                            className="md:hidden">
                                <MinusIcon />
                            </Icon>
                        ) : (
                            <Icon onClick={() => setMobileMenuDiplay(true)}
                            className="md:hidden">
                                <Bars3Icon />
                            </Icon>
                        )
                    }
                </Flex>
            </Wrapper>
            <MobileMenu
            isMobileMenuDisplayed={isMobileMenuDisplayed}
            setMobileMenuDiplay={setMobileMenuDiplay}
            />
        </Fragment>
    );
};

export default Header;