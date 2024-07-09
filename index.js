import fs from "fs";

const inputFileName = "sample2.geojson";

const geojsonData = JSON.parse(fs.readFileSync(inputFileName, "utf-8"));

// define the geometry data
const geometry = geojsonData.geometry;
const geometryType = geometry.type;
const coordinates = geometry.coordinates;

// this program works with "Polygon" or "MultiPolygon"
if (geometryType === "Polygon") {
  console.log("Geometry Type = Polygon");

  // counting points
  for (let i = 0; i < coordinates.length; i++) {
    console.log(`--- index: ${i} ---`);
    console.log(`count: ${coordinates[i].length}`);
  }
} else if (geometryType === "MultiPolygon") {
  console.log("Geometry Type = MultiPolygon");

  // Counting Points
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = 0; j < coordinates[i].length; j++) {
      console.log(`--- index i: ${i} index j: ${j} ---`);
      console.log(`count: ${coordinates[i][j].length}`);
    }
  }
} else {
  console.log("This Geometry Type is not supported.");
}
