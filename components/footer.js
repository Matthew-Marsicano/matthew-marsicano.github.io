class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <span>Contact</span>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/matthewmarsicano" target="_blank" rel="noopener" aria-label="LinkedIn">
            <span class="icon i-linkedin" aria-hidden="true"></span>
          </a>
          <a href="https://github.com/Matthew-Marsicano" target="_blank" rel="noopener" aria-label="GitHub">
            <span class="icon i-github" aria-hidden="true"></span>
          </a>
          <a href="mailto:portfolio@matthewmarsicano.com" aria-label="Email">
            <span class="icon i-envelope" aria-hidden="true"></span>
          </a>
        </div>
        <p class="footer-meta">&copy; ${new Date().getFullYear()} Matthew Marsicano</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
