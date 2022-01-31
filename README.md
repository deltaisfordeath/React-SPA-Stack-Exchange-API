# React-SPA-Stack-Exchange-API

## Assignment:
Build a Single Page Application using the React framework.

  Use simple search API from https://api.stackexchange.com/docs  

  Follow their OAuth 2.0 flow to get access to the APIs https://api.stackexchange.com/docs/authentication  
  The page should have one textbox to search stack overflow.  
  Search results should be listed on the same page.  
  Should display Score, Answer, Number of Views, Tags, Asked or Answered time for each question. (Highlight accepted answers).  
  Each question should be a link and clicking on the link should retrieve the answers using answers API from here https://api.stackexchange.com and display     the answers on the same page (accordion or modal dialog of your choice).  
  The application should be responsive so that it can adapt to any screen size.  
  Code block examples should be styled appropriately. (Use your own judgment on styling).
  
## Time to complete:
  1hr read API docs, register, gain access to API  
  1hr write SearchForm and Question components  
  1hr style Searchform and Question components  
  20 min read API docs Answer section  
  40 min write Answer component  
  1.5hr Refactoring and debugging  
  1hr style Answer component  
  1.5hr Refactor, test, debug, style, finalize project  
  ~8hr TOTAL
  
## Notes:
  * In this project I used dangerouslySetInnerHTML for simplicity's sake, but in a normal situation we would need to sanitize the content before adding         onto the page. I would look into 3rd party libraries that could do this sanitation for me.
