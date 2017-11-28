var ary = [
	[0,1,1,0,0,0,0],
	[1,0,0,1,1,0,0],
	[1,0,0,0,0,0,1],
	[0,1,0,0,0,1,0],
	[0,1,0,0,0,0,0],
	[0,0,0,1,0,0,0],
	[0,0,1,0,0,0,0]
]

var visit = new Array(7);
var dfs = (v) => {
	visit[v] = 1;

	for(var i = 0; i < 7; i++) {
		if (visit[i] != 1 && ary[v][i] == 1) {
			console.log ((v+1) +" shift to "+ (i+1));  
			dfs(i);
		}
	}
}

dfs(0);
