import chalk from 'chalk';
import randomColor from 'randomcolor';

const colorName = process.argv[2];
const colorLuminosity = process.argv[3];

const colorInput = randomColor({
  hue: colorName,
  luminosity: colorLuminosity,
});

console.log(
  chalk.hex(colorInput)(`
##############################
##############################
#####                    #####
#####      ${colorInput}       #####
#####                    #####
##############################
##############################`),
);
