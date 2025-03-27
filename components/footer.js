class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
       <footer>
        Contact Information:
        <div class="social-links">
            <a href="https://www.linkedin.com/in/matthewmarsicano" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Matthew-Marsicano" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="mailto:portfolio@matthewmarsicano.com">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    </footer>
    `;
    }
  }
  
  customElements.define('footer-component', Footer);