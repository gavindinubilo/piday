(function() {
  var input = document.getElementById('js--pi_input_mech');
  var digit_wrapper = document.getElementById('js--pi_digit_wrapper');
  var question_mark_wrapper = document.getElementById('js--pi_question_mark_wrapper');
  var modal = document.getElementById('js--modal');
  var pi_next_digit_wrapper = document.getElementById('js--pi_next_digit');
  var play_again = document.getElementById('js--play_again');
  var twitter_share_button = document.getElementsByClassName('twitter-share-button')[0];
  var current_index = 0;

  digit_wrapper.innerHTML = '3.';

  function onChange() {
    var char_at = window.Pi.charAt(current_index);
    setTimeout(function() {
      digit_wrapper.style.direction = 'rtl';
      if (this.value === char_at) {
        this.value = '';
        current_index++;
        digit_wrapper.innerHTML = digit_wrapper.innerHTML + char_at;
      } else {
        twitter_share_button.dataset.text = 'I was able to get ' + current_index + ' digits of Pi correct!';
        pi_next_digit_wrapper.innerHTML = window.Pi.charAt(current_index);
        modal.style.display = 'block';
      }
    }.bind(this), 50);
  }

  input.addEventListener('input', onChange.bind(input));
  play_again.addEventListener('click', function() {
    window.location.reload();
  });
})(); // Happy IIFE, happy liife