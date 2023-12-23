/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders an input', () => {
    render(<Home />)

    const inputPrice = screen.getByTestId('inputIdea');

    expect(inputPrice).toBeTruthy();
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

})
