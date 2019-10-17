Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :stats
  end
  
  namespace :api do
    resources :homes
    get '/orphanages/', to: 'homes#orphanages'
    get '/centers/', to: 'homes#centers'
    # get '/homes/', to: 'homes#index'
  end

  # Custom Routes for Homes
  
  
  # Custom Routes for Employees

end
