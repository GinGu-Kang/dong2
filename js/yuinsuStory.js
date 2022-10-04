console.log("hi")
$(".hi").text("hihi")

//스크롤을 내려서 
let scrollRatio=0;
let screenNum=1;
let yuinsuMarginTop = 20;
let yuinsuWidth = 34;
let yuinsuVertical = 0;
let deepSeaLeft=0;
let seaLeft=-50;

// $(window).scroll(function () { 
// 	var scrollValue = $(document).scrollTop(); 
//     console.log(scrollValue); 
// });

$('html,body').mousewheel(function(e,d){

    if (screenNum == 1){
        firstScreenMove(d)
    }

    
    console.log(d)
    
    console.log(scrollRatio)
})

function firstScreenMove(scrollForce){
    
    yuinsuLayerMove(scrollForce)

    // if(scrollRatio>50){
    //     charactorLayerMove(scrollForce)
    // }
    // treeLayerMove(scrollForce)
    // stoneLayerMove(scrollForce)
    // deepSeaLayerMove(scrollForce)
    // charactorLayerMove(scrollForce)
    // seaLayerMove(scrollForce)
}



function yuinsuLayerMove(scrollForce){



    scrollForce = -scrollForce
    if(scrollForce < -3){
        scrollForce = -3
    }else if (scrollForce > 3){
        scrollForce = 3
    }
    

    let yuinsuMaxMarginTop = 20;
    
    if((scrollRatio < 100 & scrollRatio > 0) | (scrollRatio==100 & scrollForce <0) | ((scrollRatio==0 & scrollForce >0))){
        scrollRatio+=scrollForce
        deepSeaLeft+=(scrollForce*-0.5)
        seaLeft+=(scrollForce*0.5)
        if(scrollRatio>85){
            yuinsuMarginTop+= (scrollForce*1.3)
        }else if(scrollRatio>75){
            yuinsuMarginTop=yuinsuMarginTop
            
        }else if(scrollRatio>50){
            yuinsuMarginTop+= (scrollForce*-0.5)
            
        }
        
    }else if(scrollRatio >100){
        deepSeaLeft=-50
        seaLeft=0
        yuinsuMarginTop=yuinsuMaxMarginTop
        scrollRatio=100
    }else if(scrollRatio <0){
        deepSeaLeft=0
        seaLeft=-50
        scrollRatio=0
        yuinsuMarginTop=0
    }
    $('.yuinsu-layer').css('width',200-scrollRatio+'%')
    $('#yuinsu').css('margin-top',yuinsuMarginTop+'%')
    $('#sea').css('left',seaLeft+'%')
    $('#deepsea').css('left',deepSeaLeft+'%')
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
    scrollForce = scrollForce
    let yuinsuMaxMarginTop = 20;

    if(scrollRatio >85 & yuinsuVertical == 0){
        scrollForce= -scrollForce
    }

    if((yuinsuMarginTop < yuinsuMaxMarginTop & yuinsuMarginTop > 0) | (yuinsuMarginTop==yuinsuMaxMarginTop & scrollForce <0) | ((yuinsuMarginTop==0 & scrollForce >0))){
        yuinsuMarginTop+=(scrollForce*0.5)
    }else if(yuinsuMarginTop >yuinsuMaxMarginTop){
        yuinsuMarginTop=yuinsuMaxMarginTop
    }else if(yuinsuMarginTop <0){
        yuinsuMarginTop=0
    }



    $('#yuinsu').css('margin-top',yuinsuMarginTop+'%')
}
function seaLayerMove(scrollForce){
    let layer=$('sea-layer')
    console.log(layerWidth)
}