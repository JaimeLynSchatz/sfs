# my_app.#!/usr/bin/env ruby -wKU
require 'sinatra'

class MyApp < Sinatra::Base
  # This is where your code will go

  def time_of_day()
    t = Time.now
    if t.hour > 4 and t.hour < 10
      return "morning"
    elsif t.hour >= 10 and t.hour < 16
      return "midday"
    elsif t.hour >= 16 and t.hour < 7
      return "bedtime"
    else
      return "late"
    end
  end
  
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
