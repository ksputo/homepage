import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import convert from "xml-js";

export default function() {
  return ajax({
    url:
      "https://grubawebsite.blob.core.windows.net/gruba-gallery?restype=container&comp=list",
    method: "GET",
    responseType: "xml",
    crossDomain: false
  }).pipe(
    map(data => JSON.parse(convert.xml2json(data.response.documentElement.innerHTML, {compact: true, spaces: 4}))),
    map(data => data.Blobs.Blob.map(blob => blob.Url._text))
  );
}
