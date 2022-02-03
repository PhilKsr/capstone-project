# < roAdventure >

Roadtrips, vanlife and camping are growing trends.
 
roAdventure helps you plan your roadtrips. Navigate through Germany and find amazing places. Create your next roadtrip, add your favourite locations for other users and be prepared with your own packing-list. Once you’ve created your roadtrip you can split the costs of it. You run out of ideas? Use the suggested blogs to get more inspiration. Now get ready for your next adventure and discover Germany!
## Installing / Developing

First, clone this repository

Now you are ready to go:

```shell
npm install
```


This will install the dependencies required to run the app.

```shell
npm run dev
```

These scripts run your server and client. Connect your database and discover!


You can configure the server port by setting the `PORT` environment variable. Creating a `.env` file is supported. You can copy `.env.example` to `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment                    |


To make sure that you can easily use it I have explained some features of the map:
![Map:](https://github.com/Philipp-Kaiser/capstone-project/blob/2e1d0943dca648ce52070862e43e304631834aae/roAdventure.png)

## 1. Location button
- Find yourself with the Location button
- Make sure your location is enabled

## 2. Reset button
- Reset all added locations from a roadtrip
- If you edit a roadtrip the reset is not set until you click on the save button

## 3. Visibility button
- To much noise? no problem! Just click on the visibility button to hide all locations except the roadtrip

## 4. Save button
- Don't forget to save your edits
- No matter if it's a new or a existing roadtrip

## 5. Filter button
- Filter the displayed locations 

## 6. Pin Button
- Click to activate and a pin is dropped wherever you click on the map
- Do us a favour and add a new location with the popup


To build the project, run:

```shell
npm run build
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Licensing

MIT

# </ roAdventure >
