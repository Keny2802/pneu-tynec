import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import HeaderLink from "../components/HeaderLink";
import Cta from "../components/Cta";
import Img from "../components/Img";

const About = (
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
            id={id ? id : "o-nas"}>
                <Flex
                // type="flexRowReverseCombo"
                className="justify-between items-start md:items-center">
                    <Flex
                    type="flexCol"
                    className="max-w-full">
                        <Text
                        type="boldText"
                        className="uppercase">
                            O nás
                        </Text>
                        <Text
                        type="sectionHeading"
                        className="uppercase">
                            Pár slov o Nás.
                        </Text>
                        <Seperator variant="secondary" />
                        {
                            [
                                "Jsme autoservis a pneuservis působící na trhu 20 let.",
                                "Sídlíme na adrese K Lesíku 574, 257 41 Týnec nad Sázavou.",
                            ].map((text, idx) => {
                                return (
                                    <Text key={idx}>
                                        {text}
                                    </Text>
                                );
                            })
                        }
                        <Cta
                        variant="secondary"
                        href="#kontakt">
                            Takový servis chci
                        </Cta>
                    </Flex>
                    <Flex type="flexCol">
                        <Img
                        width={500}
                        height={500}
                        src="/vymena-oleje.avif"
                        alt="Výměna oleje - Pneu Týnec s.r.o. | www.pneutynec.cz"
                        className="w-full md:max-w-[500px] md:max-h-[500px]"
                        />
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default About;