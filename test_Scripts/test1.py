# Script to test successful login
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
user_name = "test@deploy.com"
password = "12345678"
driver = webdriver.Chrome()
driver.get("https://app-neon.herokuapp.com/")
element = driver.find_element_by_id("materialLoginFormEmail")
element.send_keys(user_name)
element = driver.find_element_by_id("materialLoginFormPassword")
element.send_keys(password)
element.send_keys(Keys.RETURN)