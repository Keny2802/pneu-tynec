import {
    Fragment
} from "react";
import {
    ArrowDownRightIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import Grid from "../components/Grid";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import UpAnimation from "../components/motion/UpAnimation";

const Services = (
    {
        id
    }: {
    id?: string
}) => {
    return (
        <Fragment>
            <Wrapper
            className="p-4 md:p-5 lg:p-6"
            style={{
                background: "var(--primary-color)"
            }}
            id={id ? id : "sluzby"}>
                <Flex
                type="flexCol"
                className="text-black">
                    <Text type="sectionHeading">
                        Naše nabídka
                    </Text>
                    <Seperator variant="secondary" />
                    <Text type="boldText">
                        Služby
                    </Text>
                </Flex>
                <Grid
                type="twoGridLayout"
                className="mt-2.5 md:mt-3 lg:mt-4 mx-auto">
                    {
                        [
                            {
                                src: "/vymena-oleje.avif",
                                alt: "Služba výměna oleje - Pneu Týnec s.r.o.",
                                text: [
                                    "Výměna oleje",
                                ],
                                href: "/sluzby/vymena-oleje"
                            },
                            {
                                src: "/prezuti-pneumatik.avif",
                                alt: "Služba přezutí auto i moto pneumatik - Pneu Týnec s.r.o.",
                                text: [
                                    "Přezutí auto i moto pneumatik",
                                ],
                                href: "/sluzby/prezuti-pneumatik"
                            },
                            {
                                src: "/obstarame-jakekoliv-pneumatiky-a-disky.avif",
                                alt: "Služba obstaráme jakékoliv pneumatiky a disky - Pneu Týnec s.r.o.",
                                text: [
                                    "Obstaráme jakékoliv pneumatiky a disky",
                                ],
                                href: "/sluzby/obstarame-jakekoliv-pneumatiky-a-disky"
                            },
                            {
                                src: "/mereni-geometrie-a-serizovani-kol.avif",
                                alt: "Služba měření geometrie a seřizování kol - Pneu Týnec s.r.o.",
                                text: [
                                    "Měření geometrie a seřizování kol",
                                ],
                                href: "/sluzby/mereni-geometrie-a-serizovani-kol"
                            },
                            {
                                src: "/klimatizace.avif",
                                alt: "Plnění klimatizace R134A, R1234YF - Pneu Týnec s.r.o.",
                                text: [
                                    "Plnění klimatizace R134A, R1234YF"
                                ],
                                href: "/sluzby/plneni-klimatizace-do-automobilu"
                            },
                            {
                                src: "/automycka.avif",
                                alt: "Samoobslužné mycí boxy - Pneu Týnec s.r.o.",
                                text: [
                                    "Samoobslužné mycí boxy",
                                    "Provozní doba mycích boxů, listopad - březen: pondělí - neděle: 07:30 až 17:30",
                                    "Provozní doba mycích boxů, duben - říjen: pondělí - neděle 07:30 až 20:00",
                                ],
                                href: "/sluzby/automycka"
                            },
                        ].map((service, idx) => {
                            const {
                                src,
                                alt,
                                text,
                                href
                            } = service;

                            return (
                                <Fragment key={idx}>
                                    {/* <Link href={href}> */}
                                        <Relative className="text-white cursor-pointer">
                                            <UpAnimation>
                                                <Img
                                                width={450}
                                                height={450}
                                                src={src}
                                                alt={alt}
                                                className="w-full max-h-[450px] md:h-[350px] object-cover"
                                                />
                                                <Absolute className="w-full max-h-[450px] md:h-[350px] bg-black/60" />
                                                <Absolute
                                                variant="bottomZero"
                                                className="p-2.5 md:p-4 max-w-[600px]">
                                                    <Flex type="flexCol">
                                                        {
                                                            text.map((t, i) => {
                                                                return (
                                                                    <Text
                                                                    key={i}
                                                                    type="cardHeading">
                                                                        {t}
                                                                    </Text>
                                                                );
                                                            })
                                                        }
                                                        {/* <Flex
                                                        type="flexRowOnly">
                                                            <Text
                                                            type="boldText"
                                                            className="p-4"
                                                            style={{
                                                                backgroundColor: "var(--primary-color)",
                                                                color: "var(--third-color)",
                                                            }}>
                                                                Detail služby
                                                            </Text>
                                                            <ArrowDownRightIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                                        </Flex> */}
                                                    </Flex>
                                                </Absolute>
                                            </UpAnimation>
                                        </Relative>
                                    {/* </Link> */}
                                </Fragment>
                            );
                        })
                    }
                </Grid>
            </Wrapper>
        </Fragment>
    );
};

export default Services;