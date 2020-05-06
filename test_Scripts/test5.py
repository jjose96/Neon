# Script to verify logout functionality
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
user_name = "test@deploy.com"
password = "12345678"
driver = webdriver.Chrome()
driver.get("https://app-neon.herokuapp.com/")
element = driver.find_element_by_id("materialLoginFormEmail")
element.send_keys(user_name)
element = driver.find_element_by_id("materialLoginFormPassword")
element.send_keys(password)
element.send_keys(Keys.RETURN)
time.sleep(3)
element = driver.find_element_by_id("logout")
element.click()
driver.get("https://app-neon.herokuapp.com/dashboard")