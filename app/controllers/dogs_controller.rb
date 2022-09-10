class DogsController < ApplicationController
    def index
        dogs = Dog.all
        render json: dogs
    end
    def show
        dog = find_dog
        render json: dog
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end
    def update
        dog = find_dog
        dog.update(dog_params)
        render json: dog
    end

    private
    def find_dog
        Dog.find(params[:id])
    end
    def dog_params
        params.permit(:name, :age, :breed, :color, :user_id)
    end
    
end
