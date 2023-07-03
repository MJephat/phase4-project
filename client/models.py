from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import MetaData

db = SQLAlchemy()

class Hotel(db.Model):
    __tablename__ = 'hotels'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    #pizzas = db.relationship('RestaurantPizza', back_populates='restaurant')
    
class Traveller(db.Model):
    __tablename__ = 'travellers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(50))
    email = db.Column(db.String(50))
    date = db.Column(db.String(20))
    #restaurants = db.relationship('RestaurantPizza', back_populates='pizza')

class Activity(db.Model):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String(100))
    time = db.Column(db.String(50))
    #restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    #pizza_id = db.Column(db.Integer, db.ForeignKey('pizzas.id'), nullable=False)
    #restaurant = db.relationship('Restaurant', back_populates='pizzas')
    #pizza = db.relationship('Pizza', back_populates='restaurants')
