import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('login'); // login, signup, home

  const [journals, setJournals] = useState([
    { id: 1, title: "AI in Healthcare", author: "Dr. Kowshik" },
    { id: 2, title: "Quantum Computing", author: "Dr. Sohail" },
    { id: 3, title: "Blockchain Technology", author: "Dr. Vikas" },
    { id: 4, title: "Data Science Trends", author: "Dr. Tulesh" },
    { id: 5, title: "Neural Networks", author: "Dr. vijay" },
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addJournal = () => {
    if (title && author) {
      setJournals([...journals, { id: journals.length + 1, title, author }]);
      setTitle('');
      setAuthor('');
    }
  };

  const handleLogin = () => {
    // just simulate login
    if (email && password) setPage('home');
  };

  const handleSignup = () => {
    if (email && password && password === confirmPassword) setPage('home');
  };

  if (page === 'login') {
    return (
      <div className="app">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{' '}
          <button className="link" onClick={() => setPage('signup')}>
            Sign Up
          </button>
        </p>
      </div>
    );
  }

  if (page === 'signup') {
    return (
      <div className="app">
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account?{' '}
          <button className="link" onClick={() => setPage('login')}>
            Login
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Research Journal Management System</h1>
        <button className="logout" onClick={() => setPage('login')}>
          Logout
        </button>
      </header>

      <main>
        <section className="add-journal">
          <h2>Add New Journal</h2>
          <input
            type="text"
            placeholder="Journal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button onClick={addJournal}>Add Journal</button>
        </section>

        <section className="journal-list">
          <h2>Journal List</h2>
          <ul>
            {journals.map((journal) => (
              <li key={journal.id}>
                <strong>ID {journal.id}:</strong> {journal.title} - {journal.author}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
