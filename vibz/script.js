gsap.to("#artistes", {
  //   scrollTrigger: {
  //     trigger: "#artistes",
  //     // afficher les marqueurs de ScrollTrigger
  //     // utile pour débugger
  //     // position des marqueurs
  //     start: "top bottom",
  //     end: "bottom top",
  //     // pin: true,
  //     // synchroniser avec le scroll
  //   },
});

const dancerScrollTriggerConfiguration = {
  trigger: "#artistes",
  // afficher les marqueurs de ScrollTrigger
  // utile pour débugger

  // position des marqueurs
  start: "top 90%",
  end: "bottom 100%",
  // synchroniser avec le scroll
  scrub: 1,
};

gsap.from("#dancer1", {
  x: -600,
  y: -600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer2", {
  x: 0,
  y: -600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer3", {
  x: 600,
  y: -600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer4", {
  x: -600,
  y: 0,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer5", {
  x: 600,
  y: 0,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer6", {
  x: -600,
  y: 600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer7", {
  x: 0,
  y: 600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#dancer8", {
  x: 600,
  y: 600,
  scrollTrigger: dancerScrollTriggerConfiguration,
});

gsap.from("#final", {
  scale: 0,
  scrollTrigger: dancerScrollTriggerConfiguration,
});
