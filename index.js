var katzDeli = [];

// build a function that a new customer will use when entering the deli

// function takeANumber should accept two paraments
// the current line and persons name
function takeANumber(line, name) {
  // add a person to the line
  line.push(name);
  // appends a person at the end of the line if there are already peopel on it
  // handles mulitple people on line with line.length
  // return the position in line
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(name) {
  if(!name)
}
