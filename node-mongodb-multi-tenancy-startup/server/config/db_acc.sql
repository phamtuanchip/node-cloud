db.createUser(
  { 
    user:"dbadmin",
    pwd:"123456789",
    roles: [{role: "userAdmin", db: "admin"  }, "userAdminAnyDatabase", "dbOwner", "readWrite", "root"]
  }
)
  
db.createUser
(
  {
user:
"useradmin",
pwd:
"123456789",
roles:
[{ role: "userAdmin", db: "admin" }]
  })


db.updateUser
(
   "mantis-cloud",
   {     
     roles : [
        { role: "userAdmin" }
      
     ]      
   },
writeConcern:
{
w:
"majority",
j:
true,
wtimeout:
2  }
)

db.updateUser(
   "dbadnmin",
   { 
     "roles" : [
       { "role": "userAdmin", "db": "admin"  }, { "role":"userAdminAnyDatabase", "db": "admin"  }, { "role":"dbOwner" , "db": "admin"}  , 
       { "role":"readWrite",  "db": "admin"},  { "role":"root",  "db": "admin"}
       
     ],
     "writeConcern":{"w":"majority","j":true,"wtimeout":2 }
   } 
)
db.updateUser(
   "myUserAdmin",
   { 
     "roles" : [
       { "role": "userAdmin", "db": "admin"  }, { "role":"userAdminAnyDatabase", "db": "admin"  }, { "role":"dbOwner" , "db": "admin"}  , 
       { "role":"readWrite",  "db": "admin"},  { "role":"root",  "db": "admin"}
       
     ],
     "writeConcern":{"w":"majority","j":true,"wtimeout":2 }
   } 
)

db.grantRolesToUser ( "myUserAdmin", [ { role: "__system", db: "admin" } ] )

db.updateUser(
   "dbadnmin",
   {     
     roles : [
        { role: "userAdmin", db: "admin"  }, "userAdminAnyDatabase", "dbOwner", "readWrite"
     ],
      writeConcern: { }      
   } 
)



	db.createUser
(
	{
user:
"Mohan",

pwd:
"password",

roles:
[
		{
			role: "read" , db:"Marketing"},

			role: "readWrite" , db:"Sales"}
		}
		      ]
	}