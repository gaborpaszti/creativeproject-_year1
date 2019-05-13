//////////////////////    GAME OF LIFE    //////////////////////////


/////// The process of creating the new generation for game of life
function generate() {

    //// Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < columns - 1; x++) {
        for (var y = 1; y < rows - 1; y++) {
            // Add up all the states in a 3x3 surrounding grid
            var neighbors = 0;
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    neighbors += board[x + i][y + j];
                }
            }

            //// A little trick to subtract the current cell's state since
            //// we added it in the above loop
            neighbors -= board[x][y];

            //// the logic for the target to ignite life with its position
            if (floor(xTarget / w) == x && floor(yTarget / w) == y) {
                next[x][y] = 1;
                //init();
                if (xTarget <= 50) {
                    for (var i = 0; i < columns; i++) {
                        for (var j = 0; j < rows; j++) {
                            //// Lining the edges with 0s
                            if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) board[i][j] = 0;
                            //// Filling the rest randomly
                            else board[i][j] = floor(random(2));
                            next[i][j] = 0;

                        }
                    }
                }

            }


            ////// Rules of Life////
            ///// Loneliness
            else if ((board[x][y] == 1) && (neighbors < 2)) next[x][y] = 0;
            ///// Overpopulation
            else if ((board[x][y] == 1) && (neighbors > 3)) next[x][y] = 0;
            ///// Reproduction
            else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;
            ///// Stasis
            else next[x][y] = board[x][y];

        }
    }



    //// Swap!
    var temp = board;
    board = next;
    next = temp;
}
