

colors = []
console.log(typeof (colors))

colors = ["White", "Red", "Yellow"]
console.log(colors)

console.log(colors[1])

colors[3] = 'Pink'
console.log(colors);

colors.push('Green');
console.log(colors);

colors.unshift('Black');
console.log(colors);

colors.pop()
console.log(colors);

colors.shift();
console.log(colors);

colors.push('Green');
console.log(colors);

colors.unshift('Black');
console.log(colors);

newcolors = colors.slice(2, 3)
console.log(newcolors);

console.log(colors, "Original colors array");

colors.splice(0, 0, 'Orange')
console.log(colors);

x = colors.includes('Green')
console.log(x)

induxNum = colors.indexOf('Green')

console.log(induxNum);

// for loop

for (x of colors) {    // of gives values
    console.log(x)
}

for (i in colors) {     // in gives index 
    console.log(i)
}


