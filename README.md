# superSecret

Steps to get server running...
1) Make sure you have node installed https://nodejs.org/en/
2) Make sure you have yarn installed ```brew install yarn``` if you have homebrew, if not ```curl -o- -L https://yarnpkg.com/install.sh | bash```
3) Open terminal
2) ```git clone https://github.com/bcutler94/superSecret```
3) ```cd ./superSecret```
3) ```yarn```
4) ```node index.js``` and follow instructions in terminal

## API Documentation

```POST /findLuggage```

REQUEST
headers:
- Content-Type: application/json
body params:
- flightList: Take an array of flight connections
```
{
    "flightList": [["SFO", "ATL"], ["GSO", "IND"], ["ATL", "GSO"], ["IND", "LAX"]]  
}
```

RESPONSE
- success: Returns true / false depending on whether request was successful
- cache: Returns true / false depending on whether server cache was hit
- path: Return array given the start and end destination
- error: Returns details about error
```
{
    "success": true,
    "cache": false,
    "path": [
        "SFO",
        "LAX"
    ]
}
```

## Notes
- Algorithm uses graph to find the start and end destination in linear time complexity
- Server has local cache that holds up to 1000 unique flightLists -> TODO would be to implement full LRUCache using linked list
- Server has some 3rd party (body-parser) and native middleware to provide JSON body parsing and time endpoint metrics
- Total time took for core server logic ~45 mins but spent ~1 hour adding cache, user input functionality + testing
