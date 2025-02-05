import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomePopup from './WelcomePopup.js';

test('renders WelcomePopup component', () => {
  render(<WelcomePopup />);
  const welcomeElement = screen.getByText(/Welcome to the DevSecOps Mastery with GitHub Hackathon!/i);
  expect(welcomeElement).toBeInTheDocument();
});