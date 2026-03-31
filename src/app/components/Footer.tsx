import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Logo from "./Logo";
import ListContainer from "./ListContainer";
import Text from "./Text";
import ListItem from "./ListItem";
import HeaderLink from "./HeaderLink";
import Seperator from "./Seperator";

const Footer = ({
    className,
    id
}: {
    className?: string;
    id?: string
}) => {
    const DYNAMIC_YEAR = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "p-4 md:p-5 lg:p-6 bg-[#0D1194] text-white border-y border-gray-400 footer-component")}
            id={id}>
                <Flex className="items-start">
                    <Flex type="flexCol">
                        <Flex type="flexCol">
                            <Logo />
                            <Seperator variant="secondary" />
                        </Flex>
                        <ListContainer>
                            <Flex type="flexCol">
                                <Text type="boldText">
                                    Nabídka
                                </Text>
                                <Flex
                                type="flexCol"
                                className="mt-2.5">
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
                            </Flex>
                        </ListContainer>
                    </Flex>
                    <Flex type="flexCol">
                        <Text type="boldText">
                            Povinné odkazy
                        </Text>
                        <Seperator variant="secondary" />
                        <Flex
                        type="flexCol"
                        className="mt-2.5">
                            {   
                                [
                                    {
                                        href: "/povinne/ochrana-osobnich-udaju",
                                        text: "Ochrana osobních údajů"
                                    },
                                    {
                                        href: "/povinne/obchodni-podminky",
                                        text: "Obchodní podmínky"
                                    },
                                    {
                                        href: "/povinne/nastaveni-cookies",
                                        text: "Nastavení cookies"
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
                    </Flex>
                    <Flex type="flexCol">
                        <Flex type="flexCol">
                            <Text type="boldText">
                                Pojďme spolupracovat
                            </Text>
                            <Seperator variant="secondary" />
                        </Flex>
                        <ListContainer>
                            <Flex type="flexCol">
                                {
                                    [
                                        {
                                            text: "Marek Svoboda"
                                        },
                                        {
                                            href: "mailto:saxondvb@gmail.com",
                                            text: "saxondvb@gmail.com"
                                        },
                                        {
                                            href: "tel:+420602184251",
                                            text: "+420 602 184 251"
                                        },
                                        {
                                            text: "Dubné, Křenovice 117, 373 84"
                                        },
                                        {
                                            text: "IČO 73805017"
                                        },
                                        {
                                            text: "DIČ CZ7303171238 "
                                        },
                                        {
                                            text: "Datum vzniku živnosti 04.09.2006"
                                        },
                                    ].map((contactInfo, idx) => {
                                        const {
                                            href,
                                            text
                                        } = contactInfo;

                                        return (
                                            <Fragment key={idx}>
                                                {
                                                    text && !href ? (
                                                        <ListItem>
                                                            {text}
                                                        </ListItem>
                                                    ) : (
                                                        <ListItem>
                                                            <HeaderLink href={href || ""}>
                                                                {text}
                                                            </HeaderLink>
                                                        </ListItem>
                                                    )
                                                }
                                            </Fragment>
                                        );
                                    })
                                }
                            </Flex>
                        </ListContainer>
                    </Flex>
                </Flex>
                <Flex
                type="flexRowOnly"
                className="justify-center items-center text-center mt-2.5 md:mt-3 lg:mt-4">
                    <Flex type="flexCol">
                        <Seperator variant="secondary" />
                        <Text>
                            2006 - {DYNAMIC_YEAR}, Marek Svoboda (Saxon), Všechna práva vyhrazena.
                        </Text>
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;