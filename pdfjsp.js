// PDF.js code below
// See https://www.npmjs.com/package/pdfjs-dist documentation.

import * as pdfjsDist from 'https://esm.run/pdfjs-dist';

pdfjsLib.getDocument("Sources/Astro Notes-Overview.pdf");
var loadingTask = pdfjsLib.getDocument('Sources/Astro Notes-Overview.pdf');
loadingTask.promise.then(function(pdf) {
  // you can now use *pdf* here
});

document.getElementById('canvas').innerHTML = "<p>luh</p>";
