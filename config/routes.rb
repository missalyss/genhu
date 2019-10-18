Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :stats
  end
  
  namespace :api do
    resources :employees
    get '/volunteers/', to: 'employees#volunteers'
    get '/staff/', to: 'employees#staff'
    get '/directors', to: 'employees#directors'
  end


  # Custom Routes for Homes
  
  
  # Custom Routes for Employees

end
