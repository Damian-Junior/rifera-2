import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";

type ResponsivenessType = {
    children: any;
    className?: string;
    style?: Record<string, any>;
};

export const Desktop = ({ children, className }: ResponsivenessType) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? <div className={className}> {children} </div> : null;
};

export const Mobile = ({ children, className }: ResponsivenessType) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? <div className={className}> {children} </div> : null;
};

export const Tablet = ({ children, className, style }: ResponsivenessType) => {
    const isTablet = useMediaQuery({ maxWidth: 991 });
    return isTablet ? (
        <div className={className} style={style} data-testid={"tablet"}>
            {children}
        </div>
    ) : null;
};

export const Default = ({ children, className }: ResponsivenessType) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? <div className={className}> {children} </div> : null;
};
export const useMobile = () => {
    const [mobileView, setMobileView] = useState({ isMobile: false });
    const handler = (e: any) => setMobileView({ isMobile: e.matches });
    useEffect(() => {
        window.matchMedia("(max-width: 768px)").addEventListener("change", handler);
    }, [mobileView]);
    return mobileView;
};
