# Node.js Random Color Generator

Create an application that will return a random color in the command line.

## How to run the program
### Generate random color
`node index.js`
### Generate random color based on chosen hue
`node index.js red`
### Generate random color luminosity
`node index.js red light`


##

```bash
$ node index.js
######################################
######################################
######################################
#####                           ######
#####         #8c00d8           ######
#####                           ######
######################################
######################################
######################################
$ node index.js
######################################
######################################
######################################
#####                           ######
#####         #21c4ab           ######
#####                           ######
######################################
######################################
######################################
```

Accepts a request for hue

```bash
$ node index.js blue
######################################
######################################
######################################
#####                           ######
#####         #0f67af           ######
#####                           ######
######################################
######################################
######################################
$ node index.js red
######################################
######################################
######################################
#####                           ######
#####         #ba0745           ######
#####                           ######
######################################
######################################
######################################
```

Accepts a request for luminosity

```bash
$ node index.js blue light
######################################
######################################
######################################
#####                           ######
#####         #ccf0ff           ######
#####                           ######
######################################
######################################
######################################
$ node index.js green dark
######################################
######################################
######################################
#####                           ######
#####         #089111           ######
#####                           ######
######################################
######################################
######################################
```
