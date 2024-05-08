const FiiDiiData = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="w-5">CATEGORY</th>
            <th className="w-5">DATE</th>
            <th className="w-5">BUY Value(Crs)</th>
            <th className="w-5">SELL Value(Crs)</th>
            <th className="w-5">NET Value(Crs)</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>DII</td>
            <td>06-May-2024</td>
            <td>13,791.15</td>
            <td>13,009.76</td>
            <td>781.39</td>
          </tr>
          <tr>
            <td>FII/FPI</td>
            <td>06-May-2024</td>
            <td>12,598.23</td>
            <td>14,766.98</td>
            <td>-2,168.75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FiiDiiData;
