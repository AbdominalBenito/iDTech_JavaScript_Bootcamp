//Strings
let greetings = "welcome to orna";
let name = "dabean";
let title = "blademaster";
let worldName = "Orna";

//ints
let orns = 0;
let gold = 0;
let level = 1;

//array
let equipment = [undefined, undefined, undefined, undefined, undefined, "locked", "locked"];

//bool
isDev = true;

console.log(greetings);
console.log("my name is " + title + " " + name);
console.log("This is " + worldName + " a geoMMORPG");
console.log("You have " + orns + " orns, and " + gold + " gold.");
console.log("you are currently level " + level);

for (let i = 0; i < equipment.length - 1; i++)
{
    if (equipment[i] === undefined)
    {
        process.stdout.write("nothing equipt in slot " + (i + 1) + ", ");
    } else
    {
        process.stdout.write("slot " + (i + 1) + " is " + equipment[i] + ", ");
    }
}

if (equipment[equipment.length - 1] === undefined)
{
    process.stdout.write("nothing equipt in slot " + (equipment[equipment.length - 1]));
} else
{
    process.stdout.write("slot " + (equipment.length) + " is " + equipment[equipment.length - 1]);
}

//some compilers have issues with the \b escape sequence so it may show up as an unkown character
//I decided to just embrace the fencepost scenario instead of using the backspace escape sequence which VS Code doesnt like 
//process.stdout.write("\b\b\n");
console.log();

if (isDev)
{
    console.log("Welcome back Developer! Everything has been unlocked for you.");
}