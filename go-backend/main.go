package main

import (
	"go-backend/database"
	"go-backend/handlers"
	"go-backend/middleware"
	"go-backend/models"

	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()
	database.DB.AutoMigrate(&models.User{}, &models.Product{}, &models.Category{})
	r := gin.Default()

	r.POST("/register", handlers.Register)
	r.POST("/login", handlers.Login)
	r.POST("/logout", handlers.Logout)

	productRoutes := r.Group("/products")
	productRoutes.Use(middleware.AuthMiddleware("user"))
	{
		productRoutes.POST("/", handlers.CreateProduct)
		productRoutes.GET("/", handlers.GetProducts)
		productRoutes.PUT("/:id", handlers.UpdateProduct)
		productRoutes.DELETE("/:id", handlers.DeleteProduct)
	}

	categoryRoutes := r.Group("/categories")
	categoryRoutes.Use(middleware.AuthMiddleware("admin"))
	{
		categoryRoutes.POST("/", handlers.CreateCategory)
		categoryRoutes.GET("/", handlers.GetCategories)
	}

	r.Run(":8080")
}
