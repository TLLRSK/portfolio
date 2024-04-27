import { useState } from "react"

export default function Background(props) {
    const {location} = props;
    const [isActive, setIsActive] = useState(false);
    
    return <div className={`background`}>
    </div>
}