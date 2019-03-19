fs.appendFile("log.txt", text, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Content added to log.txt")
    }
})