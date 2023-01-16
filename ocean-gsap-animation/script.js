gsap.to("#sun", {
  x: 300,
  y: 500,
  scale: 2,
  backgroundColor: "#FFAD7A",
  scrollTrigger: {
    trigger: "#sun",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 10%",
    end: "bottom top",
    // synchroniser avec le scroll
    scrub: 1,
  },
});
gsap.to("#reflect", {
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#reflect",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 80%",
    end: "bottom top",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to(".outside", {
  backgroundColor: "#29295d",
  scrollTrigger: {
    trigger: ".outside",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 10%",
    end: "bottom top",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to("#cloud", {
  x: 1000,
  y: 100,
  scrollTrigger: {
    trigger: "#cloud",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 10%",
    end: "bottom top",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to("#fish", {
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  scrollTrigger: {
    trigger: "#fish",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 60%",
    end: "bottom top",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to("#medusa", {
  y: -400,
  // Ce qui change par rapport à avant
  scrollTrigger: {
    trigger: "#medusa",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 90%",
    end: "bottom 10%",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to("#right-border", {
  scrollTrigger: {
    trigger: "#right-border",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 10%",
    end: "bottom 80%",
    pin: true,
    // synchroniser avec le scroll
  },
});

gsap.to("#island-front", {
  y: -65,
  scrollTrigger: {
    trigger: "#island-front",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 60%",
    end: "bottom 80%",

    scrub: 1,
    // synchroniser avec le scroll
  },
});

gsap.to("#island-behind", {
  x: -65,
  scrollTrigger: {
    markers: true,
    trigger: "#island-behind",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger

    // position des marqueurs
    start: "top 30%",
    end: "bottom 80%",
    scrub: 1,
    // synchroniser avec le scroll
  },
});
