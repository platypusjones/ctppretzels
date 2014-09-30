# app.rb
require 'sinatra'
require 'sinatra/partial'


register Sinatra::Partial


set :server, 'webrick'

get '/' do
  erb :index
end
