# obs_art_json_maker
a very very simple web app for generating a json from selected files!
made to be used w/ https://github.com/adrianmgg/obs_art_slidesho

# instructions
1. download on your computer
2. copy path to index.html
3. paste path in browser of choice! not internet explorer tho pls
4. use the browse button to select files to add to the json object
5. press the display json button to print out the json object on screen so you can copy it!

# notes
1. the accepted types of files currently include anything that has "image" or "video" in its mime type and the mime type application/x-mpegURL. this was done pretty lazy on my part tbh (also intentionally bc i wasn't sure what type of files to allow/reject), but it's ultimately on the user to make sure that the files being submitted are all good
2. if a file doesn't match an accepted type, a note will be printed out in the console and it won't be added to the json. contact me if you want a type added
3. if the first file's name is extremely long, the text may overflow out of the "choose files" box
4. this hasn't been extremely stress tested bc i just don't have the resources to test all possible inputs
5. VERY IMPORTANT: if dealing with large amounts of files, it'll take a while to process it all. this means if you click the display button immediately, there's a chance that not all of the images will be shown in the json object. you can remedy this by just clicking the display button again. i'll maybe get around to just disabling the button until it's ready someday, but uhhhh i'm tired
6. the json object WILL get very long very fast due to styling for making it readable lol. i'd recommend just crtl + a'ing it and deleting the first line in order to copy it quick