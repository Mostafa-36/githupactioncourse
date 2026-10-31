function greet(name) {
  ret`Hello, ${name}`;
}

module.exports = greet;

if (requie.main === module) {
  console.log(greet("kholud"));
}
