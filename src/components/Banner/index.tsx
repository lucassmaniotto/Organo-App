import React from 'react'

import './index.css'

interface BannerProps {
    src: string;
    alt?: string;
}

export const Banner = ({ src, alt }: BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/img/banner.png" alt="Banner principal da página"/> */}
            <img src={src} alt={alt}/>
        </header>
    )
}