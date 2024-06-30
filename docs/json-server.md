# json-server

json-server is an npm module used to 'mock' a database. You can create a fake database server to connect to, giving it JSON data that represents the moked database's data.

CRUD operations are supported by default, via API endpoints! All you need to do to create this data backend is:

1. Create a sample JSON file for the json-server to use
2. Install json-server module
3. Run the json-server 

## Install

`./react-crash-2024`
``` shell
npm install -D json-server
```

## Run 

`./react-crash-2024`
``` shell
json-server --watch src/jobs.json --port 8000

# run command created in package.json
npm run server
```

[Code diff](#TODO)