const DashboardPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
  
        <div className="w-full max-w-md">
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Welcome John Doe</h2>
            <p className="text-gray-700">You have 3 classes today.</p>
          </div>
  
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Classes</h2>
            <ul className="list-disc list-inside">
              <li>Mathematics - 9:00 AM to 11:00 AM</li>
              <li>Science - 11:00 AM to 1:00 PM</li>
              <li>English - 2:00 PM to 4:00 PM</li>
            </ul>
          </div>
  
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Announcements</h2>
            <p className="text-gray-700">No new announcements.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardPage;