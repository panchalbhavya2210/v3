<script>
  import { fade } from "svelte/transition";
  let showContent = false;

  function onTransitionEnd() {
    showContent = true;
  }
</script>

<div class="wrapper">
  <!-- Rectangles Cover Animation -->
  <div class="rectangles">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>

  <!-- Main Content -->
  {#if showContent}
    <div class="content" transition:fade={{ delay: 500, duration: 800 }}>
      <h1>Gaming Portfolio</h1>
      <p>Welcome to my portfolio, where design meets gaming aesthetics!</p>
      <button class="cta-button">Explore</button>
    </div>
  {/if}
</div>

<style>
  /* Wrapper styling */
  .wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Rectangles setup */
  .rectangles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 2;
  }

  .rectangle {
    flex: 1;
    background: linear-gradient(to bottom, #ff0066, #550033);
    animation: slideOut 1.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  }

  .rectangle:nth-child(1) {
    animation-delay: 0s;
  }

  .rectangle:nth-child(2) {
    animation-delay: 0.3s;
    background: linear-gradient(to bottom, #ff3366, #771144);
  }

  .rectangle:nth-child(3) {
    animation-delay: 0.6s;
    background: linear-gradient(to bottom, #ff6699, #992255);
  }

  /* Slide-out animation */
  @keyframes slideOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  /* Content styling */
  .content {
    position: relative;
    z-index: 3;
    text-align: center;
    color: #fff;
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 1s ease,
      transform 1s ease;
  }

  .content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow:
      0 0 20px rgba(255, 0, 102, 0.8),
      0 0 40px rgba(255, 0, 102, 0.6);
  }

  .content p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 2rem;
  }

  .content .cta-button {
    padding: 1rem 2rem;
    background: #ff0066;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow:
      0 0 10px rgba(255, 0, 102, 0.8),
      0 0 20px rgba(255, 0, 102, 0.6);
  }

  .content .cta-button:hover {
    background: #ff3366;
    transform: scale(1.1);
    box-shadow:
      0 0 15px rgba(255, 51, 102, 0.9),
      0 0 30px rgba(255, 51, 102, 0.7);
  }
</style>
