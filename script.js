var t1 = gsap.timeline();

t1.from("#nav", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
})
  .from("#circle", {
    opacity: 0,
    scale: 0,
  })
  .from("#img1", {
    rotate: -20,
    opacity: 0,
    duration: 0.5,
    y: 50,
    x: -50,
  })
  .from("#page1 h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  })
  .from("#page1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  })
  .from("#page1 h5", {
    x: -50,
    opacity: 0,
    duration: 0.3,
  });
gsap.from("#page2 #left,#page2 #right", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2 #left,#page2 #right",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 10%",
  },
});
gsap.from("#page3  #left,#page3 #right,#page3 h1,#page3 h3", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page3  #left,#page3 #right,#page3 h1,#page3 h3",
    scroller: "body",
    markers: false,
    start: "top 60%",
    end: "top 10%",
  },
});
document
  .querySelector("#page3 #left")
  .addEventListener("mouseenter", function () {
    gsap.to(this, { scale: 1.2 });
  });

document
  .querySelector("#page3 #left")
  .addEventListener("mouseleave", function () {
    gsap.to(this, { scale: 1 });
  });

document
  .querySelector("#page3 #right")
  .addEventListener("mouseenter", function () {
    gsap.to(this, { scale: 1.2 });
  });

document
  .querySelector("#page3 #right")
  .addEventListener("mouseleave", function () {
    gsap.to(this, { scale: 1 });
  });

gsap.from("#page4 #second img", {
  rotation: -60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4",
    start: "top 60%",
    end: "top 10%",
    markers: false,
  },
});
