const sharp = require("sharp")

sharp('img.png')
.resize(80)
.grayscale()
.toFile('resized.png')