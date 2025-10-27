import { useState } from 'react';

export default function PricingCard(){
  const [flipped, setFlipped] = useState(false);

  return (
        <div className="card">
            <div className="card-buttons">
                <button
                    className={`card-button ${!flipped ? 'card-button-active' : ''}`}
                    onClick={() => setFlipped(false)}
                >
                    Арка
                </button>
                <button
                    className={`card-button ${flipped ? 'card-button-active' : ''}`}
                    onClick={() => setFlipped(true)}
                >
                    Кръгла Арка
                </button>
                <button
                    className={`card-button ${flipped ? 'card-button-active' : ''}`}
                    onClick={() => setFlipped(true)}
                >
                    Арка Фото кът
                </button>
            </div>



            <div className={`card-inner ${flipped ? 'card-inner-flipped' : ''}`}>
                {/* FRONT */}
                <div className="card-face card-face-front">
                    

                    <div className="card-content">
                        <h3 className="card-title">Exclusive Plan</h3>
                        <p className="card-price">
                            <span className="card-currency">$</span>630
                            <span className="card-period">/YR</span>
                        </p>
                        <ul className="card-features">
                            <li>15 Email Accounts</li>
                            <li>3 Template Styles</li>
                            <li>40 Products Loaded</li>
                            <li>7 Images per Product</li>
                            <li>Unlimited Bandwidth</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button className="card-signUp">Sign Up</button>
                    </div>
                    </div>

                    {/* BACK */}
                    <div className="card-face card-face-back">
                   

                    <div className="card-content card-content-back">
                        <h3 className="card-title">About Perfect Kids</h3>
                        <p className="card-text">
                            We’ve already done more than <strong>340 #perfectkidsparties</strong>.
                            Our main clients are kids, and we know how to make them happy.
                        </p>
                        <div className="card-actions">
                        <button className="card-btn-primary">Contact Us</button>
                        <button className="card-btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
