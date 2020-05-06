#Authorization test to verify notes adding feature
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
user_name = "test@deploy.com"
password = "12345678"
title="Test Title"
notes="Some random test notes for test"
driver = webdriver.Chrome()
driver.get("https://app-neon.herokuapp.com/")
element = driver.find_element_by_id("materialLoginFormEmail")
element.send_keys(user_name)
element = driver.find_element_by_id("materialLoginFormPassword")
element.send_keys(password)
element.send_keys(Keys.RETURN)
time.sleep(3)
element = driver.find_element_by_id("form106")
element.send_keys(title)
element = driver.find_element_by_id("form107")
element.send_keys(notes)
element = driver.find_element_by_css_selector('.btn')
element.click()