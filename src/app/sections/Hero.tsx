import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";
import Seperator from "../components/Seperator";

const Hero = () => {
    return (
        <Fragment>
            <Relative className="min-h-screen max-h-[200vh] bg-white shadow-lg">
                <Img
                fill
                src="/uvodni-sekce.avif"
                alt="Poskytuji kompletní služby od montáží antén pro sledování TV vysílání, monitorovacích kamer HikVision až po instalace alarmů Jablotron - Marek Svoboda | Saxon"
                // p-2.5 md:p-4 lg:p-6 rounded-2xl
                className="object-cover"
                type="hero"
                />
                <Absolute className="bg-black/50" />
                <Absolute className="flex justify-end items-center text-white p-6 md:p-8 lg:p-10">
                    <Flex
                    type="flexCol"
                    className="justify-center md:max-w-[650px]">
                        <Wrapper>
                            <Text type="cardHeading">
                                PneuTýnec s.r.o.
                            </Text>
                            <Seperator className="mt-2.5" />
                        </Wrapper>
                        <Text
                        type="heroHeading"
                        className="uppercase">
                            Váš partner pro Vaše pneumatiky
                        </Text>
                        <Text type="boldText">
                            Přenechte Vaše starosti s pneutikami  zcela na Nás.
                        </Text>
                        <Cta
                        href="#kontakt"
                        className="md:max-w-max">
                            Naše služby
                        </Cta>
                    </Flex>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default Hero;