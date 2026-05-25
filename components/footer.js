class Footer extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <span>Contact</span>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/matthewmarsicano" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Matthew-Marsicano" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:portfolio@matthewmarsicano.com" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
