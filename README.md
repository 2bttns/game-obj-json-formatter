# Game Object Formatter
This script converts JSON data into a format readable by the 2bttns Console.

#### Warnin
> The Tags section at the bottom of the output JSON is currently set to have empty strings for `id`, `name`, and `description` fields. <br/> As a result, a new Tag object will be generated in the Console.

## Table of Contents
1. [Game Objects Model](#game-objects-model)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Usage](#usage)
5. [Example](#example)
6. [License](#license)

## Game Objects Model
The script converts any size JSON into the data model below. 

> Your JSON must contain a `name` equivalent field. These values are loaded as choices within your Game buttons.

```typescript
const outputShape: OutputShape = {
  gameObjects: [
    {
      id: '',
      name: '',
      description: '',
      tagIds: []
    }
  ],
  tags: [
    {
      id: '',
      name: '',
      description: ''
    }
  ]
};
```

Interface Type
```typescript
interface GameObject {
  id: string;
  name: string;
  description: string;
  tagIds: string[];
  [key: string]: any;
}
```

## Installation

1. Ensure you have Node.js and Yarn installed on your machine.
2. Clone the repository or download the script file.

## Setup

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```bash
   yarn install
   ```

## Usage
> Only required field is "name". Fields not represented in the Game Objects model are ignored. 

1. Prepare your input JSON file.
2. Run the script using the following command:

   ```bash
   yarn start
   ```

3. Follow the prompts to provide the necessary information. 
>The only required field is "name". id's are autogenerated by default.
4. The converted output JSON file will be saved in the `output` folder.

## Example

Here's an example of the input JSON:

```json
{
  "metadata": [
    {
      "tagId": "1",
      "tagName": "Game Object 1",
      "tagDescription": "This is game object 1",
      "customKey1": "Custom Value 1"
    }
  ]
}
```

And here's the resulting output JSON:

```json
{
  "gameObjects": [
    {
      "id": "1",
      "name": "Game Object 1",
      "description": "This is game object 1",
      "tagIds": []
    }
  ],
  "tags": [
    {
      "id": " ",
      "name": " ",
      "description": " "
    }
  ]
}
```

## License

This project is licensed under the [MIT License](LICENSE).
