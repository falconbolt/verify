import pyautogui
import time
import random
import os
import subprocess
from exports import exports

# Constants
url = "https://portal.terraacademyforarts.com/enroll/3288977?th__ug=d18a5b2a"
default_password = "_Danmadam1"
default_state = "Kano"
default_gender = "Female"

# Configure pyautogui
pyautogui.PAUSE = 0.3  # Add small delay between actions
pyautogui.FAILSAFE = True  # Enable failsafe

def open_private_window():
    """Open Firefox in private browsing mode on Linux"""
    # Close all Firefox windows first (optional)
    os.system("pkill firefox")
    time.sleep(2)
    
    # Open new private window
    subprocess.Popen(["firefox", "--private-window", url])
    time.sleep(2)  # Wait for browser to open

def close_private_window():
    """Close current private window"""
    pyautogui.hotkey('ctrl', 'shift', 'w')
    time.sleep(1)

def fill_form(user_data):
    """Fill the form with user data using precise coordinates"""
    # Fill first name (using your provided coordinates)
    first_name_x, first_name_y = 407, 356
    pyautogui.click(first_name_x, first_name_y)
    pyautogui.write(user_data['first_name'])
    time.sleep(0.2)
    
    # Fill last name (assuming it's right below first name)
    pyautogui.press('tab')
    pyautogui.write(user_data['last_name'])
    time.sleep(0.2)
    
    # Fill email (assuming next field)
    pyautogui.press('tab')
    pyautogui.write(user_data['email'])
    time.sleep(0.2)
    
    # Fill password
    pyautogui.press('tab')
    pyautogui.write(default_password)
    time.sleep(0.2)
    
    # Fill phone number
    pyautogui.press('tab')
    pyautogui.write(user_data['phone_number'])
    time.sleep(0.2)
    
    # Select state (press down arrow 3 times)
    pyautogui.press('tab')
    time.sleep(0.2)
    pyautogui.press('down', presses=3)
    time.sleep(0.2)
    
    # Select gender (press down arrow 2 times)
    pyautogui.press('tab')
    time.sleep(0.2)
    pyautogui.press('down', presses=2)
    time.sleep(2)
    
    # Submit form (single tab press)
    pyautogui.press('tab')
    pyautogui.press('enter')
    time.sleep(4)

    # Solve captcha
    captcha_x = 534
    captcha_y = 373
    pyautogui.click(captcha_x, captcha_y)
    print("Captcha clicked")
    time.sleep(6)

    print(f"Successfully registered {user_data['first_name']}!")

def process_user(user, index):
    """Process a single user record"""
    try:
        print(f"Processing user {index+1}/{len(exports)}: {user['first_name']}")
        
        # Open fresh private window for each user
        open_private_window()
        time.sleep(2)  # Additional wait for page load
        
        fill_form(user)
                
        # Close window regardless of success
        close_private_window()
        
        return True
        
    except Exception as e:
        print(f"Error processing user: {e}")
        close_private_window()  # Ensure window is closed even on error
        return False

def main():
    """Main execution function"""
    # First run - help user find coordinates
    print("For best results, please verify these coordinates on your screen:")
    print("1. First name field should be at (413, 373)")
    print("2. Open the form in your browser and verify the positions")
    print("3. You can adjust the coordinates in the code if needed")
    input("Press Enter to continue when ready...")
    
    for index, user in enumerate(exports):
        success = process_user(user, index)
        
        print(f"Progress: {index+1}/{len(exports)} users processed")
        
        # Random delay between users (if needed)
        if index < len(exports) - 1:  # Don't wait after last user
            time.sleep(2 + random.uniform(0, 1))

    print("Finished processing all users in the list.")

if __name__ == "__main__":
    main()