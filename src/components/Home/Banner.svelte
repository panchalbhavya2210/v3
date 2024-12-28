<script>
  import { Marquee } from "@selemondev/svelte-marquee";
  import "@selemondev/svelte-marquee/dist/style.css";
  import gsap from "gsap";
  import { onMount } from "svelte";

  let date = new Date();
  let hour = date.getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Morning";
  } else if (hour < 18) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }

  onMount(() => {
    // Check if the animation has already been played
    const animationPlayed = localStorage.getItem("animationPlayed");

    if (!animationPlayed) {
      // Save to localStorage to prevent re-playing
      localStorage.setItem("animationPlayed", "true");

      const stop1 = document.querySelector("#stop1");
      const stop2 = document.querySelector("#stop2");
      const stop3 = document.querySelector("#stop3");
      const stop4 = document.querySelector("#stop4");

      // Animate the gradient stops
      gsap.fromTo(
        stop1,
        { stopColor: "black", stopOpacity: 0 },
        {
          stopColor: "#FD4F4F",
          stopOpacity: 1,
          duration: 2,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        stop3,
        { stopColor: "black", stopOpacity: 0 },
        {
          stopColor: "#FD4F4F",
          stopOpacity: 1,
          duration: 2,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        stop2,
        { stopColor: "black", stopOpacity: 0 },
        {
          stopColor: "#972F2F",
          stopOpacity: 0,
          duration: 2,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        stop4,
        { stopColor: "black", stopOpacity: 0 },
        {
          stopColor: "#972F2F",
          stopOpacity: 0,
          duration: 2,
          ease: "power1.inOut",
        }
      );

      const paths = document.querySelectorAll(".paths-home");
      paths.forEach((path) => {
        const pathLength = path.getTotalLength();

        gsap.fromTo(
          path,
          { strokeDasharray: pathLength, strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power1.inOut",
            opacity: 1,
          }
        );
      });
    }
  });
</script>

<main>
  <section
    class="banner relative w-full h-full overflow-hidden mt-[55px] border-b border-b-white-opaque"
  >
    <div
      class="relative h-full flex lgmin:col-span-3 lgmin:grid lgmin:grid-cols-3 home-grid"
    >
      <div class="w-full hidden lgmin:flex items-end">
        <svg
          width="503"
          height="922"
          viewBox="0 0 503 922"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-full"
        >
          <path
            d="M2 20.5V0H501V129L2 20.5Z"
            fill="url(#paint0_linear_0_1)"
            fill-opacity="0.84"
            class="paths-home"
          />
          <path d="M502 921.5L1 813" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 849.5L1 741" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 777.5L1 669" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 705.5L1 597" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 633.5L1 525" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 561.5L1 453" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 489.5L1 381" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 417.5L1 309" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 345.5L1 237" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 273.5L1 165" stroke="#4A4A4A" class="paths-home" />
          <path d="M502 201.5L1 93" stroke="#4A4A4A" class="paths-home" />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="2"
              y1="63.5"
              x2="501"
              y2="63.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD4F4F" id="stop1" />
              <stop
                offset="1"
                stop-color="#972F2F"
                stop-opacity="0"
                id="stop2"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        class="relative w-full lgmin:border-x lgmin:border-x-white-opaque lgmin:px-3"
      >
        <div class="my-details relative">
          <h1
            class="text-primary-color text-header-font uppercase leading-none font-semibold xl:text-[4.267vw] 2xl:text-[3.933vw] my-3"
          >
            {greeting} <br /> Traveller.
          </h1>
          <h2
            class="text-light-color text-header-font uppercase leading-none font-semibold xl:text-[4.933vw] 2xl:text-[5.933vw] my-3"
          >
            <span>I AM</span>
            <span class="text-primary-color block">BHAVYA</span>
            <span>PANCHAL.</span>
          </h2>
        </div>

        <div
          class="marquee text-primary-color border-y border-y-primary-color absolute left-0 text-[33px] font-bold my-3"
        >
          <Marquee innerClassName="[--duration:15s] ">
            <h3>WEB DEV • WEB DEV • WEB DEV • WEB DEV •</h3>
          </Marquee>
        </div>

        <div class="relative top-24 text-center">
          <a href="#about">
            <button class="text-light-color bg-primary-color after-btn">
              ROAM
            </button>
          </a>
        </div>
      </div>
      <div
        class="w-full flex lg:justify-end lg:border-l lg:border-l-white-opaque sm:hidden lg:overflow-hidden"
      >
        <svg
          width="503"
          height="924"
          viewBox="0 0 503 924"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-full lg:w-auto lg:scale-x-[3]"
        >
          <path
            d="M2 130.5V3V0.5L501 2V24L2 130.5Z"
            fill="url(#paint1_linear_0_1)"
          />
          <path d="M1 923.5L502 815" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 851.5L502 743" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 779.5L502 671" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 707.5L502 599" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 635.5L502 527" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 563.5L502 455" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 491.5L502 383" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 419.5L502 311" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 347.5L502 239" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 275.5L502 167" stroke="#4A4A4A" class="paths-home" />
          <path d="M1 203.5L502 95" stroke="#4A4A4A" class="paths-home" />
          <defs>
            <linearGradient
              id="paint1_linear_0_1"
              x1="2"
              y1="65.5"
              x2="501"
              y2="65.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#972F2F" stop-opacity="0" id="stop4" />
              <stop offset="1" stop-color="#FD4F4F" id="stop3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
</main>

<style>
  .banner {
    height: calc(100vh - 50px);
  }
  .after-btn {
    position: relative;
    color: #662424;
    font-size: 44px;
    font-weight: bold;
    padding: 0 20px;
    line-height: normal;
  }
  .after-btn:active {
    transform: translateY(3px);
  }
  .after-btn:active::after {
    display: none;
  }
  .after-btn:hover::after {
    bottom: 0;
    right: 0;
    z-index: -55;
  }
  .after-btn::after {
    transition: 0.3s;
    position: absolute;
    content: "";
    bottom: -8px;
    right: -8px;
    width: 100%;
    height: 100%;
    background-color: #662424;
    z-index: -1;
  }
</style>
