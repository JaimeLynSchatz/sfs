# my_app.#!/usr/bin/env ruby -wKU
require 'sinatra'

class MyApp < Sinatra::Base
  # This is where your code will go
  get "/" do
    erb :index  
  end

  get "/animals" do
    erb :animals
  end

  get "/basic" do
    erb :basic
  end
  
end
