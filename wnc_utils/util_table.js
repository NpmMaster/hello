const { App } = require('./util.js')



class Table {
  constructor(items, color) {
    this._items=process.argv.forEach(items)
    this._color=color
    try {
      divi = this._items.split()
      dividez = divi.join('  ')
      app = new App(dividez, option=this._color)
    } catch {console.log('Error while running Table mode')}
  }
}

module.exports = Table