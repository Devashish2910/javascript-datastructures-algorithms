/*Implementation of Graph DataStructure
* -With Adjacent List*/

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }

    // add vertices
    addVertices(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    // add edges for existing vertices
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    // print graph in adjacent list form
    toString() {
        let s = "";
        for(let curVer of this.vertices) {
            s += curVer + " => ";
            for(let curVerEdge of this.adjList.get(curVer)) {
                s += curVerEdge + " ";
            }
            s += "\n"
        }

        return s;
    }

    // helper method for color initialization in BFS
    initializeColor() {
        let vert = [];
        for (let cur of this.vertices) {
            vert[cur] = 'WHITE';
        }
        return vert;
    }

    // Breadth First Search Traversal
    bfs(v, callback) {
        const color = this.initializeColor();
        const queue = [];
        queue.push(v);

        while (queue.length > 0) {
            const currentVertex = queue.shift();  // Remove from start
            const neighbours = this.adjList.get(currentVertex);
            color[currentVertex] = "GREY";

            for (let curNeighbor of neighbours) {
                if (color[curNeighbor] === "WHITE") {
                    color[curNeighbor] = "GREY";
                    queue.push(curNeighbor);
                }
            }

            color[currentVertex] = "BLACK";

            if (callback) {
                callback(currentVertex);
            }
        }
    }

    // Method for finding distance of all vertices from a vertex
    shortestPathA(v) {
        let color = this.initializeColor();
        let queue = [];
        queue.push(v);
        let distance = [];
        let pred = [];

        for (let vertex of this.vertices) {
            distance[vertex] = 0;
            pred[vertex] = null;
        }

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            color[currentVertex] = "grey";
            const neighbours = this.adjList.get(currentVertex);

            for (let neighbor of neighbours) {
                if (color[neighbor] === "WHITE") {
                    color[neighbor] = "grey";
                    distance[neighbor] += distance[currentVertex] + 1;
                    pred[neighbor] = currentVertex;
                    queue.push(neighbor);
                }
            }
            color[currentVertex] = "black"
        }

        return {
            distance,
            predecessors: pred
        }
    }
}

/*------------------------------------------------------------*/
console.log("Core Graph Methods")
const graph = new Graph();
const myVertices = ['A','B','C','D','E','F','G','H','I'];

myVertices.forEach(cur => {
    graph.addVertices(cur);
});

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

const print = (el) => {
    console.log(el);
};

graph.bfs('A', print);
console.log("\n");
/*------------------------------------------------------------*/
// Find distance of all vertices from a vertex and predecessors of all vertices
console.log("Find distance of all vertices from a vertex and predecessors of all vertices")
const res = graph.shortestPathA('A');
console.log(res);
console.log("\n");
/*------------------------------------------------------------*/
// Find a path of all vertices from a vertex

console.log("Find a path of all vertices from a vertex")
const paths = (from, predList) => {
    for (let curVertex of graph.vertices) {
        const to = curVertex;
        const stack = [];
        let s = "";

        for (let v = to; v !== from; v = predList[v]) {
            stack.push(v);
        }
        s += from;

        while (stack.length > 0) {
            s +=  " - " + stack.pop();
        }

        if (s.length > 1) {
            console.log(s);
        }
    }
};

paths('A', res.predecessors);
console.log("\n");
/*------------------------------------------------------------*/
