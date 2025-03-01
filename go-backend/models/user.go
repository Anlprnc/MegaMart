package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Fullname string `gorm.:"not null"`
	Email    string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
	Role     string `gorm:"default:user"`
}
