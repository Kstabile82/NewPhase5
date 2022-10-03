Rails.application.routes.draw do
  resources :users
  resources :rescues
  resources :userrescues
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  patch "/user/:id", to: "users#update"
  post "/newrescue", to: "rescues#create"
  post "userrescue", to: "userrescues#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
end
