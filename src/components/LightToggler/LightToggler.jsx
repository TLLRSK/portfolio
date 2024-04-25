import { useEffect } from 'react'
import './LightToggler.scss'
const LightToggler = () => {
    const switchLight = (checked) => {
        console.log(checked)
        const root = document.querySelector(":root")
        console.log(root)
        root.classList.toggle("dark");
    }

    return (
        <label htmlFor="light-toggler" className="light-toggler-container">
            <input type="checkbox" id="light-toggler" className="btn light-toggler-button" onClick={(e) => switchLight(e.target.checked)}/>
        </label>
    )
}
export default LightToggler;