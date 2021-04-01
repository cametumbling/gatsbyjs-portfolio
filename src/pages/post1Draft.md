---
title: "A Map to the lost State..."
date: "2021-03-24"
---

At the end of my first sprint, things were looking good, but I had one glaring bug: my state wasn't stateful, so to speak, so page through an "undefined" error.

After a day or two of googling various formulations of this problem, refining the language used to define my issue, I decided that sprint two would be focussed solely on solving this.

But on the first day, towards the end of the day, I happened to formulate the question thusly: "How to run code before render?"

And lo, I landed on this article:

[Run Code in React Before Render](https://daveceddia.com/react-before-render/)

Now, let me hope this is my first and most embarrassing blog post, and that it will get better from here!

Why do I say this? Well, because I had forgotten one of the key aspects of React: the initial render will not, under any circumstances, be delayed.

Of all the projects I've done incorporating loading spinners, etc., it did not occur to me that these could not be left until a later sprint.

As Dave says,

_"Initializing state actually does run before the first render, and leaving it uninitialized is a common source of problems. This leads to errors like `Cannot read property 'map' of undefined'` when the component tries to render before the data is ready."_

...which is exactly what happened to me. He recommends initializing "like with like," or in the case of objects, an empty object or null.

So, what was the crux of my issue? I had not console logged my data and correlated my initialState to the data type that was being returned. In other words, I had initialized a key bit of state to an empty array, when, in fact, it was returning an object. How did I solve my problem? I went to that context provider, and set that bit of state to = useState(null). This did not break my code.

That took care of my issues for this sprint, and my code works fine, but just to be on the safe side, added to my list for a future sprint is to:

## 😇 Use the new ES2020 operators to add some loading conditionals to my site. 😇
