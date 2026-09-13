function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Build Your
            <span> Developer Stack</span>
          </h1>

          <p>
            Discover, explore, and organize the technologies you need
            to build amazing web applications.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Technologies
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/assets/banner-stack.png"
            alt="Developer Stack"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;