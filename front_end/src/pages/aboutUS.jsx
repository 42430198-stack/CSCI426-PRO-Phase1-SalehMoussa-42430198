import React from 'react';
import '../Style/about_us.css';

export default function AboutUs() {
    return (
        <div className="about-us-page">
            <h1>About Us</h1>
            <p>Welcome to our book review platform. We are passionate about books and aim to provide comprehensive reviews to help readers make informed choices.</p>
            <p>Those are all the information that a reader might need to have a great browsing experience with books.</p>
            <h2>power points</h2>
            <ul>
                <li>We provide detailed reviews of books across various genres.</li>
                <li>Easy navigation and user-friendly interface.</li>
                <li>Ability to add, edit, and delete book reviews.</li>
                <li>Responsive design for seamless experience on all devices.</li>
            </ul>
            <p>We hope you enjoy exploring our platform and discovering new books to read!</p>
        </div>
    );
}