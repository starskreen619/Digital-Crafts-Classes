const fs = require("fs");

fs.readFile("test1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  let output = JSON.parse(data);
  output.forEach((people) => {
    console.log(`${people.name} is ${people.age} years old`);
  });
});
