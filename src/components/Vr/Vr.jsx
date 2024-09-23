import { Typography } from "antd";
import './Vr.css';
export default function Vr(){
    return(
        <div className="vr-main">
            <Typography className="vr-title">Experiance VR</Typography>
            <div><img src="vr-headset.png" className="vr-image"/></div>
        </div>
    )
}