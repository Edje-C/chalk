const chalk = require('chalk')

helloBlue = () => console.log(chalk.blue("Hello world"))
helloRed = () => console.log(chalk.red("Hello world"))
stringToColor = (str, color) => console.log(chalk[color](str))
evensBlueOddsYellow = str => str.split(" ").forEach((v,i)=>i%2? console.log(chalk.yellow(v)) : console.log(chalk.blue(v)))
angryText = str => console.log(chalk.red.underline.bold(str))
backgroundCyan = str => console.log(chalk.white.bgCyan(str))
boldFirstUnderlineLast = str => console.log(chalk.bold(str[0]) + str.substring(1,-1) + chalk.underline(str.slice(-1)))
commandLineChalk = str => {
    console.log(chalk[process.argv[2]](process.argv.slice(3)))
}
commandLineChalk()