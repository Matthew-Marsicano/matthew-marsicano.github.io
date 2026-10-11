class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav aria-label="Main">
        <a href="/">Home</a>
        <a href="/resume/">Resume</a>
        <div class="dropdown">
          <a href="/experience/" class="dropbtn">Experience</a>
          <ul class="dropdown-content">
            <li><a href="/experience/industry/">Industry</a></li>
            <li><a href="/experience/research/">Research</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <a href="/projects/" class="dropbtn">Projects</a>
          <ul class="dropdown-content">
            <li><a href="/projects/silicon/">Silicon</a></li>
            <li><a href="/projects/hardware/">Hardware</a></li>
            <li><a href="/projects/software/">Software</a></li>
            <li><a href="/projects/classwork/">Classwork</a></li>
          </ul>
        </div>
        <a href="/certifications/">Certifications</a>
        <a href="/gallery/">Gallery</a>
      </nav>
    `;

    // Mark the current page, and its parent section for dropdown pages
    const path = location.pathname.replace(/index\.html$/, '');
    this.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path) a.setAttribute('aria-current', 'page');
      else if (a.classList.contains('dropbtn') && path.startsWith(href)) a.setAttribute('aria-current', 'true');
    });
  }
}

customElements.define('nav-component', NavBar);
