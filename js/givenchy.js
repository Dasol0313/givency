$(document).ready(function(){
    panelControl($(".panelBtn"));
    justToggle(".toggleWish");
    justToggle("#filtersPanel fieldset input[type='button']");
    dataSrc();
    countComponent();
    remove();
    detailCheckList();
    recomendimg();
    bag_countComponent();
    accControl();
    mobileFnb();
});

function mobileFnb(){
    var fnb = $("header nav ul.mobileFNB");
    $("header nav > input[type='button']").click(function(){
        $(this).toggleClass("active");
        fnb.toggleClass("active");
    });
}

function panelControl(btn){
    var currentPanel = null;
    btn.click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(this).parents().removeClass("active"); 
    });
}

function toggleActive(target){
    $(target).click(function(){
        switch(target){
            case ".btn_filter":
                $("#sortPanel").toggleClass("active");
                $(".btn_filter").toggleClass("active");
                break;
            default:
                $(this).toggleClass("active");
                break;
        }
    });
}

function detailCheckList(){
    $(".checkBoxs li label[for='checkAll']").click(function(){
        var currentStatus = $("#checkAll").prop("checked");
        if(currentStatus){
            $(this).closest("li").siblings("li").children("input").removeAttr("checked",false);
        }else{
            $(this).closest("li").siblings("li").children("input").attr("checked",true);
        }
    });
}

function countComponent(){
    $(".countComponent > input[value='subtract']").click(function(){        
        var count = $(this).parent(".countComponent").children("span").text();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".countComponent").children("span").text(num);
    });

    $(".countComponent > input[value='add']").click(function(){
        var count = $(this).parent(".countComponent").children("span").text();
        var num = Number(count);

        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent(".countComponent").children("span").text(num);
    });
}

function bag_countComponent(){
    $(".bag_countComponent > input[value='subtract']").click(function(){        
        var count = $(this).parent(".bag_countComponent").children("span").text();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".bag_countComponent").children("span").text(num);
    });

    $(".bag_countComponent > input[value='add']").click(function(){
        var count = $(this).parent(".bag_countComponent").children("span").text();
        var num = Number(count);

        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent(".bag_countComponent").children("span").text(num);
    });
}

function remove(){
    $(".countComponent .remove > input[type='button']").mouseover(function(){
        $(this).parent().addClass("active");
    });
    $(".countComponent .remove > input[type='button']").mouseleave(function(){
        $(this).parent().removeClass("active");
    });
}


function dataSrc(){
    $(".products img").mouseover(function(){ 
        $(this).attr('src', $(this).attr('src').replace(".png","_hover.png"));
    });
    $(".products img").mouseleave(function(){ 
        $(this).attr('src', $(this).attr('src').replace("_hover.png",".png"));
    });

}
function recomendimg(){
    $(".recommend_products img").mouseover(function(){ 
        $(this).attr('src', $(this).attr('src').replace(".png","_hover.png"));
    });
    $(".recommend_products img").mouseleave(function(){ 
        $(this).attr('src', $(this).attr('src').replace("_hover.png",".png"));
    });

}
function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}

function accControl(){
    $(".accordion_box li h3").click(function(){
        $(this).siblings().slideToggle();
        $(this).toggleClass("active");
    });
}