# Full Time Force test by Alejandro Sáez

## Instructions to run the app

### Open https://github.com/AleSaezDH/fulltimeforce

### Click on Code (beside Add file) and download ZIP

### When finished downloading, extract it

### Open the unzipped folder (you should see folders called build, node_modules, public and src), right click, open with Visual Studio Code

### Once inside, open a new terminal (in the top bar) and run npm install

### When finished installing dependencies run npm start

### It automatically opens the default browser, sometimes it takes a while so wait for it to open

### If it doesn´t open by itself, open the browser manually and search for http://localhost:3000/

## GitHub repository: https://github.com/AleSaezDH/fulltimeforce

## Deploy link: https://fulltimeforce-test-app.netlify.app/

## What did i do?

First of all I started working on the principal objetive of the test so I used the github link you gave me and looked for the right endpoint to get the information of all my commits and the specific repository (here: https://docs.github.com/en/rest/reference/repos#list-commits). When I found it just replace the default values with mine so that's how I was able to get the commits history. Then I decided the concept of the app and starting building it. I tried to compartmentalize the code and reuse components. I wanted to create something using Apis and found Samsung's products provided by Mercado Libre so that is why the information is in spanish, couldn't change it. As I already have the idea of developing an ecommerce I thought it was a good plan to save the cart somewhere so decided to use Firebase for that, like my database. Also considering it would have a general state (for products, cart and loadings) I used Redux for manage it. In case the page refreshes at any time I decided to save the products cart on localStorage so reloaded wouldn't be a problem, the cart would not be reseted. When the user bought something, the information is saved in Firebase and return an id (wich is the purchase id using to search that purchase, thinking in a real ecommerce). At all time you have a button at the bottom of the page to see all the commits and if you click on them it takes you to github page. Also I created a view to nonexistent url and if the user goes to the checkout path he will get an 404 view. About styles, I used Ant Design Framework and tried to create a scalable app so that's why all the extra CSS is in diferents files even if they are small.