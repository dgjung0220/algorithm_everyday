var min = 25;
var map = [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,1,1],
    [1,0,1,0,0],
    [1,1,1,1,1]
]

var dfs = (x,y,temp) => {
    console.log(x +',' + y + ' : ' + temp);
    if(x == 4 && y == 4) {
        if (min > 1) {
            min = temp;
        }

        console.log(min);
    }

    map[x][y] = 0;
    //up
    if(y>0 && (map[x][y-1] !== 0)) {
        dfs(x, (y-1), (temp+1));
    }
    //down
    if(y < 4 && (map[x][y+1] !==0)) {
        dfs(x, (y+1), (temp+1));
    }
    //left
    if(x>0 && (map[x-1][y] !== 0)) {
        dfs((x-1), y, (temp+1));
    }
    //right
    if(x<4 && (map[x+1][y] !== 0)) {
        dfs((x+1), y, (temp+1));
    }
    map[x][y] = 1;
}

dfs(0,0,0);