# mirrR

mirrR is a smart mirror React/Node app that can run on a Raspberry Pi

Checkout [MirrR Control](https://github.com/seanyesmunt/mirrR-control) to toggle the mirrR widgets

More in depth how to install guide coming soon.

![](demo.gif)

## How to install

This is meant to run on a Raspberry Pi, but you can also run it on your computer to check it out and test the app. After running the commands you should see a message that says, "Ready on [http://localhost:3000](http://localhost:3000)"

Copy and paste one of these commands into your terminal

### From the Raspberry Pi

`curl -sL https://raw.githubusercontent.com/seanyesmunt/mirrR/master/installer.sh | bash`

### From your computer

`git clone https://github.com/seanyesmunt/mirrR && cd mirrR && npm i && npm start`


## Widgets

Currently there are widgets for Google trends, a greeting message, date, news, weather and your Twitter Feed.

#### Google

A list of the most searched Google terms each day, change in color (yellow -> red) means more people searched for that term.

#### News/Twitter/Weather

Out of the box, News, Twitter and Weather will not work. You will need to retrieve the API keys first. MirrR will work fine without the API keys, you will just see a message if you try to toggle a component that needs one.

[News (NY Times)](https://developer.nytimes.com/signup) Choose "Top Stories V1" from the dropdown.

[Twitter](https://apps.twitter.com/) You will need to signup and create a new app.

[Weather (forecast.io)](https://developer.forecast.io/)

## Other info

I am in the process of create a more in depth how to install guide, that will also contain the Pi setup.

This works on a Raspberry Pi 3. The original Pi is too slow to run this page, I haven't tested this on a Pi 2.

Talk to me [@seanyesmunt](https://twitter.com/seanyesmunt) if you have any questions.
