var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  },
  data: [1,3,5]
};

var { name, surname, dateOfBirth: { year }, data: [ first, second, third ] } = customer