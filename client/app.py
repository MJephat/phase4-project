#!/usr/bin/env python3

from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate

from models import db, Hotel, Traveller, Activity

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travel.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    migrate = Migrate(app, db)

    db.init_app(app)

    # @app.route('/hotels')
    # def ho():
    #     return ''
    
    @app.route('/hotels', methods=['GET'])
    def get_hotels():
        hotels = Hotel.query.all()
        data = [
            {
                'id': hotels.id,
                'name': hotels.name,
                'address': hotels.address
            }
            for hotel in hotels
        ]
        return jsonify(data)
    
    @app.route('/hotels/<int:id>', methods=['GET'])
    def get_hotel(id):
        hotels = Hotel.query.get(id)
        if hotels is None:
            return jsonify({'error': 'Hotel not found'}), 404
        
        data = {
            'id': hotels.id,
            'name': hotels.name,
            'address': hotels.address,
            # 'pizzas': [
            #     {
            #         'id': pizza.id,
            #         'name': pizza.name,
            #     }
            #     for pizza in restaurant.pizzas
            # ]
        }
        return jsonify(data)
    
    @app.route('/hotels/<int:id>', methods=['DELETE'])
    def delete_hotel(id):
        hotels = Hotel.query.get(id)
        if hotels is None:
            return jsonify({'error': 'Hotel not found'}), 404
        
        # RestaurantPizza.query.filter_by(restaurant_id=id).delete()
        # db.session.delete(restaurant)
        # db.session.commit()

        # return make_response('', 204)
    
    @app.route('/travellers', methods=['GET'])
    def get_traveller():
        travellers = Traveller.query.all()
        data = [
            {
                'id': travellers.id,
                'name': travellers.name,
                'gender': travellers.gender,
                'date': travellers.date
            }
            for traveller in travellers
        ]
        return jsonify(data)
    
    @app.route('/travellers/<int:id>', methods=['DELETE'])
    def delete_traveller(id):
        travellers = Traveller.query.get(id)
        if travellers is None:
            return jsonify({'error': 'Traveller not found'}), 404
    

    @app.route('/activities', methods=['GET'])
    def get_activity():
        activities = Activity.query.all()
        data = [
            {
                'id': activities.id,
                'name': activities.name,
                'description': activities.description,
                'time': activities.time
            }
            for activity in activities
        ]
        return jsonify(data)
    
    @app.route('/activities/<int:id>', methods=['DELETE'])
    def delete_activity(id):
        activities = Activity.query.get(id)
        if activities is None:
            return jsonify({'error': 'Activity not found'}), 404
    
    # @app.route('/restaurant_pizzas', method=['POST'])
    # def create_restaurant_pizza():
    #     data = request.get_json()
    #     price = data.get('price')
    #     pizza_id = data.get('pizza_id')
    #     restaurant_id = data.get('restaurant_id')

    #     if not price or not pizza_id or not restaurant_id:
    #         return jsonify({'errors': ['validation errors']}), 400
        
    #     restaurant = Restaurant.query.get(restaurant_id)
    #     pizza = Pizza.query.get(pizza_id)

    #     if restaurant is None or pizza is None:
    #         return jsonify({'errors': ['validation errors']}), 400
        
    #     restaurant_pizza = RestaurantPizza(price=price, restaurant=restaurant, pizza=pizza)
    #     db.session.add(restaurant_pizza)
    #     db.session.commit()

    #     data = {
    #         'id': pizza.id,
    #         'name': pizza.name,
    #         'ingredients': pizza.ingredients
    #     }
    #     return jsonify(data), 201

    return app



if __name__ == '__main__':
    app = create_app()
    app.run(port=5555)
