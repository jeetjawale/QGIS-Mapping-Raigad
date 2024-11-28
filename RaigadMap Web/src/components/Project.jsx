// src/pages/AboutUs.jsx
import styles from "./styles/project.module.css"

const Project = () => {
    return (
      <div className={styles.projectContainer}>
        <h1 className={styles.projectTitle}>Mapping of places of cultural importance in Raigad District</h1>
        <hr />
        <p className={styles.projectDescription}>
          The project <b>Mapping of places of cultural importance</b> aims to identify and
          document culturally significant sites in <b>Raigad district</b> using <b>QGIS</b> software. This project
          seeks to create an interactive, centralized platform that highlights the historical and
          cultural value of these locations. By providing detailed information, it will foster
          public engagement, assist policymakers in conservation planning, and serve as an educational resource. The project also promotes sustainable cultural tourism, ensuring the protection and appreciation of heritage sites for future generations.
          <br />
          <br />
          Our <b>approach</b> began with identifying <b>culturally significant places</b> through research
          and compiling the data into an organized Excel sheet. These locations were then categorized into types such as forts, temples, caves, lakes, historical landmarks, and others. Next, we <b>explored</b> various mapping tools, including ArcGIS, QGIS, and Google
          Earth Engine, to determine the best platform for plotting the data. Ultimately, QGIS
          was chosen due to its open-source nature, ease of use, and cost-effectiveness. Using
          QGIS, we plotted a total of <b>51</b> places.
          <ul>
            <li>33 forts</li>
            <li>8 temples</li>
            <li>7 caves</li>
            <li>1 lake</li>
            <li>1 historical landmark</li>
            <li>1 other</li>
          </ul>

          <br />
          <a 
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSvtYmoQ3WGoyH5oNAFR9rQ3_DMp3b_VLRdc37Fy6ZnHm6IiLYd_5E9KM4snGpdb88lTIYt4zY9NyE7/pub?output=csv" target="_blank"
            >
            Link to our dataset  
          </a>
          <a 
            href="https://qgiscloud.com/2130331245046/raigad_places/" target="_blank"
          >
            Link to project on QGIS cloud  
          </a>

          <img src="/public/RaigadMap.png" alt="Raigad map" />
          
          There are multiple ways we can plot the places in realtime using powerful softwares and services like <b>QGIS, ArcGIS, Google Earth Engine (GEE)</b>. We <b>chose QGIS</b> for our beginning because it is <b>open source</b>, <b>free</b> to use till many useful features, has a <b>user-friendly UI</b> and <b>strong community</b> to solve any queries.
          <br />
          <br />
          We plan to explore and learn more about this and similar softwares in the future for next phases. We will focus on creating more maps with different locations, with different <b>geospatial datasets</b>, and eventually cover <b>larger geographical areas</b> like <b>Maharashtra, India, or any other state</b>.
        </p>
        <h2 className={styles.teamTitle}>Project by:</h2>
        <ul className={styles.teamList}>
          <li>Swanand Shekhar Bhuskute - 2130331245033</li>
          <li>Ashish Subhash Magar - 2130331245040</li>
          <li>Jeet Yash Jawale - 2130331245046</li>
        </ul>
        <hr />
      </div>
    );
  };
  
  export default Project;
  