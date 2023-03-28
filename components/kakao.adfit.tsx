import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
    adUnitId: string;
    width: number;
    height: number;
}


const KakaoAdfit: NextPage<Props> = ({ adUnitId, width, height }) => {


    useEffect(() => {
        // Load the script dynamically
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };

    }, [])
    return (
        <ins
            className="kakao_ad_area"
            data-ad-unit={adUnitId}
            data-ad-width={width}
            data-ad-height={height}
        />
    )
}

export default KakaoAdfit