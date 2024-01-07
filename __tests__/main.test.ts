/**
 * Unit tests for the action's main functionality, src/main.ts
 */

import * as core from '@actions/core'
import * as github from '@actions/github'
import * as main from '../src/main'

// Mock the Github Actions core library
const infoMock = jest.spyOn(core, 'info').mockImplementation()
const getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
const setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
const setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()

// Mock the action's main function
const runMock = jest.spyOn(main, 'run')

// Other utilities
const timeRegex = /^\d{2}:\d{2}:\d{2}/

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('logs a greeting and the event palyload', async () => {
    // Mock the action's inputs
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'who-to-greet':
          return 'John'
        default:
          return ''
      }
    })

    // Mock the action's payload
    github.context.payload = {
      actor: 'mona'
    }

    await main.run()

    expect(runMock).toHaveReturned()
    expect(infoMock).toHaveBeenCalledWith('Hello, John!')
    expect(infoMock).toHaveBeenCalledWith(
      `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`
    )
  })

  it('sets the time output', async () => {
    // Mock the action's inputs
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'who-to-greet':
          return 'John'
        default:
          return ''
      }
    })

    // Mock the action's payload
    github.context.payload = {}

    await main.run()

    expect(runMock).toHaveReturned()
    expect(setOutputMock).toHaveBeenCalledWith(
      'time',
      expect.stringMatching(timeRegex)
    )
  })

  it('sets a failed status when error raised', async () => {
    // Mock the action's inputs
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'who-to-greet':
          throw new Error('Something went wrong...')
        default:
          return ''
      }
    })

    // Mock the action's palyload
    github.context.payload = {}

    await main.run()

    expect(runMock).toHaveReturned()
    expect(setFailedMock).toHaveBeenCalledWith('Something went wrong...')
  })
})
