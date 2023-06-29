# 2bttns Game Object JSON Formatter

#### Warning
> The script assumes the input data has no pre-defined tags. The Tags object at the bottom of the ouput JSON is hardcoded to be empty strings, and will consequently generate a new Tag in the Console.

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

```bash
Enter the path of the input JSON file:
/your/path/here

Which key in your JSON corresponds to "id" with value type "string"? Enter "none" if none exists.
myId

Which key in your JSON corresponds to "name" with value type "string"? Enter "none" if none exists.
myName

Which key in your JSON corresponds to "description" with value type "string"? Enter "none" if none exists.
myDescription

Which key in your JSON corresponds to "tagIds" with value type "object"? Enter "none" if none exists.
none

Output JSON file saved successfully!
```

## TO-DOs

* [ ] If no ID exists, generate an ID for the game object
* [ ] Make type safe
* [ ] Refactor based on tag field requirement fix in Console

