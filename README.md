# 2bttns Game Object JSON Formatter

#### Warning
> The script assumes the input data has no pre-defined tags / tagIds. It will instead instaniate the tagIds field with an empty Array. 
>The Tags object at the bottom of the ouput JSON is hardcoded to be empty strings, and will consequently generate a new Tag in the Console.

## Installation and Running Script
Install deps:
```bash
npm i
```

Build the script:
```bash
tsc format-game-objects.tsx
```

Run the script:
```bash
node format-game-objects.js
```

## Usage

The script is terminal based. It will ask you for mapping information. 

If "none" is selected for a field, the script will autopopulate it with an empty string.

If a field in your input JSON does not correspond to the output JSON fields, it will not be included in the output JSON.

## TO-DOs

* [ ] Make type safe
* [ ] Refactor based on tag field requirement fix in Console

