// src/components/utils.js
import axios from "axios";

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvtYmoQ3WGoyH5oNAFR9rQ3_DMp3b_VLRdc37Fy6ZnHm6IiLYd_5E9KM4snGpdb88lTIYt4zY9NyE7/pub?output=csv";

export const fetchSheetData = async () => {
  try {
    const response = await axios.get(sheetUrl);
    console.log("Fetched CSV Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw error;
  }
};
