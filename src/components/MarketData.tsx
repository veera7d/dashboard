import useGSDataStore from "../dataStore/gData";
import Table from "./Table";

const MarketData = () => {
  let { GSdata } = useGSDataStore();
  return (
    <>
      <div className="container">
        <div className="row">
          {Object.keys(GSdata).map((keyy) => {
            return <Table key={keyy} dataa={GSdata[keyy]} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MarketData;
