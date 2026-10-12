
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// Home page
function Home() {
  return (
    <section className="page">
      <p className="eyebrow">WELCOME TO MY MINI SITE</p>
      <h1>Hello, welcome! 👋</h1>
      <p>
        This is my simple React website created for our BSIT coding activity.
        Explore the pages to learn more about the site.
      </p>
      <Link className="button-link" to="/about">
        Learn More →
      </Link>
    </section>
  );
}

// About page
function About() {
  return (
    <section className="page">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About This Site</h1>
      <p>
        Hi! I am a third-year Bachelor of Science in Information Technology
        student. I enjoy learning web development and building useful
        applications with React.
      </p>
      <p>
        This mini site demonstrates page routing, reusable components,
        controlled form inputs, and basic form validation.
      </p>
    </section>
  );
}

// Contact page
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please enter both your name and email.");
      return;
    }

    setError("");
    navigate("/thank-you");
  }

  return (
    <section className="page">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact Me</h1>
      <p>Have a question or suggestion? Send me a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <label htmlFor="message">Message (optional)</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Send Message →</button>
      </form>
    </section>
  );
}

// Thank You page
function ThankYou() {
  return (
    <section className="page thank-you">
      <div className="success-icon">✓</div>
      <p className="eyebrow">MESSAGE SUBMITTED</p>
      <h1>Thank You!</h1>
      <p>
        Thank you for contacting me. Your form was submitted successfully.
      </p>
      <Link className="button-link" to="/">
        Back to Home
      </Link>
    </section>
  );
}

// Navbar and application routes
export default function App() {
  return (
    <div className="site">
      <header className="navbar">
        <Link className="brand" to="/">
          <span className="brand-icon">M</span>
          My Mini Site
        </Link>

        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route
            path="*"
            element={
              <section className="page">
                <h1>404 - Page Not Found</h1>
                <Link to="/">Return Home</Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 My Mini Site · BSIT React Coding Activity</p>
      </footer>
    </div>
  );
}
