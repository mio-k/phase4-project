class TagsController < ApplicationController
    def show
        tag = Tag.find(params[:id])
        render json: tag
    end
end
