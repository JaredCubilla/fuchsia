# Fuchsia

An attempt at creating a personal assistant that responds with and to text only.

Fuchsia is based on [Jared Cubilla's Jarvis](https://github.com/jaredcubilla/jarvis). The goal of Fuchsia is to create a similar virtual personal assistant <s>that isn't limited by speech for responses</s> (Fuchsia now has speech support but isn't limited to sound recordings from me; this is not yet perfected).

# Features

## Say Hello

You can say `hi` to Fuchsia to get a response right back! Never feel lonely again.

## Open Websites

Have one large address bar to `go to` the website you want.

## See What's Good

You can ask Fuchsia if you should watch something using the key phrase, `should I watch <movie/show name>`, and see what you should, shouldn't, and might watch. You can also ask about music with `should I listen to <artist name>`.

## Search the Web

`Search for` tickets on the web to the movie you think is perfect for you from the comfort of the Fuchsia UI (which isn't actually fuchsia, oddly).

## ~~Where~~ When Am I?

Find out what time it is easily, along with the date, which features the day of the week as well. Always unsure what day it is? It's more fun to find out from your virtual personal assistant! Just ask `what time is it?`

## Theming System

Ah! My eyes! Have you ever had to deal with a bright website when it's the middle of the night? Worry no more as Fuchsia now comes with six different themes (excluding the default)! Three dark, three light. Just say `activate <theme name>`

List of themes:

- Grass
- Sky
- Dark
- Space
- Wood
- Pinkalicious

## Randomizers!

What's that? You want to `flip a coin`, but oh wait&mdash;you only use bills! Well, worry no more and turn your bills into internet and flip a virtual coin as much as you want! Also, you can say, `give me a random number between <number> and <number>` to get a random integer in a range, or `roll a die` (because really&mdash;who really has *just* a die?)!

## Clear the Log

You've been talking to Fuchsia for so long that the page is totally cluttered! You have too much conversation that you won't ever look at again. Obviously, you can `clear` the log.

## Modules

As this is based off of Jarvis, it makes sense to also be modular. While the ability to toggle modules isn't as open as Jarvis because there's no settings menu visible on the screen (mainly because there's no where to put it since that would change how the app's supposed to look), these modules are toggled like the "Goodnight" feature. You say `toggle <module name>`.

## Speech

Fuchsia can talk right back to you now using Speech Synthesis (part of the [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html)). Can't read? We've got you covered.

# Contributing

Fork the repository and submit a pull request. If the change is a simple trigger change ("flip a coin" will trigger a coin flip), just add it as an issue. This lets me know that that's a phrase that'd be used.

# License

Licensed under the MIT License. Created by [Ryan Nguyen](https://github.com/Loquacious).
