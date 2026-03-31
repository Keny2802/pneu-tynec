import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type Props = {
    className?: string;
    id?: string;
    // children: HTMLUListElement | HTMLOListElement;
    children: ReactNode;
};

const ListContainer = ({
    className,
    id,
    children
}: Props) => {
    return (
        <Fragment>
            <ul
            className={clsx(className, "list-container-component")}
            id={id}>
                {children}
            </ul>
        </Fragment>
    );
};

export default ListContainer;