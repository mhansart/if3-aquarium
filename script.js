import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

var h = window.innerHeight;
var style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`body {height: ${h}px}`);

$('.aquarium').append('<div class="fish fish1"></div><div class="fish fish2"></div><div class="fish fish3"></div><div class="algue1"></div><div class="algue2"></div><div class="hippo"></div><div class="raie"></div>');

// cloner fish 1
$('.fish1').css({ 'background-image': 'url("fish1.png")' });
$('.aquarium').append($('.fish1').clone().css({
  top: '150px', right: '250px', height: '70px', width: '80px',
}), $('.fish1').clone().css({
  top: '400px', right: '280px', height: '70px', width: '90px',
}), $('.fish1').clone().css({ top: '120px', right: '400px' }), $('.fish1').clone().css({
  top: '300px', right: '450px', height: '45px', width: '40px',
}).addClass('other-side'));

// cloner fish 2
$('.fish2').css({ 'background-image': 'url("fish2.png")' });
$('.aquarium').append($('.fish2').clone().css({
  top: '250px', left: '250px', height: '70px', width: '80px',
}), $('.fish2').clone().css({
  top: '450px', left: '480px', height: '70px', width: '120px',
}).addClass('other-side'));

// cloner fish 3
$('.fish3').css({ 'background-image': 'url("fish3.png")' });
$('.aquarium').append($('.fish3').clone().css({
  top: '80px', left: '280px', height: '70px', width: '170px',
}), $('.fish3').clone().css({
  top: '200px', left: '1300px', height: '50px', width: '100px',
}).addClass('other-side'));

// cloner algue 2
$('.algue2').css({ 'background-image': 'url("algues2.png")' });
$('.aquarium').append($('.algue2').clone().css({
  bottom: '50px', left: '350px', height: '100px', width: '150px',
}), $('.algue2').clone().css({
  bottom: '80px', left: '200px', height: '80px', width: '90px',
}));

// cloner algue 1
$('.algue1').css({ 'background-image': 'url("algues1.png")' });
$('.aquarium').append($('.algue1').clone().css({
  bottom: '30px', left: '200px', height: '100px', width: '150px',
}), $('.algue1').clone().css({ bottom: '40px', left: '450px' }));

// cloner hippocampe
$('.hippo').css({ 'background-image': 'url("hippo.png")' });
$('.aquarium').append($('.hippo').clone().css({
  top: '70px', left: '400px', height: '200px', width: '150px',
}), $('.hippo').clone().css({
  top: '50px', left: '700px', height: '120px', width: '150px',
}));

// ajouter background raie
$('.raie').css({ 'background-image': 'url("raie.png")' });

// changer le sens des poissons avec la classe other side
$('.other-side').css({ transform: 'scaleX(-1' });
var mr = 350;
var mt = 120;
var ml = 100;

// recloner le groupe de poissons 1
$('.fish1').each(function () {
  $('.aquarium').append($(this).clone().css({ 'margin-top': `${mt}px`, 'margin-right': `${mr}px` }));
  $(this).before('');
  mt += 20;
  mr += 50;
});
mt = -100;
// recloner le groupe de poissons 2
$('.fish2').each(function () {
  $('.aquarium').append(($(this).clone()).css({ 'margin-top': `${mt}px`, 'margin-left': `${ml}px` }));
  ml += 50;
});

// animer les différents éléments

setInterval(function () {
  $('.fish2').each(function () {
    var previousLeft = parseInt($(this).css('left'), 10);
    if ($(this).hasClass('other-side')) {
      $(this).css({ left: `${previousLeft - 1}px` });
    } else {
      $(this).css({ left: `${previousLeft + 1}px` });
    }
  });
}, 50);
setInterval(function () {
  $('.fish3').each(function () {
    var previousLeft = parseInt($(this).css('left'), 10);
    if ($(this).hasClass('other-side')) {
      $(this).css({ left: `${previousLeft - 1}px` });
    } else {
      $(this).css({ left: `${previousLeft + 1}px` });
    }
  });
}, 20);
setInterval(function () {
  $('.fish1').each(function () {
    var previousRight = parseInt($(this).css('right'), 10);
    if ($(this).hasClass('other-side')) {
      $(this).css({ right: `${previousRight - 1}px` });
    } else {
      $(this).css({ right: `${previousRight + 1}px` });
    }
  });
}, 40);
setInterval(function () {
  var previousBottom = parseInt($('.raie').css('bottom'), 10);
  var previousRight = parseInt($('.raie').css('right'), 10);
  var previousHeight = parseInt($('.raie').css('height'), 10);
  $('.raie').css({ right: `${previousRight + 3}px`, bottom: `${previousBottom + 2}px`, height: `${previousHeight - 1}px` });
}, 40);
setInterval(function () {
  $('.hippo').each(function () {
    var previousLeft = parseInt($(this).css('left'), 10);
    $(this).css({ left: `${previousLeft - 1}px` });
  });
}, 60);

// ajouter bulle -> décommenter (mais c'est moche)
// $('.fish').each(function () {
//   $(this).append('<div class="bulle1"></div><div class="bulle">Je suis un poisson</div>');
// });
// $('.bulle').each(function () {
//   if ($(this).parent().hasClass('other-side')) {
//     $(this).css({ transform: 'scaleX(-1)' });
//   }
// });
