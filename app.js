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
        };
        
    };

};

