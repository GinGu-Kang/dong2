console.log("hi")
$(".hi").text("hihi")

//스크롤을 내려서 
let scrollRatio=100;
let screenNum=1;


// $(window).scroll(function () { 
// 	var scrollValue = $(document).scrollTop(); 
//     console.log(scrollValue); 
// });

$('html,body').mousewheel(function(e,d){

    if (screenNum == 1){
        treeLayerMove()
    }
    scrollRatio+=d
    console.log(d)
    
    console.log(scrollRatio)
})

function firstScreenMove(scrollForce){
    
    
    treeLayerMove(scrollForce)
    stoneLayerMove(scrollForce)
    deepSeaLayerMove(scrollForce)
    charactorLayerMove(scrollForce)
    seaLayerMove(scrollForce)
}





function treeLayerMove(scrollForce){
    let layer=$('.tree-layer')
    console.log(layerWidth)
}
function stoneLayerMove(scrollForce){
    let layer=$('stone-layer')    
    console.log(layerWidth)
}
function deepSeaLayerMove(scrollForce){
    let layer=$('deepsea-layer')    
    console.log(layerWidth)
}
function charactorLayerMove(scrollForce){
    let layer=$('charactor-layer')    
    console.log(layerWidth)
}
function seaLayerMove(scrollForce){
    let layer=$('sea-layer')
    console.log(layerWidth)
}