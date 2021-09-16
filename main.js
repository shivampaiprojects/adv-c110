Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
 var camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="xxx" src="' + data_uri + '">';
    });

}

classifier = ml5.imageClassifier('MobileNet',modelLoad());
function modelLoad(){
    console.log('loaded')
}

function check() {
    img = document.getElementById('xxx');
    classifier.classify(img,gotResults());
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        
    }
}