class NavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav>
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
                <li><a href="/projects/hardware/">Hardware</a></li>
                <li><a href="/projects/software/">Software</a></li>
                <li><a href="/projects/classwork/">Classwork</a></li>
            </ul>
        </div>
        <a href="/certifications/">Certifications</a>
        <a href="/gallery/">Gallery</a>
        </nav> 
    `;
    }
  }
  
  customElements.define('nav-component', NavBar);