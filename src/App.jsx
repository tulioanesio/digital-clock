import { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [hours, setHours] = useState(moment().format("LTS"));
  moment().format();
  const day = moment().format("LL");

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center bg-[#F9F9F9] font-inter">
      <div className="w-144 h-64 bg-white border border-gray-200 shadow-lg rounded-xl flex flex-col items-center justify-center space-y-2">
        <p className="text-gray-700 text-lg">{day}</p>
        <p className="text-black text-3xl font-semibold tracking-wide">
          {hours}
        </p>
      </div>
    </main>
  );
}

export default App;
