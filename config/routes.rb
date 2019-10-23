Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do 
    resources :events
  end

  namespace :api do
    resources :stats
  end
  
  namespace :api do
    resources :employees
    get '/volunteers/', to: 'employees#volunteers'
    get '/staff/', to: 'employees#staff'
    get '/directors', to: 'employees#directors'
  end
  namespace :api do
    resources :homes
    get '/orphanages/', to: 'homes#orphanages'
    get '/centers/', to: 'homes#centers'
    # get '/homes/', to: 'homes#index'
  end


  get '*other', to: 'static#index'

end
