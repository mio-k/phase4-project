Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # since I want to be able to display each member's information, i reserve users#show for that purpose. Instead of "get "/me", to: "users#show"" I'm setting up authorized route below.
  get "/authorized", to: "users#authenticate"
  
  resources :users, only: [:index, :show, :update]
  resources :dogs, only: [:index, :show, :create]
  resources :items
  resources :tags, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
