var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime()

var x = setInterval(function() {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    $("#days").text(days)
    $("#hours").text(hours)
    $("#minutes").text(minutes)
    $("#seconds").text(seconds)

    if (distance < 0) {
        clearInterval(x)
        $("#timer").hide()
    }
}, 1000)

var app = angular.module('app', [])
app.controller('teamController', function($scope, $http) {
    $http.get('data/team.json').then(function(results) {
        $scope.team = results.data.data
    })
})
app.controller('speakersController', function($scope, $http) {
    $http.get('data/speakers.json').then(function(results) {
        $scope.speakers = results.data.data
    })
})

$(document).ready(function(){
    hashUp()
  // Add smooth scrolling to all links
    $(".scrollable").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault()
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
            $('.navbar-toggler').trigger('click')
        }
  });
});

window.onhashchange = function() {
    hashUp()
}

function hashUp() {
    var hrf = location.hash
    $('.scrollable').parent().removeClass('active')
    $('.nav-link[href="' + hrf + '"]').parent().addClass('active')
}

window.onscroll = function() {
    var themeH = (document.getElementById('themeDiv').clientHeight - 30) || 0
    if (window.pageYOffset > 150) {
        $('.navbar').removeClass('topNav')
        $('.navbar').addClass('downNav')
    } else {
        $('.navbar').removeClass('downNav')
        $('.navbar').addClass('topNav')
    }
}