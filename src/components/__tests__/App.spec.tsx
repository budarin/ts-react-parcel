import * as React from 'react'
import { render, Simulate } from 'react-testing-library'

import App from '../App'

/**
 * Just a simple integration test
 */

test('App Component renders with toggle switch', () => {
  const wrap = render(<App />)

  expect(wrap.getByTestId('toggle-container')).toBeTruthy()
})

test('App Component can change toggle status with clicking toggle switch', () => {
  const { container, getByTestId } = render(<App />)
  const toggleButton = getByTestId('toggle-button')

  Simulate.click(toggleButton)
  expect(container.textContent).toBe('The button is on')
  expect(toggleButton.classList.contains('toggle-btn-on')).toBe(true)

  Simulate.click(toggleButton)
  expect(container.textContent).toBe('The button is off')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})
