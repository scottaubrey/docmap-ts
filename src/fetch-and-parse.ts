import { exit } from 'process';
import { DocMap } from './docmap';
import { parsePreprintDocMap } from './docmap-parser';



fetch('https://data-hub-api--stg.elifesciences.org/enhanced-preprints/docmaps/v1/index')
.then((data) => data.json())
.then((data) => {
  data.docmaps.forEach((docMapStruct: DocMap) => {
    var docMapEditableStruct = JSON.parse(JSON.stringify(docMapStruct));
    // You can make edits here


    var docMapJson = JSON.stringify(docMapEditableStruct);
    var parsedDocMap = parsePreprintDocMap(docMapJson);
    console.log(JSON.stringify(docMapEditableStruct, undefined, "  "));
    console.log(JSON.stringify(parsedDocMap, undefined, "  "));
    exit(1);
  })

})
