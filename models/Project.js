'use strict';
const mongoose = require( 'mongoose' );
const Item = require('./Item');
const Schema = mongoose.Schema;

var projectSchema = Schema( {
  ID : String,
  title : String,
  description:String,
  items : [{ type: Schema.Types.ObjectId, ref: 'Item' }]

} );

module.exports = mongoose.model( 'Project', projectSchema );
