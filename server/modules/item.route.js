const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );

router.get( '/', ( req, res )=>{
    console.log( '/GET hit' );
    const queryText = `SELECT * FROM items`;
    pool.query( queryText ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

router.post( '/', ( req, res )=>{
    console.log( '/POST hit:', req.body );
    let queryText = `INSERT INTO items ( size, color, description ) values ( $1, $2, $3 )`;
    pool.query( queryText, [ req.body.size, req.body.color, req.body.description ] ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}) //end POST

module.exports = router;