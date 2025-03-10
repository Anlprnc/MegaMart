package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name        string
	Description string
	Price       float64
	ImageURL    string
	CategoryID  uint
	Category    Category `gorm:"foreignKey:CategoryID"`
}
