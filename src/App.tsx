// App.tsx

import React, { useEffect } from 'react';
import refreshTokenWorkerWrapper from './RefreshTokenV2/RefreshTokenWorkerWrapper';
import { resetActivityTimer, isUserInactive } from './RefreshTokenV2/UserActivityTracker';
import RecomendationV2 from './recomendationV2';
import TimezoneIssue from './TimezoneIssue';

const App: React.FC = () => {
  // useEffect(() => {
  //   refreshTokenWorkerWrapper.postMessage('start');

  //   document.addEventListener('mousemove', resetActivityTimer);
  //   document.addEventListener('keydown', resetActivityTimer);

  //   const checkInactivityInterval = setInterval(() => {
  //     if (isUserInactive()) {
  //       console.log('User inactive. Perform logout or token refresh logic here.');
  //       refreshTokenWorkerWrapper.postMessage('logout');
  //       clearInterval(checkInactivityInterval);
  //     }
  //   }, 1000); // Check every 5 minutes

  //   return () => {
  //     document.removeEventListener('mousemove', resetActivityTimer);
  //     document.removeEventListener('keydown', resetActivityTimer);
  //     clearInterval(checkInactivityInterval);
  //     // refreshTokenWorkerWrapper.terminate();

  //   };
  // }, []);

  return (
    <div>
      {/* Your application content goes here */}
      {/* <RecomendationV2 /> */}
      <TimezoneIssue />
    </div>
  );
};

export default App;
