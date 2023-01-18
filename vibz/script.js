// pin le background de la section artiste

gsap.to("#artistes", {
  scrollTrigger: {
    trigger: "#artistes",
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

// creation de la timeline des portraits

const portraitsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#artistes",
    start: "top top",
    end: "bottom 70%",
    scrub: 1,
  },
});

//FromTo pour chaque animation de la timeline

portraitsTimeline.fromTo(
  "#dancer1",
  {
    x: -600,
    y: -600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer2",
  {
    x: 0,
    y: -600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer3",
  {
    x: 600,
    y: -600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer5",
  {
    x: 600,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer8",
  {
    x: 600,
    y: 600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer7",
  {
    x: 0,
    y: 600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer6",
  {
    x: -600,
    y: 600,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#dancer4",
  {
    x: -600,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  }
);

portraitsTimeline.fromTo(
  "#final",
  {
    scale: 0,
  },
  {
    scale: 1,
  }
);

const retourPortraitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger",
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
    markers: true,
  },
});

retourPortraitTimeline.to(
  "#dancer1",
  {
    x: 238,
    y: 200,
  },
  0
);

retourPortraitTimeline.to(
  "#dancer1 p",
  {
    opacity: 0,
  },
  0
);

retourPortraitTimeline.to(
  "#dancer2",
  {
    y: 200,
  },
  1
);

retourPortraitTimeline.to(
  "#dancer2 p",
  {
    opacity: 0,
  },
  1
);

retourPortraitTimeline.to(
  "#dancer3",
  {
    x: -238,
    y: 200,
  },
  2
);

retourPortraitTimeline.to(
  "#dancer3 p",
  {
    opacity: 0,
  },
  2
);

retourPortraitTimeline.to(
  "#dancer5",
  {
    x: -238,
  },
  3
);

retourPortraitTimeline.to(
  "#dancer5 p",
  {
    opacity: 0,
  },
  3
);

retourPortraitTimeline.to(
  "#dancer8",
  {
    x: -238,
    y: -200,
  },
  4
);

retourPortraitTimeline.to(
  "#dancer8 p",
  {
    opacity: 0,
  },
  4
);

retourPortraitTimeline.to(
  "#dancer7",
  {
    y: -200,
  },
  5
);

retourPortraitTimeline.to(
  "#dancer7 p",
  {
    opacity: 0,
  },
  5
);

retourPortraitTimeline.to(
  "#dancer6",
  {
    x: 238,
    y: -200,
  },
  6
);

retourPortraitTimeline.to(
  "#dancer6 p",
  {
    opacity: 0,
  },
  6
);

retourPortraitTimeline.to(
  "#dancer4",
  {
    x: 238,
  },
  7
);

retourPortraitTimeline.to(
  "#dancer4 p",
  {
    opacity: 0,
  },
  7
);
// pin le background de la section price

gsap.to("#price", {
  scrollTrigger: {
    trigger: "#price",
    start: "top top",
    end: "bottom 75%",
    pin: true,
  },
});

// timeline des deplacements des blocks de prix

const priceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#price",
    start: "top top",
    end: "bottom 80%",
    scrub: 1,
    //markers: true,
  },
});

// mouvement to des blocks

priceTimeline.to(
  "#annual",
  {
    x: 300,
    y: 54,
  },
  0
);

priceTimeline.to(
  "#monthly",
  {
    x: -300,
    y: -274,
  },
  0
);

priceTimeline.to(
  "#annual",
  {
    x: 0,
    y: 274,
  },
  1
);

priceTimeline.to(
  "#monthly",
  {
    x: 0,
    y: -404,
  },
  1
);
