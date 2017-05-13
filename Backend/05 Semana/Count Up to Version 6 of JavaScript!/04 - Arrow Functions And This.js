var foot = {
  kick: function () {
    this.yelp = 'Ouch!'
    setImmediate(() => {
      console.log(this.yelp)
    })
  }
}
foot.kick()

// solution from countto6

// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => console.log(this.yelp));
//     }
// };
// foot.kick();
