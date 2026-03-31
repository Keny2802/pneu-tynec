import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type Props = {
    className?: string;
    id?: string;
    children: ReactNode;
};

const ListItem = ({
    className,
    id,
    children
}: Props) => {
    return (
        <Fragment>
            <li
            className={clsx(className, "list-none list-item-component")}
            id={id}>
                {children}
            </li>
        </Fragment>
    );
};

export default ListItem;