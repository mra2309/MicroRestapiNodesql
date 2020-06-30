'use strict';

var response = require('../res');
var connection = require('../conn');

exports.nuta = function(req, res) {
    connection.query('SELECT * FROM penjualan limit 10', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createNuta = function(req, res) {
    
    var Tanggal = req.body.Tanggal;
    var Jam = req.body.Jam;
    var NamaPelanggan = req.body.NamaPelanggan;
    var Total = req.body.Total;
    var BayarTunai = req.body.BayarTunai;
    var Kembali = req.body.Kembali;
    var TglJamUpdate = '2020-06-30 10:11:19';
    connection.query('INSERT INTO penjualan (Tanggal, Jam ,NamaPelanggan, Total, BayarTunai, Kembali ,TglJamUpdate) values (?,?,?,?,?,?,?)',
    [ Tanggal, Jam ,NamaPelanggan, Total, BayarTunai, Kembali,TglJamUpdate ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan data penjualan !", res)
        }
    });
};