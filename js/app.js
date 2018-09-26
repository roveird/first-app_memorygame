 // card data
 var memory_array = [{
 	'name': 'A',
    'img': 'img/barbell.png',
  },
  {
    'name': 'B',
    'img': 'img/blenderbottle.png',
  },
  {
    'name': 'C',
    'img': 'img/proteinbar.png',
  },
  {
    'name': 'D',
    'img': 'img/pullups.png',
  },
  {
    'name': 'E',
    'img': 'img/pushups.png',
  },
  {
    'name': 'F',
    'img': 'img/water.png',
	},
 {
 	'name': 'A',
    'img': 'img/barbell1.png',
  },
  {
    'name': 'B',
    'img': 'img/blenderbottle1.png',
  },
  {
    'name': 'C',
    'img': 'img/proteinbar1.png',
  },
  {
    'name': 'D',
    'img': 'img/pullups1.png',
  },
  {
    'name': 'E',
    'img': 'img/pushups1.png',
  },
  {
    'name': 'F',
    'img': 'img/water1.png',
  },  
]
	// defining these
		var memory_values = [];
		var memory_tile_ids = [];
		var tiles_flipped = 1;

 	Array.prototype.memory_tile_shuffle = function(){
			var i = this.length, j, temp;
			while (--i > 0) {
				j=Math.floor(Math.random() * (i+1));
				temp = this[j];
				this[j] = this[i];
				this[i] = temp;
			}
		}


		function newBoard(){
			tiles_flipped = 0;
			var output = '';
			memory_array.memory_tile_shuffle();
			for(var i=0; i < memory_array.length; i++) {
				output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
			}
			document.getElementById('memory_board').innerHTML = output;
		}


	function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			//  to see if the tiles/ or cards is a match and if it is, then we gonna plus two/2 so they remain flipped 
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays for the next matching sequence
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board/ tiles/ card is cleared
				// once the game is over, you'll get an alert to okay so you can clear memory board, then another new board/game
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
				// if it's not a match, then keep playing to find a mmatch
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
newBoard();	