"use client";

import {
    usePathname
} from "next/navigation";
import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Text from "./Text";

type FillType = {
    fill?: boolean;
};

type props = {
    className?: string;
    type?: "heroHeading" | "cardHeading" | "sectionHeading" | "boldText" | "bodyText";
} & FillType;

const Logo = ({
    className,
    type = "boldText"
} : props) => {
    const pathName = usePathname();
    const isHome = pathName === "/" ? "" : "/";

    return (
        <Fragment>
            <Link
            href={isHome}
            className={clsx(className, "logo-component")}>
                <Text
                type={type ? type : "boldText"}
                // type={type}
                >
                    PneuTýnec s.r.o.
                </Text>
            </Link>
        </Fragment>
    );
};

export default Logo;