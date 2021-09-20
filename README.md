# <img src="https://github.com/zakrzewskib/mood-tracker-react/blob/master/readme-images/logo.PNG" width="400px">

### Learning React
* After learning basics of React I created my first 'typical' 'user submits form and new item shows on screen' app.
* Before starting the project I learned:
  * Instead of imperative JavaScript code, React uses declarative code - you say what you want to be done **instead of** coding each step of what is to be done.
  * My first React hook - useState - to call component function again when we change our (variable) state to show it on screen again with the new value.
  * You can lift the state up - for example you can execute the parent's function via props.
  * You can use CSS Modules - files name <ComponentName>.module.css - classes are changed to be unique - styles are scoped to the component we import our file into. I still wanted some styles to be global - there are defined in index.css.
 
### Create React App
* This app was created with <a href="https://github.com/facebook/create-react-app">create-react-app</a>.
* Thus I do not ``` import React from 'react'; ``` in every component because JSX under the hood is transformed into React.createElement().

### CSS
* I did not expect that it would be so much work to make my app look nice. It was nice doing some CSS, but maybe I should consider using **Material UI** and **Bootstrap** if I want to focus only on React.

### TO DO
* Right now app only tracks user's moods in Semptember 2021, that's why I would like to add tracker for every month in 2021 and 2022.
* Also there can be other types of mood trackers that could be implemented, for example 'Year In Pixels' tracker.

<p align="center">
  <a href="https://www.youtube.com/watch?v=vjQ4F6dPPDk"><img src="https://github.com/zakrzewskib/mood-tracker-react/blob/master/readme-images/YearInPixels.png" width="700px"></a>
</p>

* There are many features that can be added, but I think that I should learn more things about React first.

### Preview
* <a href="https://codesandbox.io/s/github/zakrzewskib/mood-tracker-react">CodeSandbox</a>
<img src="https://github.com/zakrzewskib/mood-tracker-react/blob/master/readme-images/preview.gif">

