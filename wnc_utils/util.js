///Imports, Util
const cl = require('cli-color')
class App {
    constructor(text=String,option=String) {
        this._text=text;
        this._option=option
        if (this._option=='blue') {
            console.log(cl.blueBright(this._text))
        } else if (this._option=='red'){
            console.log(cl.redBright(this._text)) 
        } else if(this._option=='green') {
            console.log(cl.greenBright(this._text))
        } else if (this._option=='magenta'){
            console.log(cl.magentaBright(this._text))
        } else if (this._option=='builtin') {
            this._text.toString().split()
            console.log(
                cl.red(this._text.toString().substring(0,1)) + 
                cl.blue(this._text.toString().substring(1,4)) +
                cl.greenBright(this._text.toString().substring(4)))
                
                
            
        } else if (this.option=='cyan') {
            console.log(cl.cyan(this._text))
        }
        else {
            console.log(cl.red('Error, Unsupported color!'))
        }
    }
}




module.exports={App}

