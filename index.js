import chalk from 'chalk';
import randomColor from 'randomcolor';

//get color name that user specified on the command line
const colorName = process.argv[2];
//get color luminosity that user specified on the command line
const colorLuminosity = process.argv[3];

//this will generate the random color
const colorInput = randomColor({
  hue: `${colorName}`,
  luminosity: `${colorLuminosity}`,
});

if (colorName) {
  //if user didnt specify a color,
  //display a random color
  console.log(
    chalk.hex(colorInput)(
      `######################################
######################################
######################################
#####                           ######
#####         ${colorInput}           ######
#####                           ######
######################################
######################################
######################################`,
    ),
  );
} else {
  //if user specified a color or color + luminosity,
  //display the specified color or color + luminosity
  console.log(
    chalk.hex(colorInput)(
      `######################################
######################################
######################################
#####                           ######
#####         ${colorInput}           ######
#####                           ######
######################################
######################################
######################################`,
    ),
  );
}
