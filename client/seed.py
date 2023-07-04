#!/usr/bin/env python3

from random import randint, choice as rc

from faker import Faker

from app import app


from models import db, Hotel, Traveller, Activity 

fake = Faker()

with app.app_context():

    Hotel.query.delete()
    Traveller.query.delete()
    Activity.query.delete()
    # Review.query.delete()


    travellers = []
    genders = ['Male', 'Female']

    for i in range (34):
        p = Traveller(
            name = fake.name(),
            gender = fake.random_element(elements=genders),
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
            description = fake.sentence(),
            time = fake.time(),

        )
        activities.append(a)
    db.session.add_all(activities)

    hotels = []
    for p in travellers:
        for i in range (10):
            r = Hotel(
                name =fake.name(),
                address =fake.address(),
                traveller = p,
                activity = rc(activities),)
        hotels.append(r)
    db.session.add_all(hotels)


    for a in activities:
        r = rc(hotels)
        a.hotel = r
        hotels.remove(r)
    db.session.commit()