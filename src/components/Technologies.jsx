import technologies from "../data/technologies.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Technologies() {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (!alreadyAdded) {
      setStack([...stack, technology]);
      toast.success(`${technology.name} added to your stack!`);
    } else {
      toast.warning("Already added to your stack!");
    }
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Technology removed from your stack!");
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed!");
  };

  return (
    <>
      <ToastContainer />

      <section className="technologies">
        <h2>Explore Technologies</h2>

        <div className="tech-layout">

          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map((technology) => {
              const alreadyAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="technology-card"
                >
                  <div className="technology-top">
                    <div className="technology-icon">
                      {technology.icon}
                    </div>

                    <span className="technology-badge">
                      {technology.badge}
                    </span>
                  </div>

                  <h3>{technology.name}</h3>

                  <p>{technology.description}</p>

                  <div className="technology-info">
                    <span className="category-chip">
                      {technology.category}
                    </span>

                    <span className="difficulty">
                      {technology.difficulty}
                    </span>
                  </div>

                  <div className="technology-bottom">
                    <span className="rating">
                      ⭐ {technology.rating}
                    </span>

                    <button
                      className="add-stack-btn"
                      onClick={() => addToStack(technology)}
                      disabled={alreadyAdded}
                    >
                      {alreadyAdded
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <div className="your-stack">
            <h2>Your Stack ({stack.length})</h2>

            {stack.length === 0 ? (
              <p>No technologies added yet.</p>
            ) : (
              <>
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="stack-item"
                  >
                    <span>
                      {item.icon} {item.name}
                    </span>

                    <button
                      onClick={() => removeFromStack(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button onClick={removeAll}>
                  Remove All
                </button>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Technologies;