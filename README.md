# Game Object Formatter

This script converts input JSON data into a specific format for game objects. It allows you to map the keys in the input JSON to the corresponding fields in the output JSON.

#### Warning
> The script assumes the input data has no pre-defined tags. 

>The Tags object at the bottom of the ouput JSON is hardcoded to be empty strings, and will consequently generate a new Tag in the Console.

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

1. Prepare your input JSON file.
2. Run the script using the following command:

   ```bash
   yarn start
   ```

3. Follow the prompts to provide the necessary information.
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
