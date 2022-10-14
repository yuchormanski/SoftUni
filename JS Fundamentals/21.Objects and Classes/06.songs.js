/* 6.	Songs
Define a class Song, which holds the following information about songs: typeList, 
name, and time.
You will receive the input as an array.
The first element n will be the number of songs. Next n elements will be the songs 
data in the following format: "{typeList}_{name}_{time}", and the last element will 
be typeList / "all".
Print only the names of the songs, which have the same typeList (obtained as the last 
parameter). If the value of the last element is "all", 
print the names of all the songs.
Examples
Input	                                            Output
[3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']	                                    DownTown
                                                    Kiss
                                                    Smooth Criminal

[4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']	                                    Andalouse

[2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']	                                            Replay
                                                    Photoshop
   */

function songs(listArray) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = listArray.shift();
    let typeSong = listArray.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = listArray[i].split('_');
        let song = new Song(type, name, time)
        songs.push(song);
    }

    if(typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
songs([2,'like_Replay_3:15', 'ban_Photoshop_3:48','all'])