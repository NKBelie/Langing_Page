function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Product</h2>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button>Get Started</button>
      </nav>
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="tag">
            Smart Manufacturing, Better Future
          </p>

          <h1>
            The Future of Manufacturing
            <br />
            with Latest Technology
          </h1>

          <p className="subtitle">
            Smart factory solutions powering efficiency,
            quality and growth.
          </p>

          <button>Get Started</button>
        </div>

        <div className="stats">
          <div className="box">
            <h2>100+</h2>
            <p>Manufacturing Solutions</p>
          </div>

          <div className="box">
            <h2>1951+</h2>
            <p>Global Companies</p>
          </div>

          <div className="box">
            <h2>6+</h2>
            <p>Years Experience</p>
          </div>

          <div className="box dark">
            <h2>AI</h2>
            <p>Data Driven Platform</p>
          </div>
        </div>
      </section>
      <section id="features" className="features">
        <h2>Efficient Manufacturing Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Production</h3>
            <p>Streamlined production process.</p>
          </div>

          <div className="card">
            <h3>Custom Manufacturing</h3>
            <p>Solutions tailored to your needs.</p>
          </div>

          <div className="card">
            <h3>Quality Control</h3>
            <p>Advanced inspection and assurance.</p>
          </div>

          <div className="card">
            <h3>Technology</h3>
            <p>Latest innovations for efficiency.</p>
          </div>

          <div className="card">
            <h3>Logistics</h3>
            <p>Reliable packaging and delivery.</p>
          </div>

          <div className="card">
            <h3>Consulting</h3>
            <p>Expert support and maintenance.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Choose Your Plan</h2>

        <div className="plans">
          <div className="plan">
            <h3>Starter</h3>
            <h1>$99</h1>
            <p>Basic features for small teams.</p>
          </div>

          <div className="plan active">
            <h3>Professional</h3>
            <h1>$199</h1>
            <p>Advanced features for growth.</p>
          </div>

          <div className="plan">
            <h3>Enterprise</h3>
            <h1>$399</h1>
            <p>Full manufacturing solution.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <form>
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            rows="5"
            placeholder="Message"
          ></textarea>

          <button>Send Message</button>
        </form>
      </section>
      <footer>
        <h3>Product</h3>
        <p>
          Smart manufacturing solutions that drive
          efficiency and growth.
        </p>
      </footer>
    </>
  );
}

export default App;