Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do 
    resources :events
  end

  namespace :api do
    resources :stats
  end
end
