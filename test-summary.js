var SummaryTool = require('node-summary');
var util = require('./util');

util.readFile('example.txt', function(err, content) {
    if (err) {
        console.log(err);
    }
    var title = 'Superconductivity in orbit: Scientists find new path to loss-free electricity';
    SummaryTool.summarize(title, content, function(err, summary) {
        if (err) {
            console.log('Something went wrong man!');
        }

        console.log(summary);

        console.log('Original Length ' + (title.length + content.length));
        console.log('Summary Length ' + summary.length);
        console.log('Summary Ratio: ' + (100 - (100 * (summary.length / (title.length + content.length)))));
    });

    // summary.getSortedSentences(content, 5, function(err, sorted_sentences) {
    //     if (err) {
    //         console.log('There was an error.'); // Need better error reporting
    //     }
    //     console.log(sorted_sentences);
    // });
});
