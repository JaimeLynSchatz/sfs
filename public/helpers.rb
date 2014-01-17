# Returns a string that will be used as a class denoting the time of day ("morning", "midday", "evening", "bedime") to change the background color of the screen
module my_time
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
