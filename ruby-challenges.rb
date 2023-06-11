# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def find_words(arr, filter_letter)
  arr.select do |word|
    word.include?(filter_letter)
  end
end

p find_words(beverages_array, filter_letter_o) == ['coffee', 'soda water']
p find_words(beverages_array, filter_letter_t) == ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
def iterated_hashes(hsh)
  hsh.values.flatten.sort
end

p iterated_hashes(us_states) == ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike
  attr_accessor :model, :current_speed, :wheels
  def initialize(model, current_speed) 
    @model = model
    @wheels = 2
    @current_speed = current_speed
  end

  def bike_info
   "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end


  def pedal_faster(speed)
    self.current_speed += speed
  end

  def brake(speed)
    if (self.current_speed -= speed) < 0
      return 0
    else
      self.current_speed
    end
  end
  #***Please note that I did not include the '@' symbol on the instance variables, intentionally. My understanding of Ruby tells me that we only want to have an instance variable in one area, the getter/setter methods. This way we are using the method definition, and not the variable itself. So when code changes are made (for instance if we need to add a default idle speed to the `@current_speed` instance variable, or something), we don't have to go through all the `@current_speed` variables in the code. We can just update the method, and it trickles down to the rest of the method calls.  
  #Not using the '@' symbol, and using the keyword `self` automatically asks Ruby to look at the getter and setter methods for the variable definition.***
end

chris_bike = Bike.new("Treck", 0)
p chris_bike.bike_info
# puts chris_bike #<-this also returns the same as line 65
my_bike = Bike.new("Mongoose", 0)
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) #=> 10
# Expected output example: my_bike.pedal_faster(18) #=> 28
# Expected output example: my_bike.brake(5) #=> 23
# Expected output example: my_bike.brake(25) #=> 0
p my_bike.pedal_faster(10) #=> 10
p my_bike.pedal_faster(18) #=> 28
p my_bike.brake(5) #=> 23
p my_bike.brake(25) #=> 0