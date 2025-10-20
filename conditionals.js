
function personsAge(a) {
  let result;
  if (a >= 16) {
    result = "pilngadīgs";
  } else {
    result = "nepilngadīgs";
  }
  return result;
}

console.log(personsAge(15));
// Expected output: "NOT positive"
