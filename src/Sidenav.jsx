import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PowerIcon from '@mui/icons-material/Power';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function Sidenav() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-60 bg-gray-800 text-white h-screen fixed top-0 left-0">
        <div className="p-4 flex items-center space-x-2">
          <SettingsIcon />
          <h1 className="text-lg font-bold">E-CARD ADMIN</h1>
        </div>
        <div className="mt-6">
          <div className="space-y-2">
            {['Settings', 'My Profile'].map((text, index) => (
              <div key={text} onClick={() => navigate("/" + text)} className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
                <div className="flex items-center space-x-2">
                  {index === 0 ? <SettingsIcon /> : null}
                  {index === 1 ? <AccountCircleIcon /> : null}
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            {['Dashboard', 'Customers', 'Customers Card', 'Themes',  'Logout'].map((text, index) => (
              <div key={text} onClick={() => navigate("/" + text)} className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
                <div className="flex items-center space-x-2">
                  {index === 0 ? <DashboardIcon /> : null}
                  {index === 1 ? <InboxIcon /> : null}
                  {index === 2 ? <BarChartIcon /> : null}
                  {index === 3 ? <AccountTreeIcon /> : null}
                  {index === 4 ? <PowerIcon /> : null}
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>

                {/* PowerIcon */}
                {/* InboxIcon */}
                {/* PowerIcon */}
                {/* InboxIcon */}
                {/* BarChartIcon */}
                {/* AccountTreeIcon */}

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-60 flex-1 p-6">
        {/* <div className="bg-white shadow-md rounded-lg p-6"> */}
          {/* Your main content goes here */}
        {/* </div> */}
      </div>
    </div>
  );
}
