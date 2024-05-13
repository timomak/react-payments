import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the form with initial fields', () => {
    render(<App />);
    expect(screen.getByText(/Easiest way to buy something!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email...')).toBeInTheDocument(); // Notice here it should likely be 'Last Name...'
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows submission confirmation upon submitting the form', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/Amazing/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
  });

  test('toggles back to the form when Go Back is clicked', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const goBackButton = screen.getByRole('button', { name: /go back/i });
    fireEvent.click(goBackButton);
    expect(screen.getByText(/Easiest way to buy something!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email...')).toBeInTheDocument(); // Again, likely should be 'Last Name...'
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('initially does not show submission message', () => {
    render(<App />);
    const submissionMessage = screen.queryByText(/Amazing/i);
    expect(submissionMessage).not.toBeInTheDocument();
  });
});