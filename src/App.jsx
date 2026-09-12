import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-small-title">YOUR DIGITAL JOURNEY STARTS HERE</p>

            <h1>
              Build Your
              <span> Dev Stack</span>
            </h1>

            <p className="hero-description">
              Explore modern technologies, discover powerful tools, and
              build your ultimate developer stack in one place.
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
        </section>
      </main>
    </>
  );
}

export default App;