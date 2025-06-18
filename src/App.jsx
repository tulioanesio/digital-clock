import { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [hours, setHours] = useState(moment().format("LTS"));
  moment().format();

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="flex item-center justify-center border w-128 h-64">
        <div className="flex item-center justify-center border w-128 h-64">
          <p className="">{hours}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
