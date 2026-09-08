const fs = require("fs");

const fileName = "sample.txt";

// CREATE
fs.writeFile(fileName, "Hello from Smart Utility Toolkit!", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:", data);

        // UPDATE
        fs.appendFile(fileName, "\nThis is updated content.", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully");

            // DELETE
            fs.unlink(fileName, (err) => {
                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("File deleted successfully");
            });
        });
    });
});
