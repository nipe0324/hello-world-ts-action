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
      # Change @main to a specific commit SHA or version tag, e.g.:
      # actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
      # actions/hello-world-javascript-action@v1.2.3
      - name: Print to Log
        id: print-to-log
        uses: actions/hello-world-javascript-action@main
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
