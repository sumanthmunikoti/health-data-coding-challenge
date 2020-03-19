const presto = require('presto-client');

if (process.argv.length != 4) {
    console.log("Usage: Please enter command like this- node App.js firstName lastName");
    return;
}

const URN_PREFIX = 'urn:uuid:';

const client = new presto.Client(
    {user: 'presto', host: '34.74.56.14', catalog: 'hive', schema: 'leap'});

const query = "select "
              + "json_extract(ai.json, '$.substance.coding') "
              + "from "
              + "allergyintolerance ai inner join patient p on "
              + "json_extract_scalar(ai.json, '$.patient.reference') "
              + `= '${URN_PREFIX}' || json_extract_scalar(p.json, '$.id') `
              + "WHERE json_extract_scalar(p.json,'$.name[0].family[0]') = '" + process.argv[3] + "' "
              + "AND "
              + "json_extract_scalar(p.json,'$.name[0].given[0]') = '" + process.argv[2] + "'";

console.log('Code', 'Description');

client.execute({
                   query: query,
                   catalog: 'hive',
                   schema: 'leap',
                   state: function (error, query_id, stats) {
                       // console.log({message: "status changed", id: query_id, stats: stats});
                   },
                   columns: function (error, data) {
                       // console.log({resultColumns: data});
                   },
                   data: function (error, data, columns, stats) {
                       data.map((x) => JSON.parse(x[0])[0])
                           .forEach((x) => console.log(x.code, x.display));
                   },
                   success: function (error, stats) {
                       // console.log('stats', stats);
                   },
                   error: function (error) {
                       console.log('e', error)
                   }
               });