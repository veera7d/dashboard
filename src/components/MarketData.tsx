import useGSDataStore from "../dataStore/gData";
import Table from "./Table";

const MarketData = () => {
  let { GSdata } = useGSDataStore();
  return (
    <>
      {Object.keys(GSdata).map((keyy) => {
        return <Table key={keyy} dataa={GSdata[keyy]} />;
      })}
    </>
  );
};

export default MarketData;
