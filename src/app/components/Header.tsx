"use client";

import {
    ReactNode,
    useState,
    Fragment,
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";

import Logo from "./Logo";
import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon";
import ListItem from "./ListItem";
import HeaderLink from "./HeaderLink";
import Text from "./Text";
import MobileMenu from "./MobileMenu";
import Cta from "./Cta";

type props = {
    className?: string;
    children?: ReactNode;
};

const Header = (props: props) => {
    const [isMobileMenuDisplayed, setMobileMenuDiplay] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <Fragment>
            <Wrapper className={clsx(props.className, `w-full p-2.5 md:p-3 lg:p-4 z-50 bg-[#FACC15] text-black shadow-lg upper-header-component`)}>
                <Flex
                type="flexRowOnly"
                className="justify-between">
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
                                                    href={
                                                        pathname === "/" ? href : `/${href}`
                                                    }>
                                                    <Text type="boldText">
                                                        {text}
                                                    </Text>
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
                    href="tel:+420602822813"
                    className="hidden md:inline-block">
                        +420 602 822 813
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