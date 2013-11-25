# my_app.#!/usr/bin/env ruby -wKU
require 'sinatra'

class MyApp < Sinatra::Base
  # This is where your code will go
  get "/" do
    erb :index  
  end

end
