## Initial setup checkpoints:
1. Download and install [Ganache](https://www.trufflesuite.com/ganache).
2. Install [Node Js](https://nodejs.org/en/download/).
3. git clone this repo
4. Run Ganache and set port to 9545.

Then in terminal use 
```
npm install
```

```
truffle compile
```

```
truffle migrate
```

Follow the steps to setup the application:

step 1:

After truffle migrate you get a contract address. Copy it in app.js to the variable `contadd`.


step 2:
If using vs code open `package.json` amd click run button on `scripts ` 
or use the command 

``` 
npm start 
```

step 3:
Paste this url in browser: http://127.0.0.1:3000/login to open login.





