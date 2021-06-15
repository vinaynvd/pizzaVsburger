# pizzaVsburger

## Description

This project is a real-time polling website, built with Python's FastApi, Websockets, PyMongo & HTML Javascript. 

In this project, we can vote for pizza or burger & those votes will be stored in MongoDB.

Votes will be viewed in the html page by using ( [Chart.js](https://www.chartjs.org/) ). 

Chart.js is an awesome javascript library, which provides simple, flexible javascript charts for website.


## Setup

Steps to clone this project in your local.

1. Clone this project.

2. go to pizzaVsburger directory & create virtual environement.

3. Copy files from backend directory & paste it in your virtual environment.


## Installing dependencies

1. Install Mongodb in your local. To visualize your data in MongoDB, I recommend use MongoDB Compass.

2. Install all the python requirements from requirements.txt file

## Running in your local

After installing all the required dependencies, run the following command in your virtual environment.

`
uvicorn application:app --reload
`

This project is going to run on the default port 8000. Hit the http://localhost:8000 in browser & you'll see this output 😀

![Pizza vs Burger Polling site](https://cdn-images-1.medium.com/max/800/1*ApnZI5k-Nd2gdJHjNlIEoA.png)

## How I build this project, & all it's details can be found in my medium article. It had more information than this readme file

Here's the link to my [Medium Article](https://medium.com/@vinaynvd72/polling-web-application-with-python-fastapi-websockets-pymongo-html-javascript-832c931eca59) 


### If you found this project useful, please please buy me a Coffee by clicking the below image 🙂

<p align="center">
  <a href="https://www.buymeacoffee.com/vinaynvd">
<img width="160" height="40" src="https://user-images.githubusercontent.com/22757166/119656626-85fff900-be48-11eb-99b6-751ce3bb40ef.png">
</p>
