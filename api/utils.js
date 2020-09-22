class Utils {

    static FindLuggage = (flightList = []) => {
        const graph = Utils.PopulateGraph(flightList);
        const start = Utils.FindStart(graph);
        return [
            start,
            Utils.FindDestination({ graph, start })
        ];
    }

    static PopulateGraph = (flightList = []) => {
        return flightList.reduce((graph, [start, end]) => {
            graph[start] = end;
            return graph;
        }, {});
    }

    static FindStart = (graph = {}) => {
        const destinations = new Set (Object.values(graph));
        for (const start in graph) {
            if ( !destinations.has(start) ) return start;
        }
        throw new Error("Malformed flight list");
    }

    static FindDestination = ({ graph, start }) => {
        if ( !(start in graph) ) return start;
        return Utils.FindDestination({ graph, start: graph[start] });
    }
}

module.exports = {
    Utils
}