package router

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

// Router is the custom router of our application
// it "extends" *httprouter.Router
type Router struct {
	*httprouter.Router
}

// Route is the structure of our endpoints
type Route struct {
	Method   string
	Endpoint string
	Handler  func(w http.ResponseWriter, r *http.Request, p httprouter.Params)
}

// RegisterRoutes register routes for our router
func (router *Router) RegisterRoutes() {
	var routes []Route

	routes = append(
		MiscRoutes(),
	)

	for _, route := range routes {
		switch route.Method {
		case "GET":
			router.GET(route.Endpoint, route.Handler)
		case "POST":
			router.POST(route.Endpoint, route.Handler)
		case "PUT":
			router.PUT(route.Endpoint, route.Handler)
		case "DELETE":
			router.DELETE(route.Endpoint, route.Handler)
		}
	}
}

// GetRouter return the router
func GetRouter() *Router {
	router := &Router{httprouter.New()}

	router.RegisterRoutes()

	return router
}
