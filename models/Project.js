'use strict';
const mongoose = require( 'mongoose' );
const Item = require('./Item');
const Schema = mongoose.Schema;

var projectSchema = Schema( {
  creator: String,
  title : String,
  ID : String,
  Items : [{ type: Schema.Types.ObjectId, ref: 'Item' }]

} );

module.exports = mongoose.model( 'Project', projectSchema );
