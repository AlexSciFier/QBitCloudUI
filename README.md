# QBitCloud UI

## Introduction

QBitCloud is an alternative web ui for qBitTorrent.

[Live Demo]()

## Installation

- Download the latest build from Releases.
- Unzip the contents of the archive to a folder of your choice.
- Specify the path to the created folder in the qBitTorrent settings.
- Check the Use alternate web ui checkbox.
- Open the page in a browser (default localhost:8080)

## Development

This project is open source, so you can change it or contribute. It's build with [React](https://reactjs.org/) and [Tailwind](https://tailwindcss.com/) framework.

This project requires Nodejs and npm.

For Windows development, it is recommended to use git bash.

### Setup

```sh
#clone project
git clone https://github.com/AlexSciFier/QBitCloudUI.git
cd QBitCloudUI

# run once to install dependencies
npm install

#run dev server
npm run start
```

For local development set this settings in qBitTorrent

```json
{
  "web_ui_custom_http_headers": "Access-Control-Allow-Origin: http://localhost:3000\nAccess-Control-Allow-Credentials: true",
  "web_ui_port": 8080
}
```

### Build

```
npm run build
```

Run this command to build for production in `build` folder.
