class Graph{
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for (const vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
    bfsTraversal(startVertex) {
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;
    
        while (queue.length) {
          const currentVertex = queue.shift();
          console.log(currentVertex);
    
          for (const neighbor of this.adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          }
        }
      }
      dfsTraversal(startVertex) {
        const visited = {};
    
        const dfsHelper = (vertex) => {
          console.log(vertex);
          visited[vertex] = true;
    
          for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
              dfsHelper(neighbor);
            }
          }
        };
    
        dfsHelper(startVertex);
      }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.hasEdge("A","C"));
// graph.removeEdge("A","B")
// graph.display()
// graph.removeVertex("B")
// graph.display()
console.log("BFS Traversal:");
graph.bfsTraversal("B");
console.log('dfs')
graph.dfsTraversal("A");