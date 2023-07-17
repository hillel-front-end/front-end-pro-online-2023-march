import json from "@assets/data";
import csv from "@assets/data.csv";
import xml from "@assets/data.xml";

import googleImg from "@assets/google.img";

console.log(xml, "xml");

console.log(csv, "csv");

console.log(json, "json");

function remderPicture() {
  document.body.innerHTML = `<img src=${googleImg} />`;
}
