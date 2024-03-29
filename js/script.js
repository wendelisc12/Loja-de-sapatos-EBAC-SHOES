$("document").ready(()=> {
    $("#hamburguer").click(()=>{
        $("nav ul").animate({width:'toggle'},350)
    })

    $("#close-menu").click(()=>{
        $("nav ul").animate({width:'toggle'},350)
    })

    $("#slide-images").slick({autoplay: true, arrows: false})
})