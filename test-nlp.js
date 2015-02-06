
var util = require('./util');
var _ = require('underscore');

var nlpsum = require('nlpsum');
var sum = new nlpsum();

// var sources = ['example-01.txt', 'example-02.txt', 'example-03.txt', 'example-04.txt'];
var sources = ['example-hindu.txt'];

_.each(sources, function(filename) {
    util.readFile(filename, function(err, content) {
        if (err) {
            console.log(err);
        }
        var types = ['fractal', 'wordFrequency', 'sinFrequency', 'sinWordFrequency'];
        _.each(types, function(type) {
            generateSummary(filename, content, type);
        });
    });
});

function generateSummary(filename, content, type) {
    switch (type) {
        default:
        case 'fractal':
            var summary = sum.fractalSummary(content, 3);
            break;
        case 'wordFrequency':
            var summary = sum.wordFrequencySummary(content, 3);
            break;
        case 'sinFrequency':
            var summary = sum.sinFrequencySummary(content, 3);
            break;
        case 'sinWordFrequency':
            var summary = sum.sinWordFrequencySummary(content, 5);
            break;
    }

    console.log('\n\n-------------- [' + filename + '][' + type + '] --------------');
    console.log(summary.text);

    util.writeFile(filename + '-' + type + '-data.json', JSON.stringify(summary, null, 4));
    util.writeFile(filename + '-' + type + '-summary.txt', summary.text);
    util.writeFile(filename + '-' + type + '-tagged.json', JSON.stringify(sum.tag(summary.text), null, 4));
}
