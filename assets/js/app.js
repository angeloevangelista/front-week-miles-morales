document.addEventListener("DOMContentLoaded", onDomContentLoaded);

function onDomContentLoaded() {
  document.querySelector(".hamburger-menu").onclick = () =>
    alert("Faço nada ainda não 😅");

  const timeLine = new TimelineMax();

  timeLine
    .fromTo(
      ".bg-loader",
      1,
      {
        width: "100%",
      },
      {
        width: "0%",
        delay: 2,
        ease: Expo.easeInOut,
      }
    )
    .fromTo(
      ".bg-video",
      1,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=1"
    )
    .fromTo(
      ".logo",
      0.75,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=0.5"
    )
    .fromTo(
      ".nav-list",
      0.75,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=0.5"
    )
    .fromTo(
      ".nav-social",
      0.75,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=0.5"
    )
    .fromTo(
      ".container-item-1",
      2,
      {
        x: 300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=1"
    )
    .fromTo(
      ".container-item-2",
      2,
      {
        x: -300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=2"
    );
}
