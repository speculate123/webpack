import TestJS from "./TestJs.js";
import getJSON from "./getJSON";
import TableGeneration from "./TableGenerate";

TestJS();

getJSON('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            TableGeneration.generateTableHead(table, data);
            TableGeneration.generateTable(table, dataRecords);
        }
    });
