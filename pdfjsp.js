//import * as pdfjs from "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/+esm";

const pdfjs = require("pdf.js");
async function getContent(src){
    const doc=await pdfjs.getDocument(src).promise;
    const page = await doc.getPage(1);
    return await page.getTextContent();
}

async function getItems(src){
    const content = await getContent(src);
    const items = content.items.map((item));
    console.log(item.str);
    return items;
}

getItems("./Sources/Astro Notes-Overview.pdf");