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
        duration : 0.01,
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
        duration : 0.01,
        stagger: {
            amount:0.3
        }
    })
})


}

// navAnimation()

function btnAnimation(){
    let btn = document.querySelector("button")

btn.addEventListener("mouseenter", function(){
    gsap.to("nav button", {
        backgroundColor: "#111"
    })
    gsap.to("nav button #btn-div", {
        backgroundColor : "#0ba34e",
        borderRadius : "10px",
        height:"1.8vw",
        width : "1.8vw"
    })
    gsap.to("nav button svg", {
        y:6,
        x:-1
    })
})

btn.addEventListener("mouseleave", function(){
    gsap.to("nav button", {
        backgroundColor:"#0ba34e"
    })
    gsap.to("nav button #btn-div",{
        backgroundColor : "#0ba34e",
        borderRadius : "0px",
        height: "0vw",
        width : "0vw",
    })
    gsap.to("nav button svg", {
        y:-8,
        x:-1
    })
})
}

//btnAnimation()

function page2Animation() {
let rightElems = document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to(elem.childNodes[3], {
            opacity : 1,
            scale : 1
        })
    })
    elem.addEventListener("mouseleave", function() {
        gsap.to(elem.childNodes[3], {
            opacity : 0, 
            scale : 0
        })
    })
    elem.addEventListener("mousemove", function(dets) {
        gsap.to(elem.childNodes[3], {
            x : dets.x -  elem.getBoundingClientRect().x - 40,
            y : dets.y - elem.getBoundingClientRect().y - 125
        })
    })
})
}

// page2Animation()

function page3Animation(){
    let page3Center = document.querySelector(".page3-center")
    let page3Video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function(){
        page3Video.play()
    // page3Video.style.position = "fixed"
        gsap.to(page3Video, {
            transform : "scaleX(1) scaleY(1)",
            opacity : 1,
            borderRadius : 0
        })
    })
    page3Video.addEventListener("click", function() {
        page3Video.pause()
        gsap.to(page3Video, {
            transform : "scaleX(0.7) scaleY(0)",
            opacity : 0,
            borderRadius : "30px"
        })
    })
}

page3Animation()