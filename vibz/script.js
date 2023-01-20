// pin the background of artistes section

gsap.to("#artistes", {
  scrollTrigger: {
    trigger: "#artistes",
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

// create the timeline for coming portrait

const portraitsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#artistes",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  },
});

//FromTo for each animations of the timeline

portraitsTimeline.fromTo(
  "#bestArtistes",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

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

// portrait back section

const retourPortraitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger",
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
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

// explosion portrait exit

const explosionPortraitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#artistes",
    start: "bottom 90%",
    end: "bottom 80%",
    scrub: 1,
  },
});

explosionPortraitTimeline.to(
  "#dancer1",
  {
    x: -162,
    y: -100,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer2",
  {
    x: -300,
    y: -100,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer3",
  {
    x: -438,
    y: -100,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer4",
  {
    x: 138,
    y: -300,
  },
  0
);

explosionPortraitTimeline.to(
  "#final",
  {
    y: -300,
  },
  0
);

explosionPortraitTimeline.to(
  "#final p",
  {
    opacity: 0,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer5",
  {
    x: -138,
    y: -300,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer6",
  {
    x: 438,
    y: -500,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer7",
  {
    x: 300,
    y: -500,
  },
  0
);

explosionPortraitTimeline.to(
  "#dancer8",
  {
    x: 162,
    y: -500,
  },
  0
);

// pin of the background price section

gsap.to("#price", {
  scrollTrigger: {
    trigger: "#price",
    start: "top top",
    end: "bottom 75%",
    pin: true,
  },
});

// timeline of mouvement price block monthly/annual

const priceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#price",
    start: "top top",
    end: "bottom 80%",
    scrub: 1,
  },
});

// movement to of block

priceTimeline.fromTo(
  "#choicePlan",
  {
    x: -1200,
  },
  {
    x: 0,
    y: 0,
  },
  0
);

priceTimeline.fromTo(
  "#introPrice",
  {
    x: 1200,
  },
  {
    x: 0,
    y: 0,
  },
  0
);

priceTimeline.to(
  ".blockVideo",
  {
    opacity: 0,
  },
  0
);

priceTimeline.to(
  "#annual",
  {
    x: 400,
    y: 54,
  },
  1
);

priceTimeline.to(
  "#monthly",
  {
    x: -400,
    y: -274,
  },
  1
);

priceTimeline.to(
  ".blockVideo",
  {
    opacity: 1,
    y: -548,
  },
  1
);

priceTimeline.to(
  "#annual",
  {
    x: 0,
    y: 274,
  },
  2
);

priceTimeline.to(
  "#monthly",
  {
    x: 0,
    y: -404,
  },
  2
);

priceTimeline.to(
  ".blockVideo",
  {
    opacity: 0,
  },
  2
);

// function onStart for timer shadow

const timerTimeline = gsap.timeline({});

function onVideoStart() {
  timerTimeline.to(
    "#shadow1",
    {
      duration: 2.5,
      opacity: 1,
    },
    0
  );

  timerTimeline.to(
    "#shadow2",
    {
      duration: 2.5,
      opacity: 1,
    },
    2.5
  );

  timerTimeline.to(
    "#shadow1",
    {
      duration: 2.5,
      opacity: 0,
    },
    2.5
  );

  timerTimeline.to(
    "#shadow3",
    {
      duration: 2.5,
      opacity: 1,
    },
    5
  );

  timerTimeline.to(
    "#shadow2",
    {
      duration: 2.5,
      opacity: 0,
    },
    5
  );

  timerTimeline.to(
    "#shadow4",
    {
      duration: 2.5,
      opacity: 1,
    },
    7.5
  );

  timerTimeline.to(
    "#shadow3",
    {
      duration: 2.5,
      opacity: 0,
    },
    7.5
  );

  timerTimeline.to(
    "#shadow5",
    {
      duration: 2.5,
      opacity: 1,
    },
    10
  );

  timerTimeline.to(
    "#shadow4",
    {
      duration: 2.5,
      opacity: 0,
    },
    10
  );

  timerTimeline.to(
    "#shadow6",
    {
      duration: 2.5,
      opacity: 1,
    },
    12.5
  );

  timerTimeline.to(
    "#shadow5",
    {
      duration: 2.5,
      opacity: 0,
    },
    12.5
  );
  timerTimeline.to(
    "#shadow6",
    {
      duration: 2.5,
      opacity: 0,
    },
    15
  );
}
