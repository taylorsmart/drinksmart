# Drink Smart
An app for the Innovative Kentiki lounge

Start Commands:
`git pull <remote> <branch>` and `npm install`

(In two separate terminals)
`npm run react-dev` and  `npm start`

To make this program reload the code from github and start at start-up, it is also possible to create systemd services that do all three steps.
Please refer to systemd documentation for creating a new service, but the execution lines are
`npm run --prefix /path/to/drinksmart react-dev`, `npm start --prefix /path/to/drinksmart > log` and 
`git -C /path/to/drinksmart pull <remote> <branch> --ff-only`.
The first service should start `After=` the second.
