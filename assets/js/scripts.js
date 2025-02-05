/* General Styles */
:root {
  --primary-color: #0073e6;
  --background-color: #f4f4f4;
  --text-color: #333;
  --card-background: #fff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --primary-color: #1e90ff;
  --background-color: #1a1a1a;
  --text-color: #f4f4f4;
  --card-background: #2a2a2a;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header */
header {
  background: var(--card-background);
  color: var(--text-color);
  padding: 40px 0;
  text-align: center;
  box-shadow: var(--shadow);
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-family: 'Space Grotesk', sans-serif;
}

header p {
  margin: 10px 0 0;
  font-size: 1.2rem;
  color: var(--primary-color);
}

header nav ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

header nav ul li a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
}

header nav ul li a:hover {
  color: var(--primary-color);
}

/* Sections */
section {
  margin: 40px 0;
  padding: 20px;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

h2 {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card-background);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow);
}

.card i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.card h3 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: flex;
  align-items: center;
  color: var(--text-color);
  text-decoration: none;
}

.contact-link i {
  font-size: 1.5rem;
  margin-right: 10px;
  color: var(--primary-color);
}

.contact-link:hover {
  color: var(--primary-color);
}

/* Footer */
footer {
  background: var(--card-background);
  color: var(--text-color);
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
  box-shadow: var(--shadow);
}

footer p {
  margin: 5px 0;
}

/* Theme Toggle */
#theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--primary-color);
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--shadow);
  color: #fff;
  z-index: 1000;
}

#theme-toggle:hover {
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }

  header p {
    font-size: 1rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  header nav ul {
    flex-direction: column;
    gap: 10px;
  }
}