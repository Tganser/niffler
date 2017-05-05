var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// field names: type
var gemSchema = new Schema({
  name: String,
  type: String,
  value: Number,
  rare: Boolean,
  date: Date
});

//niffler is collecting info about:
// name, type string (yes he names his gems)
// gem type, type string
// estimated value, number
// rare, type boolean
// date he collected it, type date

// tell mongoose to make our collection
// give it a name and the schema we just created
// WARNING: lowercase and plural collection name, 1st param
var Gem = mongoose.model('gems', gemSchema);

module.exports = Gem;
