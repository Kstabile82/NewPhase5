Rails.application.routes.draw do
  resources :users
  resources :rescues
  resources :userrescues
  resources :informations
  resources :questions
  resources :options

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/user/:id", to: "users#update"
  post "/newrescue", to: "rescues#create"
  post "/myrescues", to: "userrescues#create"
  patch "/userrescues", to: "userrescues#update"
  post "/allusers", to: "userrescues#showalluserstoadmin"
  post "/information", to: "informations#show"
  post "/newinformation", to: "informations#create"
  patch "/information/:id", to: "informations#update"
  delete "/information/:id", to: "informations#destroy"
  post "/questions", to: "questions#create"
  patch "/questions/:id", to: "questions#update"
  delete "/questions/:id", to: "questions#destroy"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
end
