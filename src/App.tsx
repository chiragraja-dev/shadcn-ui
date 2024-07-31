// App.tsx

import React, { useEffect } from 'react';
import refreshTokenWorkerWrapper from './RefreshTokenV2/RefreshTokenWorkerWrapper';
import { resetActivityTimer, isUserInactive } from './RefreshTokenV2/UserActivityTracker';
import RecomendationV2 from './recomendationV2';
import TimezoneIssue from './TimezoneIssue';
import TImeZoneV2 from './TImeZoneV2';
import TimeZoneV3 from './TimeZoneV3';
import { Table } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Token from './Token';
import TableMy from './TableMy';
import ChatPage from './chatpage';
import NewPage from './NewPage';
import SortByDate from './SortByDate';
import Dsa1 from './DSA/dsa1';
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
      {/* <TimezoneIssue />
      <TImeZoneV2 /> */}
      {/* <TimeZoneV3 /> */}
      {/* <BrowserRouter>
        <TableMy />
        <div>
        

          <Routes>
            <Route path="/token/:token" element={<Token />} />
          </Routes>
        </div>
      </BrowserRouter> */}

      {/* <ChatPage /> */}
      {/* <NewPage /> */}
      {/* <SortByDate /> */}
      <Dsa1 />
    </div>
  );
};

export default App;
