class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private
    def authorize
        return render json: { error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
