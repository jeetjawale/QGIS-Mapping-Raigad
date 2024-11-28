// src/components/DataFetcher.jsx
import { useEffect, useState } from "react";
import { fetchSheetData } from "./utils";
import * as XLSX from "xlsx";
import MapComponent from "./MapComponent";
import styles from "./styles/dataFetcher.module.css";

const DataFetcher = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvData = await fetchSheetData();
        const workbook = XLSX.read(csvData, { type: "string" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setPlaces(data);
      } catch (err) {
        console.error("Error processing sheet data:", err);
        setError("Failed to load map data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dataFetcher}>
      <p className={styles.topicName}>Mapping of places of cultural importance in Raigad District</p>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : places.length > 0 ? (
        <MapComponent places={places} />
      ) : (
        <p className={styles.loading}>Loading map data...</p>
      )}
    </div>
  );
};

export default DataFetcher;
