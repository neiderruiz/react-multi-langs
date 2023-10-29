import { translateFileCsv } from "@neiderruiz/translate-files";

// https://docs.google.com/spreadsheets/d/1PZTWtMe2iCmJqNzJzuCiJ7cr7s-GM4cU6ctbCVLICJs/edit#gid=0
// ## id doc 1PZTWtMe2iCmJqNzJzuCiJ7cr7s-GM4cU6ctbCVLICJs

translateFileCsv(
  "1PZTWtMe2iCmJqNzJzuCiJ7cr7s-GM4cU6ctbCVLICJs",
  "./src/locales/translations",
  {
    separator: ".",
  }
);
