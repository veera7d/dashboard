interface Props {
  dataa: string[][];
}

const Table = ({ dataa }: Props) => {
  if (dataa.length === 0) {
    console.log("data is null");
    return null;
  }
  return (
    <div className="col">
      <table className="table">
        <thead>
          <tr>
            {dataa.length != 0 ? (
              dataa[0].map((d, index) => {
                return <th key={index}>{d}</th>;
              })
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody className="table table-group-divider">
          {dataa.length != 0 ? (
            dataa.slice(1).map((da, index) => {
              return (
                <tr key={index}>
                  {da.map((d, i) => (
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
    </div>
  );
};

export default Table;
