function gramophone(band,album,songName){
    let sum = (album.length * band.length) * songName.length / 2;
    let rotations = Math.ceil(sum / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')

/* 6.	Gramophone
Write a function, which as input will receive 3 parameters (strings)
•	The first string is the name of the band
•	The second string is the name of the album
•	The third is holding a song name from the album
You have to find out how many times the plate will rotate the given song 
from the album.
The plate makes a full rotation every 2.5 seconds.
The song duration in seconds is calculate by the given formula: 
 	(albumName.length * bandName.length) * song-name.length / 2
As output, you should print the following message:
      `The plate was rotated {rotations} times.`
Rotations should be rounded up.

Examples
Input	                                        Output
('Black Sabbath', 'Paranoid', 'War Pigs')	    The plate was rotated 167 times.
('Rammstein', 'Sehnsucht', 'Engel')	            The plate was rotated 81 times.
 */