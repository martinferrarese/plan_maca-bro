/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from '@/pages/index'

describe('Home', () => {
  it('renders an input', () => {
    render(<Home />)

    const inputIdea = screen.getByTestId('inputIdea');

    expect(inputIdea).toBeTruthy();
  });

  it('renders a list', () => {
    render(<Home />)

    const ideaList = screen.getByTestId('ideaList');

    expect(ideaList).toBeTruthy();
  });

  it('renders a button to add an idea', () => {
    render(<Home />)

    const addIdeaButton = screen.getByTestId('addIdeaButton');

    expect(addIdeaButton).toBeTruthy();
  });

  it('add a new idea to the list', () => {
    render(<Home />);
    const inputIdea = screen.getByTestId('inputIdea');
    const usersText = 'Comer un sánguche de mila en lo del Dieeeego';

    userEvent.type(inputIdea, usersText);
    fireEvent.change(inputIdea, { target: { value: usersText } });
    fireEvent.click(screen.getByTestId('addIdeaButton'));

    expect(screen.queryByText('Comer un sánguche de mila en lo del Dieeeego')).toBeTruthy();
  });

})
