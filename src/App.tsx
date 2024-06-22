import { useEffect } from "react";
import MarketData from "./components/MarketData";
import useGSData from "./services/getDataGS";
import useGSDataStore from "./dataStore/gData";
import convertGSData from "./utils/generalUtil";

function App() {
  const { setGSData } = useGSDataStore();
  useEffect(() => {
    useGSData()
      .then((data) => {
        if (!data) return;
        const dataobj = convertGSData(data);
        setGSData(dataobj);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <MarketData />
    </>
  );
}

export default App;
