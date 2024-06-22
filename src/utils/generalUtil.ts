const convertGSData = (data: string[]) => {
  let out: { [key: string]: string[][] | [] } = {};
  let current_block: string | null = null;
  for (let i of data) {
    let split_data = i.split(",");
    if (split_data[0] === "Split") {
      current_block = split_data[1];
      out[current_block] = [];
    } else if (current_block !== null) {
      (out[current_block] as string[][]).push(split_data);
    }
  }
  return out;
};

export default convertGSData;
