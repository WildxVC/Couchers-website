var tl = gsap.timeline()

tl.from("nav",{
    opacity: 0,
    duration:1
})

tl.from(".nav-main,#logo-letter,.nav-links,.nav-actions", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger:0.5
})

tl.from(".right", {
    // x:100,
    opacity: 0,
    x: 100,
    duration: 1

})
tl.from(".hero-texts,.hero-texts h2,.hero-texts h2 span", {
    x: -100,
    opacity: 0,
    stagger: 0.25
})

tl.from(".hero-actions", {
    y: 100,
    opacity: 0,
    // stagger:1
})