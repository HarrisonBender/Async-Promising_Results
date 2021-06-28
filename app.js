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

    //Async 
    async function newVersion(x, y) {
        try {
            const a = await slowMath.add(x, y);
            const b = await slowMath.multiply(a, 2);
            const c = await slowMath.divide(b, 4);
            const d = await slowMath.subtract(c, 3);
            const e = await slowMath.add(d, 98);
            const f = await slowMath.remainder(e, 2);
            const g = await slowMath.multiply(f, 50);
            const h = await slowMath.remainder(g, 40);
            const i = await slowMath.add(h, 32);
            return console.log(i);
        }
        catch (err) {
            console.log(`Error: ${err}`);
        }
    }
    
    newVersion(6, 2);