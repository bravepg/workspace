function gcd(a, b) {
  // while (a % b !== 0) {
  //   [a, b] = [b, a % b];
  // }
  // console.log(b);
  // return b;
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

console.log(gcd(252, 105));