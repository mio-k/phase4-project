class ItemsController < ApplicationController
    def index
        items = Item.all
        render json: items
    end
    def show
        item = find_item
        render json: item
    end
    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end
    def update
        item = find_item
        item.update(item_params)
        render json: item
    end
    def destroy
        item = find_item
        item.destroy
        head :no_content
    end

    private
    def find_item
        Item.find(params[:id])
    end
    def item_params
        params.permit(:name, :description, :user_id)
    end
end
