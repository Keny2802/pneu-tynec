import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

interface props {
    type?: "heroHeading" | "sectionHeading" | "cardHeading" | "boldText" | "bodyText";
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
};

const Text = ({
    type="bodyText",
    className,
    style = {
        fontFamily: "var(--font-teko)"
    },
    children
} : props) => {
  const textVariants = {
      heroHeading: "text-4xl md:text-5xl lg:text-6xl font-black hero-heading-component",
      sectionHeading: "text-3xl md:text-4xl font-extrabold section-heading-component",
      cardHeading: "text-2xl md:text-3xl font-bold card-heading-component",
      boldText: "text-[24px] font-semibold",
      bodyText: "text-base md:text-[16.5px] lg:text-[23.75px] md:max-w-3xl body-text-component"
  };

  return (
    <Fragment>
        {
            textVariants["heroHeading"] && (
              <h1
              className={clsx(className, `${textVariants[type]}`)}
              style={style}>
                  {children}
              </h1>
            )
            || textVariants["sectionHeading"] && (
                <h2
                className={clsx(className, `${textVariants[type]}`)}
                style={style}>
                    {children}
                </h2>
            )
            || textVariants["cardHeading"] && (
                <h3
                className={clsx(className, `${textVariants[type]}`)}
                style={style}>
                    {children}
                </h3>
            )
            || textVariants["boldText"] && (
                <p
                className={clsx(className, `${textVariants[type]}`)}
                style={style}>
                    {children}
                </p>
            )
            || textVariants["bodyText"] && (
                <p
                className={clsx(className, `${textVariants[type]}`)}
                style={style}>
                    {children}
                </p>
            )
        }
    </Fragment>
  );
};

export default Text;