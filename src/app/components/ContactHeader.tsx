import {
    ReactNode,
    Fragment,
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Logo from "./Logo";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";
import HeaderLink from "./HeaderLink";
import Text from "./Text";

type Props = {
    className?: string;
    id?: string;
    children?: ReactNode;
};

const ContactHeader = ({
    className,
    id,
    children
}: Props) => {
    return (
        <Fragment>
            <Wrapper
            style={{
                background: "var(--primary-color)"
            }}
            className={clsx(className, "hidden md:block p-2 md:p-2.5 lg:p-4 border-b border-gray-800 contact-header-component")}
            id={
                id ? id : "kontaktni-navigace"
            }>
                <ListContainer>
                    <Flex
                    type="flexRowOnly"
                    className="justify-between">
                        {/* <Logo /> */}
                        {
                            [
                                {
                                    href: "www.pneutynec.cz",
                                    text: "www.pneutynec.cz",
                                },
                                {
                                    href: "mailto:p.vrkoslav@seznam.cz",
                                    text: "p.vrkoslav@seznam.cz",
                                },
                                {
                                    href: "tel:+420602822813",
                                    text: "+420 602 822 813",
                                },
                                {
                                    text: "PO-PÁ: 07:30 - 17:00, SO: 07:30 - 12:00",
                                },
                            ].map((info, idx) => {
                                const { href, text } = info;

                                return (
                                    <Fragment key={idx}>
                                        {
                                            href ? (
                                                <ListItem>
                                                    <HeaderLink href={href}>
                                                        <Text type="boldText">
                                                            {text}
                                                        </Text>
                                                    </HeaderLink>
                                                </ListItem>
                                            ) : (
                                                <ListItem>
                                                    <Text type="boldText">
                                                        {text}
                                                    </Text>
                                                </ListItem>
                                            )
                                        }
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </ListContainer>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;