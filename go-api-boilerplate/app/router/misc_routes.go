package router

import "github.com/baptistelambert/go-api-boilerplate/app/handlers"

// MiscRoutes defines MiscRoutes
func MiscRoutes() []Route {
	MiscRoutes := []Route{
		Route{
			Method:   "GET",
			Endpoint: "/",
			Handler:  handlers.RootHandler,
		},
	}

	return MiscRoutes
}
