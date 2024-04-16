const fs = require('fs')
const cl = require('cli-color')
class FileContent {
  constructor(filepath, option) {
    this._filepath=filepath
    this.option=option
    try {
      let content = fs.readFile(this._filepath);
      this._option.toString().lower()
      if (this._option=="red") {
        console.log(cl.red(content))
      } else if (this._option=="blue") {
        console.log(cl.blue(content))
      } else if (this._option=="magenta") {
        console.log(cl.magenta(content))
      } else if (this._option=="magenta bright") {
        console.log(cl.magentaBright(content))
      } else if (this._option=="blue bright") {
        console.log(cl.blueBright(content))
      } else if (this._option=="green") {
        console.log(cl.green(content))
      } else {
        console.log(cl.redBright('Invalid color option!'))
      }
    }.catch((error) => {console.log(cl.red("Invalid File!"))}
  }
}
