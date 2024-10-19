<script>
  import Logo from "../images/logo.svg";
</script>

<main>
  <header
    id="header"
    class="hidden lg:grid h-full sm:grid-cols-6 items-stretch border-b border-b-white-opaque lg:grid-cols-6 fixed w-full top-0 z-20 text-light-color"
  >
    <a href="/" class="col-span-2 w-full flex items-center px-3">
      <figure class="max-w-14">
        <img src={Logo} alt="" />
        <span class="sr-only">Bhavya Panchal</span>
      </figure>
    </a>
    <a
      href="/"
      class="relative flex items-center h-full border-x border-x-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        home
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        home
      </span>
    </a>
    <a
      href="/"
      class="relative flex items-center h-full border-r border-r-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        about
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        about
      </span>
    </a>
    <a
      href="/"
      class="relative flex items-center h-full border-r border-r-white-opaque px-4 text-sm group"
    >
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        projects
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        projects
      </span>
    </a>
    <a href="/" class="relative flex items-center h-full px-4 text-sm group">
      <span
        class="uppercase transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
      >
        contact
      </span>
      <span
        class="uppercase absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        contact
      </span>
    </a>
  </header>
  <header
    id="header"
    class="flex sm:grid grid-cols-4 lg:hidden h-full sm:grid-cols-4 items-stretch border-b border-b-white-opaque fixed top-0 z-20 text-light-color"
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
