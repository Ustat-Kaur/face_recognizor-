Webcam.set({
    width: 400,
    height: 400,
    image_format: "png",
    png_quality: 100,
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        console.log("capture_image");
    });
}
