# Hello, World! TypeScript Action

This action prints `Hello, World!`` or `Hello, <who-to-greet>!`` to the log. To learn how this action was built, see Creating a JavaScript action.

- created by https://github.com/actions/typescript-action as template.
- inspired by https://github.com/actions/hello-world-javascript-action

## Usage

Here's an example of how to use this action in a workflow file:

```yml
name: Example Workflow

on:
  workflow_dispatch:
    inputs:
      who-to-greet:
        description: Who to greet in the log
        required: true
        default: 'World'
        type: string

jobs:
  say-hello:
    name: Say Hello
    runs-on: ubuntu-latest

    steps:
      - name: Print to Log
        id: print-to-log
        uses: nipe0324/hello-world-javascript-action@main
        with:
          who-to-greet: ${{ inputs.who-to-greet }}
```

## Inputs

| Input | Default | Description |
| --- | --- | --- |
| `who-to-greet` | `World` | The name of the person to greet |

## Outputs

| Output | Description |
| --- | --- |
| `time` | The time we greeted you |
