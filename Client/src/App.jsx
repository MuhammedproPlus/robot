import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
    const captchaRef = useRef(null);
    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
    }

    const handleCaptchaChange = () => {
        setIsCaptchaCompleted(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="input" />
                <ReCAPTCHA
                    sitekey='6Lfp3v4pAAAAAM9vYWalzz-GQwxHgJkxqgAhJHST'
                    ref={captchaRef}
                    onChange={handleCaptchaChange}
                />
                {isCaptchaCompleted && <button type="submit">Submit</button>}
            </form>
        </div>
    );
};

export default App;