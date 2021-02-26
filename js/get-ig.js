var igToken;
let requestURL = "https://dparchitects.github.io/js/data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const result = request.response;
  igToken = result["token"];
};
console.log("v2!!!!!!!!!!");

// var igToken =
//   "IGQVJXbWttMV84OUw3a25ERm5WbUVzVTV5Q3U0RG54X2dCNW1NYmpKSm16b0c0Tk1CS0thYnR1eE9PX3ZARSFozYV9wQUs1bHVyZAXRPWmFCUHAtSWt6WjNlLXJOeTZAJbmdGcGprSThB";
