var me = {
  name: 'juanma',
  location: 'barcelona'
}

// ---------------------

var me = {}
me.name = 'juanma'
me.location = 'barcelona'

// -----------------

function factoryPerson (name, location) {
  return {
    name: name,
    location: location
  }
}

factoryPerson.prototype.talk = function () {
  return 'hey you!!'
}

var me = factoryPerson('juanma', 'barcelona')

me.name
me.location
me.talk() // error!

// ---------------------

function Person (name, location) {
  this.name = name
  this.location = location
}

Person.prototype.talk = function () {
  return 'hey you!!'
}

var me = new Person('juanma', 'barcelona')

me.name
me.location
me.talk()
