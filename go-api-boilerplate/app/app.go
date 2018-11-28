package app

import (
	"fmt"
	"log"
	"net/http"

	"github.com/baptistelambert/go-api-boilerplate/app/router"
	"github.com/baptistelambert/go-api-boilerplate/config"
	mgo "gopkg.in/mgo.v2"
)

// App contains our config and our router
type App struct {
	Router *router.Router
	Config *config.Config
	DB     *mgo.Database
}

// ConnectToDB set the database of our app
func (app *App) ConnectToDB() {
	dbAddr := "mongodb://" + app.Config.Database.Host + ":" + app.Config.Database.Port + "/" + app.Config.Database.Name

	session, err := mgo.Dial(dbAddr)
	if err != nil {
		panic(err)
	}

	app.DB = session.DB(app.Config.Database.Name)
}

// Init the app
func (app *App) Init() {
	app.Router = router.GetRouter()
	app.Config = config.LoadConfig()
	app.ConnectToDB()
}

// Start our application
func (app *App) Start() {
	app.Init()

	addr := app.Config.Host + ":" + app.Config.Port
	fmt.Println("API available at " + addr)
	log.Fatal(http.ListenAndServe(addr, app.Router))
}
