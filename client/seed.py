#!/usr/bin/env python3

from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Hotel, Traveller, Activity 

# flavors = [
#     "pepperoni",
#     "cheese",
#     "chicken",
#     "meat",
#     "margherita",
# ]

# ingredients = [
#     " Dough, Tomato Sauce, Cheese",
#     "Tomato, Dough, Tomato Sauce, Cheese",
#     "Sauce, Dough, Tomato Sauce, Cheese, Pepperoni",   
#     "Meat, Dough, Tomato Sauce, Cheese, Pepperoni",
#     "Buffalo, Dough, Tomato Sauce, Cheese, Pepperoni",
#     " Dough, Tomato Sauce, Cheese, Pepperoni,Chicken",
#     "margherita, Dough, Tomato Sauce, butter, Pepperoni",
#     "Dough, Tomato Sauce, Cheese, Pepperoni, cheese",
    
# ]

fake = Faker()

with app.app_context():

    Hotel.query.delete()
    Traveller.query.delete()
    Activity.query.delete()
    # Review.query.delete()

    hotels = []
    for i in range (10):
        r = Hotel(
            name =fake.name(),
            address =fake.address(),)
        hotels.append(r)
    db.session.add_all(hotels)

    travellers = []
    for i in range (34):
        p = Traveller(
            name = fake.name(),
            gender = fake.gender(),
            email = fake.email(),
            date = fake.date(),
            # ingridient =rc(ingredients),
            # price=randint(1, 30),
        )
        travellers.append(p)
    db.session.add_all(travellers)

    activities = []
    for i in range (10):
        a = Activity(
            name = fake.name(),
            description = fake.description(),
            time = fake.time(),

        )
        activities.append(a)
    db.session.add_all(activities)
    db.session.commit()