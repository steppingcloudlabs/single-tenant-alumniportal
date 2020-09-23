import { getDestination, DestinationOptions, DestinationSelectionStrategies } from '@sap-cloud-sdk/core';
var xsenv = require("@sap/xsenv");
var express = require("express");
var app = express();

app.get('/callback/v1.0/dependencies', async(req,res)=>{
	var dest = xsenv.getServices({ destination: { tag: 'destination' } }).destination;
    var xsappname = dest.xsappname;
    res.status(200).json([{'appId': xsappname, 'appName': 'destination'}]);
});
app.put('/callback/v1.0/tenants/*', async(req,res)=>{
	var dest = xsenv.getServices({ destination: { tag: 'destination' } }).destination;
    var xsappname = dest.xsappname;
    res.status(200).json([{'appId': xsappname, 'appName': 'destination'}]);
});
app.delete('/callback/v1.0/tenants/*', async(req,res)=>{
	res.status(200);
});

let options= DestinationOptions = {}

app.get("/api/cloudfoundry/destinations", async(req,res)=>{
	var paramdestination = req.query.destination;
    options.selectionStrategy = DestinationSelectionStrategies.subscriberFirst;
    options.userJwt = req.authInfo.getTokenInfo().getTokenValue();
    var destination = await getDestination(paramdestination, options);
    if (req.authInfo !== undefined && req.authInfo.checkLocalScope("read")) {
        res.status(200).send(destination.originalProperties);
    } else {
        res.type("text/plain").status(401).send(`ERROR: Not Authorized. Missing Necessary scope`)
    }
    
});
