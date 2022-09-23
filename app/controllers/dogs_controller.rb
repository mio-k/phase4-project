class DogsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        dogs = Dog.all
        render json: dogs, only: [:id, :name, :breed, :age, :color]
    end
    def show
        dog = find_dog
        render json: dog, only: [:id, :name, :breed, :age, :color]
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    private
    def find_dog
        Dog.find(params[:id])
    end
    def dog_params
        params.permit(:name, :age, :breed, :color, :user_id)
    end
    def render_not_found_response
        render json: {error: "Dog not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end
    
end
