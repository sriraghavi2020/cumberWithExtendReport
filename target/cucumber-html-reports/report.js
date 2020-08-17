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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.confirm_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter user name \"sriraghavi2020@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"sriraghavi\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.press_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "passed"
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.confirm_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter user name \"kiki@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"kiti\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.press_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});