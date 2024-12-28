<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { TextPlugin } from "gsap/TextPlugin";

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  let svgRef;
  onMount(() => {
    gsap.fromTo(
      ".about",
      {
        text: { value: "01000001" },
      },
      {
        text: { value: "ABOUT" },
        duration: 2, // Duration of the animation
        delay: 0.5,
        scrollTrigger: {
          trigger: svgRef, // The element we are watching
          start: "top 50%", // Animation starts when 80% of the element is in the viewport
          end: "bottom 20%", // Optional: end when 20% of the element is still in the viewport
          once: true, // Trigger animation only once
          markers: false, // Debugging: Show markers on the page
        },
      }
    );
    gsap.fromTo(
      svgRef.querySelectorAll("circle"),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1, // Stagger the animation for each circle
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: svgRef, // The element we are watching
          start: "top 80%", // Animation starts when 80% of the element is in the viewport
          end: "bottom 20%", // Optional: end when 20% of the element is still in the viewport
          once: true, // Trigger animation only once
          markers: false, // Debugging: Show markers on the page
        },
      }
    );
  });
</script>

<main>
  <section id="about" class="overflow-hidden">
    <div class="sub-grid grid columns-2">
      <div class="svg flex flex-col justify-between">
        <svg
          bind:this={svgRef}
          width="500"
          height="250"
          viewBox="0 0 500 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="col-span- w-full relative -top-4"
        >
          <circle cx="250" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-15" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-30" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-45" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-60" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-75" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-90" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-105" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-120" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-135" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-150" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-165" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-180" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-195" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-210" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-225" r="249.5" stroke="#FD4F4F" />
          <circle cx="250" cy="-240" r="249.5" stroke="#FD4F4F" />
        </svg>

        <h2
          class="text-primary-color font-semibold text-[64px] leading-none px-3 lg:text-[6.559vw]"
        >
          <span class="about">AOUT</span>
          <span class="block text-light-color">ME.</span>
        </h2>
      </div>
      <div
        class="about-me flex flex-col justify-end col-span-2 border-l border-l-white-opaque pt-[105px] px-[37px] xl:pt-[8vw] xl:px-[2.467vw] text-[18px] text-balance 2xl:text-[22px] lg:text-[1.816vw]"
      >
        <p>
          I am Bhavya Panchal, a passionate front-end developer currently
          working at eQuest Solutions. I graduated with a Bachelor of Computer
          Applications (BCA) in 2024 from Monark University. My deep passion for
          web development drives me to continuously explore and create
          innovative solutions that provide unique and seamless experiences for
          users.
        </p>
        <br />
        <p>
          With a strong foundation in computer science and a love for design, I
          specialize in crafting dynamic, user-friendly websites and
          applications. My goal is to stay ahead of industry trends and push the
          boundaries of what can be achieved in the digital world.
        </p>
      </div>
    </div>
  </section>
</main>
