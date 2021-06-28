slowMath.add(6, 2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2);
    }).then((product) => {
        console.log(`Multiplying that by 2 is ${product}`);
        return slowMath.divide(product, 4);
    }).then((quotient) => {
        console.log(`Dividing that by 4 is ${quotient}`);
        return slowMath.subtract(quotient, 3);
    }).then((difference) => {
        console.log(`Subtracting that by 3 is ${difference}`);
        return slowMath.add(difference, 98);
    }).then((sum) => {
        console.log(`Adding 98 to that is ${sum}`);
        return slowMath.remainder(sum, 2);
    }).then((remainder) => {
        console.log(`Remainder of that divided by 2 is ${remainder}`);
        return slowMath.multiply(remainder, 50);
    }).then((quotient) => {
        console.log(`Multiplying that by 50 is ${quotient}`);
        return slowMath.remainder(quotient, 40);
    }).then((remainder) => {
        console.log(`Remainder of that by 40 is ${remainder}`);
        return slowMath.add(remainder, 32);
    }).then((sum) => {
        console.log(`Sum of that and 32 is ${sum}`);
        console.log("Math operations complete!");
    })
    .catch((err) => {
        console.log("There has been an error in the script.")
        console.log(err);
    });