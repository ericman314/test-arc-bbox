const fs = require('fs')
const Helper = require('dxf').Helper

let helper = new Helper(fs.readFileSync('flat-arc.dxf').toString())

fs.writeFileSync('flat-arc.svg', helper.toSVG())