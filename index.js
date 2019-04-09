function takeANumber(katzDeliLine, Name) {
  katzDeliLine.push(Name) //adds Name to end of line (line assumed to be empty)
  return `Welcome, ${Name}. You are number ${incrementVariable()} in line.`
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstperson = katzDeliLine.shift() //shift returns the first person in line and removes him
  }
  return `Currently serving ${firstperson}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineNum = [];
    for (var i = 0; i < line.length; i++) {
      lineNum.push(` ${i+1}. ${line[i]}`) //
    }
    return `The line is currently:${lineNum}`
  }
}