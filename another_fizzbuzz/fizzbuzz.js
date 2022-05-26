const fizzBuzz = (input) => {
    let output = ""
    if(input % 3 === 0 && input % 5 != 0)
    {output = output.concat('Fizz')}
    else if(input % 5 === 0 && input % 3 != 0)
    {output = output.concat('Buzz')}
    else if(input % 3 === 0 && input % 5 === 0)
    {output = output.concat('FizzBuzz')}
    else 
    {output = output.concat(input)}
    return output
}

module.exports = fizzBuzz;
