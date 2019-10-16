Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :stats
  end
  
  namespace :api do
    resources :homes
    get '/volunteers/', to: 'homes#volunteers'
    get '/staff/', to: 'homes#staff'
    get '/directors', to: 'homes#directors'
  end


  # Custom Routes for Homes
  
  
  # Custom Routes for Employees

end
