/*Implementation of Graph DataStructure
* -With Adjacent List*/

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertices(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

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
}

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

console.log(graph.toString())
