function navAnimation() {
    

let navAction = document.querySelector(".nav-part2")
navAction.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h4",{
        color : "grey"
    })
    tl.to("#nav-bottom",{
        height : "19vh"
    })
    tl.to(".nav-part2 h5",{
        display : "block"
    })
    tl.from(".nav-part2 h5 span", {
        y:25,
        // duration : 0.01,
        stagger: {
            amount:0.3
        }
    })
})

navAction.addEventListener("mouseleave", function(){
    let tl2 = gsap.timeline()
    tl2.to(".nav-part2 h4",{
        color : "white"
    })
    tl2.to("#nav-bottom",{
        height : "0vh",
        duration:0.3
    })
    tl2.to(".nav-part2 h5",{
        display : "none",
        duration:0.3
    })
    tl2.from(".nav-part2 h5 span", {
        y:25,
        // duration : 0.01,
        stagger: {
            amount:0.3
        }
    })
})


}

navAnimation()

let btn = document.querySelector("button")

btn.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
    tl.to("nav button", {
        backgroundColor :"#111"
    })
    tl.to("nav button svg", {
        backgroundColor : "#0ba34e",
        borderRadius :"50%",
        height : "1.8vw",
        width :"1.8vw",
        stagger: {
            amount : 0.01
        }
    })
})

btn.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
    tl.to("nav button", {
        backgroundColor :"#0ba34e"
    })
    tl.to("nav button svg", {
        height: "1vw",
        width:"1vw"
    })
})