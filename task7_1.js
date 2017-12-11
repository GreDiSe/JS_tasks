const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}];

let message = people.reduce((prev, cur) => prev += `Team '${teamName}' name: ${cur.name} -> role: ${cur.role} \n`, '');

console.log(message)
