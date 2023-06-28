# Lite Chat

<p>
    <img alt="nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?logo=Node.js&logoColor=white"/>
    <img alt="express js" src="https://img.shields.io/badge/-Express%20JS-F7F7F7?logo=express&logoColor=4A4A4A"/>
    <img alt="socket.io" src="https://img.shields.io/badge/-Socket.IO-F962AA?logo=socket.io&logoColor=white"/>
    <img alt="javascript" src="https://img.shields.io/badge/-JavaScript-EBD64D?logo=javascript&logoColor=white"/>
    <img alt="tailwindcss" src="https://img.shields.io/badge/-TailwindCSS-41A2AD?logo=tailwindcss&logoColor=white"/>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Lite Chat is a lightweight chat application built with Node.js, Express, and Socket.IO. It is designed for real-time communication without the need for a persistent database.

## Features

- Real-time communication: Lite Chat uses Socket.IO to enable real-time messaging between users.
- Lightweight: The application is built to be lightweight and does not require a persistent database.
- User-friendly interface: The chat interface is simple and intuitive, allowing users to easily send and receive messages.

## Usage

Once the Lite Chat application is running, open it in your web browser. You will be prompted to enter a username to join the chat room. After entering your username, you can start sending and receiving messages in real-time.

## Installation

To install and run Lite Chat, follow these steps:

1. Clone the repository: `git clone https://github.com/arashyeganeh/Lite-Chat`
2. Navigate to the project directory: `cd Lite-Chat`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

The application will be accessible at `http://localhost`.

## Development

To contribute to Lite Chat or customize it to your needs, you can follow these steps:

1. Clone the repository: `git clone https://github.com/arashyeganeh/Lite-Chat`
2. Navigate to the project directory: `cd Lite-Chat`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

The development server uses `nodemon` and concurrently watches for changes in both the client-side code (Tailwind CSS) and server-side code (Node.js and Express). Any changes you make will automatically trigger a restart of the server.

To build the Tailwind CSS stylesheets, use the following command:

```shell
npm run build
```

## Dependencies

Lite Chat relies on the following dependencies:

- express
- socket.io
- tailwindcss

These dependencies are automatically installed when running `npm install`.

## Author

Lite Chat was developed by [Arash Yeganeh](https://github.com/arashyeganeh).

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for more information.