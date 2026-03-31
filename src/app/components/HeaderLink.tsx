"use client";

import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Hashless from "../functions/HashLess";
import Text from "./Text";

type Props = {
    href: string;
    className?: string;
    id?: string;
    children: ReactNode;
};

const HeaderLink = ({
    href,
    className,
    id,
    children
}: Props) => {
    return (
        <Fragment>
            <Link
            className={clsx(className, "header-link-component")}
            id={id}
            {
                ...(
                    href.startsWith("#") ? (
                        {
                            href: href,
                            onClick: (e) => Hashless(e, href)
                        }
                    ) : (
                        {
                            href: href
                        }
                    )
                )
            }>
                <Text>
                    {children}
                </Text>
            </Link>
        </Fragment>
    );
};

export default HeaderLink;