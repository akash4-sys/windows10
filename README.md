<h1 align="center"> Windows 10 Chrome </h1> 
<br/>
<p align="center">
  <a href="https://windows10chrome.netlify.app/">
      <img alt="Windows10C" title="Windows 10 Chrome" src="https://res.cloudinary.com/windows10/image/upload/v1661085390/2022-08-16_pai28p.png" 
      width="800">
  </a>
</p>
<p align="center">
  Windows 10 on your browser.
</p>

<br/>
<h2 style="display: flex; justify-content: center; align-items:center;">
  <a href="https://windows10chrome.netlify.app/" 
    style="text-decoration: none;
      color:#2486e9; 
      padding:5px; 
      border:1px solid #2486e9; 
      border-radius: 5px; 
      display: flex; 
      justify-content: center; 
      align-items:center; 
      width:fit-content;
      gap:5px;
      font-weight:bold;
      font-style:italic;"
      >
        <img src="https://res.cloudinary.com/windows10/image/upload/v1658058233/microsoft_aytwab.svg" alt="windows" width="30px"/>
        ONLINE
  </a>
</h2>

## Table of Contents

---

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [Project Status](#project-status)
- [Project Goals](#project-goals)
- [Contact](#contact)

## Introduction

---

[![Live](https://img.shields.io/badge/Live-Online-blue)](https://windows10chrome.netlify.app/)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)
[![License](https://img.shields.io/badge/License-MIT-yellow)](https://github.com/akash4-sys/windows10/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/akash4-sys/windows10)](https://github.com/akash4-sys/windows10/issues)
[![GitHub forks](https://img.shields.io/github/forks/akash4-sys/windows10?color=orange&label=forks)](https://github.com/akash4-sys/windows10/forks)

A react app that can give you windows 10 experience on browser. You can download it, use it offline, play games and much much more. I am constantly updating it, so stay tuned. Checkout the [Features](#features) section to know about the currently available features and [Project Goals](#project-goals) for future goals of this project.

## Technologies

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)


## Features

---

A List of available features

- Installable
- Works Offline
- Draw on inbuilt Microsoft Whiteboard
- Play Pokemon game
- Use inbuilt chrome, notepad and google search
- Android Support

## Setup

---

Clone this repository to your desktop and install all the dependencies. Then simply run ``` npm start ``` to start the application.

In local developement environment application will use *localhost urls* to connect to backend server. You can either change the developement mode in
[Urls File](https://github.com/akash4-sys/windows10/blob/main/src/components/Authenticate/utils/Urls.js) 
or clone the [Windows10C_Server](https://github.com/akash4-sys/windows10c_server/) repository to run the backend on your local machine as well.

Note - *You will need config.env file to run the backend on you local machine. It is not provided in [Windows10C_Server](https://github.com/akash4-sys/windows10c_server/) repository. So you will need to create your own API Keys according to the list provided there.*


## Project Status

---

Windows 10 Chrome is currently a experimental project that is hosted on netlify and heroku.
Entire authentication system is custom and needs automated testing.
Currently *Reverse Token Rotation* RTR is being used to authenticate a user. Since the application works even offline it's impossible to use RTR to authenticate offline.

Theoretically there's scope for installing infinite react app or any web app inside *Windows 10 Chrome*. If you want to install your own custom react 
application or any other application inside Windows10 Chrome then you can checkout the [install custom application]() documentation.

I am currently working on feature to save all the user data and automated tests.

If you're interested in contributing, i would love help completing the /offline authentication or any suggestion/ideas are welcome as well. Beyond that,
i plan to design schemas such that possibly infinite amount of data can be stored from different application and retrieved as quickly as well.


## Project Goals

---

Some of the future goals of this project are to:

- Run you personal OS and continue your work on any machine without downloading anything
- Work a like virtual machine on browser
- No longer need to worry about bugs and viruses, just refresh the page
- Make changes to your linked personal machine remotely even if it is offline


## Contact

---

Connect to me on [LinkedIn](https://www.linkedin.com/in/akash-m-44724b1b7/).

Checkout my [portfolio](https://akash4.netlify.app/)