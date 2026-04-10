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
            className={clsx(className, "p-4 md:p-5 lg:p-6 text-black border-y border-gray-400 footer-component")}
            style={{
                backgroundColor: "var(--primary-color)"
            }}
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
                                                        <Text>
                                                            {text}
                                                        </Text>
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
                                                <Text>
                                                    {text}
                                                </Text>
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
                                Důležité odkazy
                            </Text>
                            <Seperator variant="secondary" />
                        </Flex>
                        <ListContainer>
                            <Flex type="flexCol">
                                {
                                    [
                                        {
                                            text: "Pneu Týnec s.r.o."
                                        },
                                        {
                                            href: "mailto:p.vrkoslav@seznam.cz",
                                            text: "p.vrkoslav@seznam.cz"
                                        },
                                        {
                                            href: "tel:+420602822813",
                                            text: "+420 602 822 813"
                                        },
                                        {
                                            text: "K Lesíku 574, 257 41 Týnec nad Sázavou"
                                        },
                                        {
                                            text: "IČO: 06722563"
                                        },
                                        {
                                            text: "DIČ: CZ06722563 "
                                        },
                                        // {
                                        //     text: "Datum vzniku živnosti 04.09.2006"
                                        // },
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
                                                            <Text>
                                                                {text}
                                                            </Text>
                                                        </ListItem>
                                                    ) : (
                                                        <ListItem>
                                                            <HeaderLink href={href || ""}>
                                                                <Text>
                                                                    {text}
                                                                </Text>
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
                            2016 - {DYNAMIC_YEAR}, Pneu Týnec s.r.o., Všechna práva vyhrazena.
                        </Text>
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;