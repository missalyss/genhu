Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :stats
  end
  
  namespace :api do
<<<<<<< HEAD
    resources :employees
    get '/volunteers/', to: 'employees#volunteers'
    get '/staff/', to: 'employees#staff'
    get '/directors', to: 'employees#directors'
=======
    resources :homes
    get '/orphanages/', to: 'homes#orphanages'
    get '/centers/', to: 'homes#centers'
    # get '/homes/', to: 'homes#index'
>>>>>>> 3dee6c58fdaaf1fa5f140f2405ee477be079d521
  end

  # Custom Routes for Homes
  
  
  # Custom Routes for Employees

end
