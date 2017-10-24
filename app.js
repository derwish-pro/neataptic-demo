var Node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.Architect;
var Trainer = neataptic.Trainer;

network = Architect.Perceptron(3, 4, 1);

var trainingSet = [
    { input: [0.1, 0.1, 1], output: [0.1] },
    { input: [0.2, 0.2, 1], output: [0.4] },
    { input: [0.3, 0.3, 1], output: [0.9] },
    { input: [0.4, 0.2, 1], output: [0.8] },
    { input: [0.1, 0.2, 1], output: [0.2] },
    { input: [0.1, 0.3, 1], output: [0.3] },
    { input: [0.2, 0.3, 1], output: [0.6] },
    { input: [0.0, 0.1, 1], output: [0.0] },

    { input: [0.1, 0.1, 0], output: [0] },
    { input: [0.2, 0.2, 0], output: [0] },
    { input: [0.3, 0.3, 0], output: [0] },
    { input: [0.4, 0.2, 0], output: [0] },
    { input: [0.1, 0.2, 0], output: [0] },
    { input: [0.1, 0.3, 0], output: [0] },
    { input: [0.2, 0.3, 0], output: [0] },
    { input: [0.0, 0.1, 0], output: [0] },
];

network.train(trainingSet, {
    log: 10,
    error: 0.00003,
    iterations: 10000,
    rate: 0.3
});

console.log(network.activate([0.2, 0.4, 1]));

drawGraph(network.graph(400, 400), '.draw', false);