  d3.json("samples.json").then((importedData) => {
    var data = importedData;
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;

    function init(){
        updateBar(941);
    };
    
    function updateBar(sample_id){

        for(var i=0;i<samples.length;i++) {
            console.log(samples[i].id)
            // if(samples.id[i] == 941)
            //     sample_values = samples[i].sample_values;
            //     otu_labels = samples[i].otu_labels;
            //     otu_ids = samples[i].otu_ids;
            //     console.log(samples.id[i]);
        };
        
    
    //     var trace1 = {
    //         x: sample_values,
    //         y: otu_ids,
    //         text: otu_labels,
    //         type: "bar",
    //         orientation: "h"
    //       };
        
    //       // data
    //       var chartData = [trace1];
        
    //       // Apply the group bar mode to the layout
    //     //   var layout = {
    //     //     title: "Greek gods search results",
    //     //     margin: {
    //     //       l: 100,
    //     //       r: 100,
    //     //       t: 100,
    //     //       b: 100
    //     //     }
    //     //   };
        
    //     // Render the plot to the div tag with id "plot"
    //     Plotly.newPlot("sample-metadata", chartData);    
    // };
    
    init();
    };

};
