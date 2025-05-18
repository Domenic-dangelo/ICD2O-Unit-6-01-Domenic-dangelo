// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/ICD2O-Unit-6-01-Domenic-dangelo/sw.js', {
    scope: '/ICD2O-Unit-6-01-Domenic-dangelo/'
  })
}

/**
 * This function displays an alert.
 */

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate () {
  // input
  const movieAgeRating = document.getElementById("age-rating").value

  // process
  if (movieAgeRating >= 17) {
    // output
    document.getElementById("result").innerHTML =
      "<p>You can see R rated movies.</p>"
  }

  else if(movieAgeRating >= 13){
    document.getElementById("result").innerHTML =
      "<p>You can see PG-13 rated movies.</p>"
  }

  else if(movieAgeRating >= 5){
    document.getElementById("result").innerHTML =
      "<p>You can see G or PG rated movies.</p>"
  }

    else {
    document.getElementById("result").innerHTML =
      "<p>You are to young to see most things.</p>"
  }
}
