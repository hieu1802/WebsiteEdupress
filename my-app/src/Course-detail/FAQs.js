import React, { useState } from 'react';
import './FAQs.css';
import DownIcon from './image/downicon2.png';
import UpIcon from './image/upicon.png';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <h4 style={{ color: isOpen ? '#ff6633' : 'black' }}>
                    {question}
                </h4>
                <span>{isOpen ? <img src={UpIcon} /> : <img src={DownIcon} />}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const FAQs = () => {
    const faqData = [
        {
            question: "What Does Royalty Free Mean?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        },
        {
            question: "What Does Royalty Free Mean?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        },
        {
            question: "What Does Royalty Free Mean?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        }
    ];

    return (
        <div className="faq-container">
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQs;
