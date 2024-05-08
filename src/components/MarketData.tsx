import { useEffect, useState } from "react";
import getMarketData from "../services/getDataGS";

const MarketData = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    getMarketData()
      .then((data) => {
        if (!data) return;
        console.log(data);
        setData(data);
      })
      .catch();
  }, []);
  return (
    <>
      {data.length != 0
        ? data.map((d) => {
            return d.split(",");
          })
        : ""}
      <table className="table">
        <thead>
          <tr>
            {data.length != 0 ? (
              data[0].split(",").map((d, index) => {
                return <th key={index}>{d}</th>;
              })
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.length != 0 ? (
            data.slice(1).map((da, index) => {
              return (
                <tr key={index}>
                  {da.split(",").map((d, i) => (
                    <td key={i}>{d}</td>
                  ))}
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
};

export default MarketData;
