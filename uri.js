let str = "lord of the rings: The fellowship of the ring";
str = str.replace(/:/g, "");

const array = str.split(" ");

finalArray = array.filter(elem => {
  return elem.length >= 3;
});

const finalStr = finalArray.join(" ");

const uri = encodeURI(finalStr);

console.log(uri);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    console.log(xhttp.responseText);
  }
};
xhttp.open(
  "GET",
  "https://www.googleapis.com/books/v1/volumes?q=" + params,
  true
);
xhttp.send();
