# Script to test for registration validation
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
name= "Tester"
user_name = "test@deploy.com"
password = "testing123"
driver = webdriver.Chrome()
driver.get("https://app-neon.herokuapp.com/")
element = driver.find_element_by_id("registertest")
element.send_keys(Keys.RETURN)
element = driver.find_element_by_id("materialLoginFormName")
element.send_keys(name)
element = driver.find_element_by_id("materialLoginFormEmail")
element.send_keys(user_name)
element = driver.find_element_by_id("materialLoginFormPassword")
element.send_keys(password)
element.send_keys(Keys.RETURN)