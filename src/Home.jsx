import React from 'react';

const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <header>
                <h1>Welcome to My First React App</h1>
            </header>
            <main>
                <p>This is the main content area.</p>
            </main>
            <footer>
                <p>&copy; 2023 My First React App</p>
            </footer>
        </div>
    );
};

export default Home;