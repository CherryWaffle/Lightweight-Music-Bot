# A Discord Music Bot written in JavaScript and the discord.js v13 library [ Forked from Galnir's Master-bot](https://github.com/galnir/Master-Bot)
[![image](https://img.shields.io/badge/language-javascript-yellow)](https://www.javascript.com/)
[![image](https://img.shields.io/badge/node-%3E%3D%2016.0.0-blue)](https://nodejs.org/)

## 🚧 The bot is transitioning from discord.js v12 to v13 so you may encounter bugs 🚧

## System dependencies

For the bot to run, your system needs to have Node.js v16 atleast and Python 3 (for compiling some Node.js module dependencies) installed.
A MongoDB database is also needed. I recommend using the free tier of MongoDB Atlas, you can get started using this [guide](https://docs.atlas.mongodb.com/getting-started/). Make sure to generate a valid URI and place it in the .env file.

### Installing the Node.js dependencies

After cloning the repository, navigate to the project's folder and run the command `npm ci --production` to install all Node.js module dependencies.

## Setup

Create a `config.json` file in the root directory of the project with the following content : 

### Client ID

Client ID needs to be set for the bot to work.

```json
{
  "client_id": "the-bots-discord-id"
}
```

### Setting up the .env file

Create a file named `.env` in the root directory of the project with the following contents :

```env
TOKEN=<Your Bot Token Here>
mongo_URI=<Your Mongo URI here>
```
These are the settings that need to be set for the music part of the bot to work.

Important Note
- Remember to enable **Privileged Gateway Intents** for the bot work properly !
- Remember to `Check` the `applications.commands` in the `Scope` tab of your discord application
- I have attached photos for referrence 😄

  <br>
<a href="#">
    <img src="https://cdn.discordapp.com/attachments/901351706649067540/901351722180542464/unknown.png">
    <img src="https://cdn.discordapp.com/attachments/901351706649067540/901351989148000286/unknown.png">
  </a>
<br>

## Slash Commands

### Music only !!

| Command               | Description                                                                                                               | Usage                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| /play                 | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url         | /play darude sandstorm                                            |
| /create-playlist      | Create a saved playlist                                                                                                   | /create-playlist EDM                                              |
| /delete-playlist      | Delete a playlist from your saved playlists                                                                               | /delete-playlist EDM                                              |
| /display-playlist     | Display a saved playlist                                                                                                  | /display-playlist EDM                                             |
| /my-playlists         | List your saved playlists                                                                                                 | /my-playlists                                                     |
| /remove-from-playlist | Remove a song from a saved playlist using its index                                                                       | /remove-from-playlist EDM 5                                       |
| /save-to-playlist     | Save a song or a playlist to a saved playlist                                                                             | /save-to-playlist EDM https://www.youtube.com/watch?v=dQw4w9WgXcQ |
| /pause                | Pause the current playing song                                                                                            | /pause                                                            |
| /resume               | Resume the current paused song                                                                                            | /resume                                                           |
| /leave                | Leaves voice channel if in one                                                                                            | /leave                                                            |
| /remove               | Remove a specific song from queue by its number in queue                                                                  | /remove 4                                                         |
| /queue                | Display the song queue                                                                                                    | /queue                                                            |
| /shuffle              | Shuffle the song queue                                                                                                    | /shuffle                                                          |
| /skip                 | Skip the current playing song                                                                                             | /skip                                                             |
| /skipall              | Skip all songs in queue                                                                                                   | /skipall                                                          |
| /skipto               | Skip to a specific song in the queue, provide the song number as an argument                                              | /skipto 5                                                         |
| /volume               | Adjust song volume                                                                                                        | /volume 80                                                        |
| /music-trivia         | Engage in a music trivia with your friends. You can add more songs to the trivia pool in resources/music/musictrivia.json | /music-trivia                                                     |
| /loop                 | Loop the currently playing song                                                                                           | /loop 5                                                           |
| /loopqueue            | Loop the queue                                                                                                            | /loopqueue 2                                                      |
| /lyrics               | Get lyrics of any song or the lyrics of the currently playing song                                                        | /lyrics song-name                                                 |
| /now-playing          | Display the current playing song with a playback bar                                                                      | /now-playing                                                      |
| /move                 | Move song to a desired position in queue                                                                                  | /move 8 1                                                         |
| /history              | Display the queue history                                                                                                 | /history                                                          | 

## Resources

[Installing Node.js on Debian](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

[Installing Node.js on Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)

[Installing on a Raspberry Pi](https://github.com/galnir/Master-Bot/wiki/Running-the-bot-on-a-Raspberry-Pi)

[Creating a Discord Bot Application](https://discord.com/developers/applications)
<br>
</br>

## Credits & Note

This is just a Lightweight version of the original [Master-bot](https://github.com/galnir/Master-Bot) by [Galnir](https://github.com/Galnir)

Original Authour - https://github.com/Galnir