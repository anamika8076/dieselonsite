import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1E3A8A;
  text-align: center;
  margin-bottom: 60px;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const QuestionContainer = styled.div`
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 16px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 16px 0;
`;

const Question = styled.h3`
  font-size: 1.125rem;
  color: #1F2937;
  margin: 0;
`;

const PlusIcon = styled(motion.span)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1E3A8A;
  font-size: 24px;
  font-weight: 300;
  transform-origin: center;
`;

const Answer = styled(motion.div)`
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.6;
  padding-bottom: 16px;
  overflow: hidden;
`;

const ContactButton = styled.button`
  background-color: #E65525;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1rem;
  cursor: pointer;
  margin: 40px auto 0;
  display: block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #D64315;
  }
`;

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'Download the DieselOnSite app, create an account, enter your delivery location, select the quantity needed, confirm your order, and track delivery in real-time.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI payments, net banking, and corporate accounts with invoicing options for regular customers.'
    },
    {
      id: 3,
      question: 'Which areas in Delhi NCR do you serve?',
      answer: 'We currently service all areas within Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. You can check exact coverage by entering your location in our app.'
    },
    {
      id: 4,
      question: 'Do you offer emergency services?',
      answer: 'Yes, we prioritize emergency requests, especially for hospitals and critical infrastructure. Our standard delivery time is within 2 hours, with expedited options available.'
    },
    {
      id: 5,
      question: 'What is the minimum order quantity?',
      answer: 'Our minimum order quantity is 100 liters for regular deliveries. For bulk corporate accounts, different minimums may apply.'
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <FAQSection id="faq">
      <Title>Frequently Asked Questions</Title>
      <FAQContainer>
        {faqData.map((faq) => (
          <QuestionContainer key={faq.id}>
            <QuestionHeader onClick={() => toggleQuestion(faq.id)}>
              <Question>{faq.question}</Question>
              <PlusIcon
                animate={{ 
                  rotate: openQuestion === faq.id ? 45 : 0,
                  scale: openQuestion === faq.id ? 1.1 : 1
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                +
              </PlusIcon>
            </QuestionHeader>
            <AnimatePresence initial={false}>
              {openQuestion === faq.id && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      },
                      opacity: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      },
                      opacity: {
                        duration: 0.2,
                        ease: "easeIn"
                      }
                    }
                  }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </QuestionContainer>
        ))}
      </FAQContainer>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>Still have questions?</p>
        <ContactButton>Contact Support</ContactButton>
      </div>
    </FAQSection>
  );
};

export default FAQ;