<script>
  import Logo from "../images/logo.svg";
</script>

<main>
  <div
    class="hidden loader fixed top-0 w-full h-full left-0 z-50 bg-primary-color flex justify-center items-center"
  >
    <div class="">
      <span class="text-header-font font-bold">loading...</span>
      <span class="block text-right font-bold">awesomeness</span>
    </div>
  </div>
  <header
    id="header"
    class="hidden lgmin:grid h-full items-stretch border-b border-b-white-opaque lgmin:grid-cols-6 fixed w-full top-0 z-20 text-light-color bg-[#000]"
  >
    <a href="/" class="col-span-2 w-full flex items-center px-3">
      <figure class="max-w-14">
        <img src={Logo} alt="" />
        <span class="sr-only">Bhavya Panchal</span>
      </figure>
    </a>
    <a
      href="/"
      class="hover-header relative flex items-center h-full border-x border-x-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        home
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        -> home
      </span>
    </a>
    <a
      href="/About"
      class=" hover-header relative flex items-center h-full border-r border-r-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        about
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        -> about
      </span>
    </a>
    <a
      href="/"
      class="hover-header relative flex items-center h-full border-r border-r-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        projects
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        -> projects
      </span>
    </a>
    <a
      href="/"
      class="hover-header relative flex items-center h-full px-4 text-sm group"
    >
      <span
        class=" uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        contact
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        -> contact
      </span>
    </a>
  </header>
  <header
    id="header"
    class="flex lg:grid grid-cols-4 lgmin:hidden h-full xl:grid-cols-4 items-stretch border-b border-b-white-opaque fixed top-0 z-20 text-light-color bg-[#000]"
  >
    <a href="/" class="col-span-2 w-full flex items-center px-3">
      <figure class="max-w-14">
        <img src={Logo} alt="" />
        <span class="sr-only">Bhavya Panchal</span>
      </figure>
    </a>

    <a
      href="/"
      class="flex items-center h-full border-x border-x-white-opaque px-4 text-sm min-w-28"
    >
      <span class="uppercase">Menu +</span>
    </a>
    <a href="/" class="flex items-center h-full px-4 text-sm min-w-28">
      <span class="uppercase">contact</span>
    </a>
  </header>
</main>

<style>
  .loader {
    animation: loader 2s cubic-bezier(1, 0, 0, 1) forwards;
    animation-delay: 2s;
  }
  @keyframes loader {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
</style>
