package config

import (
	"encoding/json"
	"os"
)

// Config is the struct of our app's config
type Config struct {
	Host     string `json:"host"`
	Port     string `json:"port"`
	Database struct {
		Host string `json:"host"`
		Port string `json:"port"`
		Name string `json:"name"`
	} `json:"database"`
}

// LoadConfig load the config.json file and return its data
func LoadConfig() *Config {
	config := &Config{}

	configFile, err := os.Open("./config.json")
	defer configFile.Close()
	if err != nil {
		panic(err)
	}

	err = json.NewDecoder(configFile).Decode(&config)
	if err != nil {
		panic(err)
	}

	return config
}
