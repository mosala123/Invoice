import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Countdown = () => {
    const targetDate = new Date('2024-12-25T00:00:00'); // Set target date
    const [timeLeft, setTimeLeft] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft('Countdown Finished!');
                setMessage('The countdown has finished! An email has been sent.');
                clearInterval(timer);
                sendEmail(); // Send email when countdown finishes
            } else {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft(`${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const sendEmail = () => {
        // Here you can use EmailJS to send the email
        alert('Email has been sent!'); // Simulate sending email
    };

    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Countdown Timer</h2>
                            <div className="row">
                                <div className="col-4">
                                    <div className="count-box p-4 bg-primary text-white rounded">
                                        <h4>Hours</h4>
                                        <p>{timeLeft.split(',')[0]}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="count-box p-4 bg-success text-white rounded">
                                        <h4>Minutes</h4>
                                        <p>{timeLeft.split(',')[1]}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="count-box p-4 bg-danger text-white rounded">
                                        <h4>Seconds</h4>
                                        <p>{timeLeft.split(',')[2]}</p>
                                    </div>
                                </div>
                            </div>
                            {message && <div className="alert alert-info mt-4">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
