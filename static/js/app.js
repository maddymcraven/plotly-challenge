// updated!!!!! 

// Fetch the JSON data and console log it
d3.json("samples.json").then(function (data) {
    var samples = data.samples
    // var sample_values = []
    // var otu_labels = []
    // var otu_ids = []

    // for (var i = 0; i < samples.length; i++) {
    //     sample_values.push(samples[i].sample_values)
    //     otu_labels.push(samples[i].otu_labels)
    //     otu_ids.push(samples[i].otu_ids)
    // };

    // var number = 2
    // console.log(sample_values[number])
    // console.log(otu_labels[number])
    // console.log(otu_ids[number])

    // console.log(samples)

    // this needs to be the interactive part
    var number = "941"

    for (var i = 0; i < samples.length; i++) {
        if (samples[i].id === number) {
            sample_values = samples[i].sample_values;
            otu_labels = samples[i].otu_labels;
            otu_ids = samples[i].otu_ids;
        }
    }
    console.log(sample_values)
    console.log(otu_labels)
    console.log(otu_ids)
    
    // graphing 
    var trace1 = {
        y: sample_values,
        x: otu_ids,
        text: otu_labels,
        type: "bar",
        orientation: 'h'
    };
    
    var data = [trace1];
    
    var layout = {
        title: "'Bar' Chart",
        height: 400
    };
    
    Plotly.newPlot("sample-metadata", data, layout);
});

// Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);


// for(var i=0;i<samples.length;i++) {
//     console.log(samples[i].id)
//     // if(samples.id[i] == 941)
//     //     sample_values = samples[i].sample_values;
//     //     otu_labels = samples[i].otu_labels;
//     //     otu_ids = samples[i].otu_ids;
//     //     console.log(samples.id[i]);
// };



