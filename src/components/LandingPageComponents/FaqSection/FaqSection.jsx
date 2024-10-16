import React, { useState } from 'react';
import './FaqSection.css';
import Image from '../../../assets/images/two-women.jpg';
import arrow from '../../../assets/icons/arrow-right.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function FaqSection() {
    const faqs = [
        {
            question: 'How can I place an order on your website?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'Hooks are functions that let you use state and other React features without writing a class.',
        },
        {
            question: 'Do you ship internationally? What are the shipping charges?',
            answer: 'Hooks are functions that let you use state and other React features without writing a class.',
        },
        {
            question: 'How long does it take for my order to be delivered?',
            answer: 'Hooks are functions that let you use state and other React features without writing a class.',
        },
        {
            question: 'How do I determine the right size for my clothing?',
            answer: 'Hooks are functions that let you use state and other React features without writing a class.',
        },
    ];

    const [isOpen, setIsOpen] = useState(Array.from({ length: faqs.length }, () => false)); // Initialize isOpen state for each FAQ

    const toggleFaq = (index) => {
        const updatedOpenState = [...isOpen]; // Create a copy of isOpen state array
        updatedOpenState[index] = !updatedOpenState[index]; // Toggle the isOpen state for the clicked FAQ
        setIsOpen(updatedOpenState); // Update isOpen state with the new array
    };

    return (
        <div className='bg-white px-4 md:px-16  py-20 md:py-28 line'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h1 className='text-2xl md:text-3xl pb-14 border-b mb-8 border-gray-500'>Frequently Asked Questions</h1>
                    <div>
                        <div className='faq-item' >
                            {faqs.map((faq, index) => (
                                <div className='line mb-8' key={index}>
                                    <div className='faq-question' onClick={() => toggleFaq(index)}>
                                        <span>{faq.question}</span>
                                        <span><img className={`arrow w-6 ${isOpen[index] ? 'rotate' : ''}`} src={arrow} alt="" /></span>
                                    </div>
                                    <TransitionGroup>
                                        {isOpen[index] && 
                                            <CSSTransition timeout={300} classNames="faq">
                                                <div className='mt-4 text-amber-800'>
                                                    {faq.answer}
                                                </div>
                                            </CSSTransition>
                                        }
                                    </TransitionGroup>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='image-box md:w-[580px] w-[380px] h-[250px] md:h-[620px] relative'>
                        <img src={Image} alt="" className='w-full h-full object-cover image'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

