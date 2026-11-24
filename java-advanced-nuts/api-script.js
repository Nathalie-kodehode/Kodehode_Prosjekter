//HVA ER EN API?
//API er korleis 2 datamaskiner kommuniserer med kvarandre uten å vere knytta opp.

//api middle man, servitør i ein resturant når du bestiller mat
//hente, slette, endre, opprete data
//må sende forespørsel til API for å fucke med data

//http request metoder
//get hente
//post sende
//put (inn ein ressurs) endre
//path er vanleg å bruke i føglje sander
//patch endre det som allereie er der
/* 

PUT OG PATCH
{
name: 'Sander'
email: 'sander@jobloop.no'
}

PUT (erstatte eksisterande innhald med nytt):
{
name: 'john-arne'
email: 'john-arne@jobloop.no' 
}

NY DATA (etter PUT; det gamle vert sletta):
{
name: 'john-arne'
email: 'john-arne@jobloop.no' 
}


PATCH (erstatte deler av det eksisterande innhaldet):
{
name: 'Nattugle'
}

NY DATA (etter PATCH; det nye vert lagt til):
{
name: 'Sander'
email: 'sander@jobloop.no'
}

HUSKEREGEL:
- PUT: Erstatt heile resursen med ny
-PATCH: Erstatt deler av ressursen

*/


//delete sletter data
//soft delete og hard delete 
// soft delete (sletta men ikkje heilt, det som er sletta liggjer ein plass men kan ikkje brukast)
//hard delete (sletter data fullstending, ingenting liggjer igjen)
//soft delte legje noko i søppelbøtta, hard delete slette søppelbøtta

