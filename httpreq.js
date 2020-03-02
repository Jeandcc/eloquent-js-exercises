const https = require("https");
const params = "subject : virus inAuthor:Jean";
const url = "https://www.googleapis.com/books/v1/volumes?q=" + params;

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    const treated = body.items.map(item => {
      return item.volumeInfo.title;
    });
    console.log(treated);
  });
});
