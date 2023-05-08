import chalk from 'chalk';
import randomColor from 'randomcolor';

// get color name that user specified on the command line
const colorName = process.argv[2];
// get color luminosity that user specified on the command line
const colorLuminosity = process.argv[3];

// generate the random color
const colorInput = randomColor({
  hue: colorName,
  luminosity: colorLuminosity,
});

console.log(
  chalk.hex(colorInput)(
    `###############################
###############################
###############################
#####                     #####
#####       ${colorInput}       #####
#####                     #####
###############################
###############################
###############################`,
  ),
);
