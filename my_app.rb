# my_app.#!/usr/bin/env ruby -wKU
require 'sinatra'
require 'date'

class MyApp < Sinatra::Base

  date = DateTime.parse("")
  # This is where your code will go
  def time_of_day()
    t = Time.now
    if t.hour >= 4 and t.hour < 10
      return "morning"
    elsif t.hour >= 10 and t.hour < 16
      return "midday"
    elsif t.hour >= 16 or t.hour < 4
      return "bedtime"
    else
      return "late"
    end
  end
  
  # a date prettifier
  def pretty_date()
    months = ["Zeroth", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    t = DateTime.now
    return "#{months[t.month]} #{t.day}, #{t.year}"
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
