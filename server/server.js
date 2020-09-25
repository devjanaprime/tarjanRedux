const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const item = require( './modules/item.route' );

app.use( bodyParser.json() );
app.use( '/item', item ); 

const port = 5000;

app.listen( port, ()=>{
    console.log( 'server up:', port); 
})