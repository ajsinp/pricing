import React, { useState } from 'react';
import FaqItem from './faqitem';
import './App.css';

const FAQ = () => {
    const faqData = [
        { id: 1, question: 'What is Worko?', answer: 'Worko is a task management application designed to help users organize their daily tasks, prioritize work, and improve productivity.' },
        { id: 2, question: 'How can I get started with Worko?', answer: 'To get started with Worko, visit our website or download the Worko app from your device app store.  Once installed, create an account, and you can start managing your tasks immediately.' },
        { id: 1, question: 'Is Worko available on multiple platform?', answer: 'Yes, Worko is available on various platforms, including web browsers, iOS, Android, and desktop applications.This ensures that you can access your tasks from any device.' },
        { id: 1, question: 'What features does Worko offer for task management?', answer: 'Worko provides features such as task creation, due dates, priority levels, task categorization, task sharing, notifications, and progress tracking.Users can also create recurring tasks and set reminders.' },
        { id: 1, question: 'Can I use Worko for team collaboration?', answer: 'Yes, Worko offers collaboration features that allow you to share tasks and projects with team members.You can assign tasks, leave comments, and monitor the progress of shared projects.' },
        { id: 1, question: 'Is Worko available in multiple languages?', answer: 'Yes, Worko supports multiple languages to cater to a diverse user base.You can choose your preferred language in the app settings.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <div className='faqcontainer'>
            <div className='head-list'><h1 className='list' style={{ fontFamily: "Arial" }}>Frequently Asked Questions</h1>
                <h3 className='list-1' style={{ fontWeight: "lighter" }}>Seamlessly use your preferred tools for unified work, start to finish.</h3>
            </div>
            {faqData.map((item, index) => (
                <div className='question'>
                    <FaqItem
                        key={item.id}
                        index={index}
                        isOpen={index === openIndex}
                        question={item.question}
                        answer={item.answer}
                        onToggle={handleToggle}
                    />
                </div>
            ))}
        </div>


    );
};

export default FAQ;
