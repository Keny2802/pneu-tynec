import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import Grid from "../components/Grid";
import HeaderLink from "../components/HeaderLink";

const Contact = (
    {
        id
    }: {
    id?: string
    }
) => {
    return (
        <Fragment>
            <Wrapper
            className="overflow-hidden p-4 md:p-5 lg:p-6 text-black border-y border-gray-500"
            style={{
                backgroundColor: "var(--primary-color)"
            }}
            id={id ? id : "kontakt"}>
                <Flex
                type="flexCol"
                className="max-w-full">
                    <Text
                    type="boldText"
                    className="uppercase">
                        Kontakt
                    </Text>
                    <Text
                    type="sectionHeading"
                    className="uppercase">
                        Zavolejte nebo napište nám
                    </Text>
                    <Seperator variant="secondary" />
                    <Grid type="threeGridLayout">
                        {
                            [
                                {
                                    heading: "Fakturační adresa",
                                    text: [
                                        "Pneu Týnec s.r.o.",
                                        "Křižovnická 86/6 Praha 1, 110 00",
                                        "IČO: 06722563",
                                        "DIČ: CZ06722563",
                                    ]
                                },
                                {
                                    heading: "Provozovna",
                                    text: [
                                        "Pneu Týnec s.r.o.",
                                        "K Lesíku 574, 257 41 Týnec nad Sázavou",
                                    ]
                                },
                                {
                                    heading: "Kontakt",
                                    text: [
                                        "+420 602 822 813",
                                        "p.vrkoslav@seznam.cz",
                                        "www.pneutynec.cz",
                                        "PO-PÁ: 07:30 - 17:00, SO: 07:30 - 12:00",
                                    ]
                                },
                            ].map((infoBox, idx) => {
                                const { heading, text } = infoBox;

                                return (
                                    <Fragment key={idx}>
                                        <Wrapper className="min-h-[300px] p-2.5 md:p-3 lg:p-4 bg-white shadow-lg">
                                            <Text type="cardHeading">
                                                {heading}
                                            </Text>
                                            <Flex
                                            type="flexCol"
                                            className="mt-2.5 md:mt-3 lg:mt-4">
                                                {
                                                    text.map((t, index) => {
                                                        return (
                                                            t.includes("+420") || t.includes("@") || t.includes("www.") ? (
                                                                <HeaderLink
                                                                key={t}
                                                                href={t.includes("+420") ? `tel:+420602822813` : t.includes("@") ? `mailto:${t}` : `https://${t}`}>
                                                                    <Text>
                                                                        {t}
                                                                    </Text>
                                                                </HeaderLink>
                                                            ) : (
                                                                <Text key={t}>
                                                                    {t}
                                                                </Text>
                                                            )
                                                        );
                                                    })
                                                }
                                            </Flex>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Grid>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;