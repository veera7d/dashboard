import axios from "axios";

const useGSData = () => {
  return axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRc30Sl5Fp-CYFFfVkzclILLVYbM_6kKNq_MLZNFtJgrdhc1lcED7KF2kYyGzHkXHMl14tiIcgSFnH1/pub?output=csv"
    )
    .then((res) => {
      return res.data.split("\n");
    })
    .catch((err) => console.error(err));
};

export default useGSData;
