const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://tau:${password}@nodeexpressprojects.z6syvmv.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "Callback-functions suck",
  date: new Date(),
  important: true,
}); 

note.save().then((result) => {
  console.log(result);
  console.log("note saved!");
  mongoose.connection.close();
});

/* Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note);
    })
    mongoose.connection.close();
}) */
