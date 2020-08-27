let cat = new Cat('Tom', 3, 40);
let rat = [];
rat.push(new Rat('Jerry', 0.5, 60));
rat.push(new Rat('Tony', 1, 30));
rat.push(new Rat('Hank', 0.2, 15));
rat.push(new Rat('Hit', 0.6, 40));
rat.push(new Rat('Yon', 2, 10));

document.write('Cat: <br>' + cat.saySth("Hi! I'm a cat! My name is " + cat.getName() + ". My weight is " + cat.getWeight() + "kg. My speed is " + cat.getSpeed() + "km/h." + "<br><br>"));
document.write('Rat: <br>');
for (let i = 0; i < rat.length; i++) {
    document.write(rat[i].saySth("Woo! I'm a rat! My name is " + rat[i].getName() + ". My weight is " + rat[i].getWeight() + "kg. My speed is " + rat[i].getSpeed() + "km/h." + "<br>"));
}

for (let i = 0; i < rat.length; i++) {
    if (cat.catchRat(rat[i])&&rat[i].isAlive) {
        document.write("<br>" + cat.getName() + " has catched " + rat[i].getName() + "<br>");
        cat.eatRat(rat[i]);
        document.write("Mlem Mlem! " + cat.getName() + " ate " + rat[i].getName() + ". His weight now is " + cat.getWeight() + "kg." + "<br>");
        i=0;
    }
}