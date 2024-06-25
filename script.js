var navAction = document.querySelector("nav")

navAction.addEventListener("mouseenter", function(){
    var tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height : "19vh"
    })
    tl.to(".nav-part2 h5",{
        display : "block"
    })
    tl.from(".nav-part2 h5 span", {
        y:25,
        duration : 0.01,
        stagger: 0.01
    })
})


