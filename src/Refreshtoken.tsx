import React, { useState, useEffect } from 'react';

const RefreshToken = () => {
    // State to manage token and last activity timestamp
    const [token, setToken] = useState<any>("null");
    const [lastActivity, setLastActivity] = useState<any>(null);
    const [login, setLogin] = useState<any>(false)
    const [loginTime, setLoginTime] = useState<any>(false)
    const [tiem2, setTime2] = useState<any>(null)
    const tokenExpirationThreshold = 15000;

    // Function to refresh token and update last activity timestamp
    const refreshToken = () => {
        setToken(generateNewToken());
        setLastActivity(Date.now());
    };

    // Function to generate a new token (you should implement your own token generation logic)
    const generateNewToken = () => {
        return 'new_token'; // Replace with your token generation logic
    };

    // Effect to track user activity and check for token expiration
    useEffect(() => {
        const handleUserActivity = () => {
            setLastActivity(Date.now());
        };

        // Attach event listeners for user activity (e.g., clicks, keypresses)
        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keypress', handleUserActivity);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keypress', handleUserActivity);
        };
    }, []);

    // Effect to check for token expiration and refresh if needed
    useEffect(() => {
        const checkTokenExpiration = () => {
            if (token && lastActivity && Date.now() - lastActivity > tokenExpirationThreshold) {
                // console.log("logout here")

                // refreshToken();
            }
        };

        const tokenExpirationCheckInterval = setInterval(checkTokenExpiration, 1000); // Check every second

        // Cleanup interval on component unmount
        return () => clearInterval(tokenExpirationCheckInterval);
    }, [token, lastActivity]);


    function myFunction() {
        if (token) {
            setToken(null)
            setLogin(null)
            setTimeout(myFunction, 10000); // 15 minutes in milliseconds
        }
    }

    const handleLogin = () => {
        setLogin(true)
        setToken("token1")
        myFunction()
        setLoginTime(Date.now())
        setTime2(Date.now())

    }
    // Render content based on token and last activity
    return (
        <div>
            {token && login ? (
                <div>
                    <p>User is logged in with token: {token}</p>
                    <p>Last activity: {new Date(lastActivity).toLocaleTimeString()}</p>
                </div>
            ) : (
                <button onClick={() => handleLogin()}>Login</button>
            )}
        </div>
    );
};

export default RefreshToken;
