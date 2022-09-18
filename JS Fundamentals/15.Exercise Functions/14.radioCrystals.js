function processCrystal(desired, crystal) {
        // Cut
        if (crystal / 4 >= desired) {
            let cut = 0;
            while (crystal >= desired * 4) {
                crystal /= 4;
                cut++;
            }
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
            if (!Number.isInteger(crystal)) {
                crystal = Math.trunc(crystal)
            }
        }
        // End Cut
        // Lap
        if (crystal * 0.8 >= desired) {
            let lap = 0;
            while (crystal >= desired * 1.2) {
                crystal *= 0.8;
                lap++;
            }
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
            if (!Number.isInteger(crystal)) {
                crystal = Math.trunc(crystal)
            }
        }
        //End Lap
        // Grind
        if (crystal - 20 >= desired) {
            let grind = 0;
            while (crystal >= desired + 20) {
                crystal -= 20;
                grind++;
            }
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
            if (!Number.isInteger(crystal)) {
                crystal = Math.trunc(crystal)
            }
        }
        //End Grind
        // Etch
        if (crystal - 2 >= desired) {
            let etch = 0;
            while (crystal > desired) {
                crystal -= 2;
                etch++;
            }
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
            if (!Number.isInteger(crystal)) {
                crystal = Math.trunc(crystal)
            }
        }
        //End Etch
        //X-ray
        if (crystal < desired) {
            crystal += 1;
            console.log(`X-ray x1`);
            if (!Number.isInteger(crystal)) {
                crystal = Math.trunc(crystal)
            }
        }
        //End X-ray
        // Finish
        if (crystal === desired) {
            console.log(`Finished crystal ${desired} microns`);
        }

}


function radioCrystals(arr) {
    let desired = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        crystal = arr[i];
        console.log(`Processing chunk ${crystal} microns`);
        processCrystal(desired, crystal);
    }
}
// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
processCrystal(1200, 3333);  

/* 14.	Radio Crystals 
You need to write a JS program that monitors the current thickness of the crystal and 
recommends the next procedure that will bring it closer to the desired frequency. To 
reduce waste and the time it takes to make each crystal your program needs to complete 
the process with the least number of operations. Each operation takes the same amount of 
time, but since they are done at different parts of the factory, the crystals have to be 
transported and thoroughly washed every time an operation different from the previous must 
be performed, so this must also be taken into account. When determining the order, 
always attempt to start from the operation that removes the largest amount of material.

The different operations you can perform are the following:
•	Cut – cuts the crystal in 4
•	Lap – removes 20% of the crystal’s thickness
•	Grind – removes 20 microns of thickness
•	Etch – removes 2 microns of thickness
•	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be 
done once!
•	Transporting and washing – removes any imperfections smaller than 1 micron (round down 
    the number); do this after every batch of operations that remove material

At the beginning of your program, you will receive a number representing the desired final 
thickness and a series of numbers, representing the thickness of crystal ore in microns. 
Process each chunk and print to the console the order of operations and the number of 
times they need to be repeated to bring them to the desired thickness.
The input comes as a numeric array with a variable number of elements. The first number 
is the target thickness and all following numbers are the thickness of different chunks 
of quartz ore.
The output is the order of operation and how many times they are repeated, every operation 
on a new line. See the examples for more information.
Examples
Input	        Output
[1375, 50000]	Processing chunk 50000 microns
                Cut x2
                Transporting and washing
                Lap x3
                Transporting and washing
                Grind x11
                Transporting and washing
                Etch x3
                Transporting and washing
                X-ray x1
                Finished crystal 1375 microns

[1000, 4000, 8100]	Processing chunk 4000 microns
                    Cut x1
                    Transporting and washing
                    Finished crystal 1000 microns

                    Processing chunk 8100 microns
                    Cut x1
                    Transporting and washing
                    Lap x3
                    Transporting and washing
                    Grind x1
                    Transporting and washing
                    Etch x8
                    Transporting and washing
                    Finished crystal 1000 microns
 */