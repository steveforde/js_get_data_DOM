// write your code here
var e=document.querySelectorAll(".population"),o=0,t=0;e.forEach(function(e){// Make sure that the given string can be converted to a number
var r=Number(e.innerText.replace(/,/g,""));!isNaN(r)&&(o+=r,t++)});// Calculate average and total value-based to parsed numbers.
var r=o/t;// Replace Calculate it! with calculated average numbers in span
document.querySelector(".average-population").innerText=r.toLocaleString(),document.querySelector(".total-population").innerText=o.toLocaleString();//# sourceMappingURL=index.0bb783df.js.map

//# sourceMappingURL=index.0bb783df.js.map
