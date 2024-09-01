// 👇 YOUR WORK STARTS ON LINE 19
import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import server from '../../../backend/mock-server'
import App from '../App'
import { selectOptions } from '@testing-library/user-event/dist/cjs/utility/selectOptions.js'

describe('Stranger Things App', () => {
  let user
  afterEach(() => { server.resetHandlers() })
  beforeAll(() => { server.listen() })
  afterAll(() => { server.close() })
  beforeEach(() => {
    render(<App />)
    user = userEvent.setup()
  })
  test('App mounts without crashing', () => {
    // 👉 TASK: print the simulated DOM using screen.debug
    //  screen.debug()
  })
  test('App renders the correct texts', async () => {
    // 👉 TASK: click on the button that displays "Press to Get Show Data"
    const button = screen.getByText('Press to Get Show Data')

    await user.click(button)

    // DONE 👉 TASK: create a waitFor and await for the following to be true:
    // done   - The text "Press to Get Show Data" is no longer in the DOM  
    // done   - The text "Stranger Things" exists in the DOM  
    // done   - The text "A love letter to the '80s classics that captivated a generation" exists in the DOM
    // done   - The text "Select A Season" exists in the DOM
    // done ❗ You will need { exact: false } to select the longer text

    await waitFor(() => {
      expect(screen.queryByText('Press to Get Show Data')).not.toBeInTheDocument()

      screen.getByText('Stranger Things')
      screen.getByText("A love letter to the '80s classics that captivated a generation", { exact: false })
      screen.getByText('Select A Season')
    })

    // DONE 👉 TASK: select Season 2 from the dropdown
    // done ❗ Don't forget user actions need the await keyword
    // done ❗ Use the selectOptions user action
    // done ❗ Grab the select element using querySelector

    await user.selectOptions(document.querySelector('select'), '1')

    // DONE 👉 TASK: create the following assertions:
    // done   - The text "Season 2, Episode 1" exists in the DOM
    // done   - The text "Chapter One: MADMAX" exists in the DOM
    // done   - The text "One year after the events with the Upside Down and the Demogorgon" exists in the DOM
    // done ❗ You will need { exact: false } to select the longer text

    await waitFor(() => {
      screen.getByText('Season 2, Episode 1')
      screen.getByText('Chapter One: MADMAX')
      screen.getByText('One year after the events with the Upside Down and the Demogorgon', { exact: false })
    })

  })
})
