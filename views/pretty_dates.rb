# a date prettifier

require 'date'

def pretty_date()
  months = ["Zeroth", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  t = DateTime.new

  return months[t.month].to_s + t.day.to_s + ", " + t.year
end