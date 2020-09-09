$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/cucumberJVM/features/login.feature");
formatter.feature({
  "name": "TargetAus feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TargetAus login page test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Already in loging page",
  "keyword": "Given "
});
formatter.step({
  "name": "confirm login page",
  "keyword": "When "
});
formatter.step({
  "name": "enter user name \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "press login button",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sriraghavi2020@gmail.com",
        "sriraghavi"
      ]
    },
    {
      "cells": [
        "kiki@gmail.com",
        "kiti"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TargetAus login page test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Already in loging page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.already_in_loging_page()"
});
