// src/components/ContactModal.js
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 1.6rem;
  color: #1E3A8A;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1E3A8A;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #FF6B00;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  transition: border 0.2s;
  &:focus {
    border-color: #FF6B00;
  }
`;

const SubmitButton = styled.button`
  background: #FF6B00;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 0.9rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem auto 0;
  width: 300px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e65a00;
  }
`;

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <Overlay show={show}>
      <ModalBox>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalTitle>Diesel on Call Booking Form</ModalTitle>
        <StyledForm>
          <Label>Name *</Label>
          <Input type="text" placeholder="Your name" required />
          <Label>Mobile No. / WhatsApp *</Label>
          <Input type="text" placeholder="+91 -" required />
          <Label>Email</Label>
          <Input type="email" />
          <Label>Address *</Label>
          <Input type="text" required />
          <Label>Quantity *</Label>
          <Input type="text" placeholder="00 Liters" required />
          <Label>Message</Label>
          <Textarea rows="3" />
          <SubmitButton type="submit">Submit Order</SubmitButton>
        </StyledForm>
      </ModalBox>
    </Overlay>
  );
};

export default ContactModal;
