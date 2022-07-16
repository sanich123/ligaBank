	1. When you click on the "Login to Internet Banking" button, a modal window with a form appears.        
•	closing the modal window by clicking on the cross or pressing the Esc key.
•	when modal window is opened, focus in the "Login" field.
•	field values should be stored in localStorage.
•	the password value should be hidden by default, and displayed when the button highlighted in the screenshot is pressed with the mouse. Forgot password - this is a stub link.
    
	The slider changes to the next one automatically every 4 seconds. Slides change cyclically (after the third slide, the first slide is shown again).
        The "Calculate loan" button moves to the "Loan calculator" block.
        The "Find Branches" button moves to the "Liga Bank Branches" block.
    
	2. Services block is tabs. When you click on the tab button, the active tab and the tab content change.
	3. Loan calculator.
Two purposes of lending:
    Purpose of the loan "Mortgage Lending"
    3.1. The value of real estate in the field can only be entered numerical values from 1,200,000 rubles to 25,000,000 rubles. Data can be entered from the keyboard and using the "+" "-" buttons. When an incorrect value is entered, the field is highlighted in red and a message is displayed inside: "Incorrect value". Clicking on "+" and "-" changes the values. Step - 100,000 rubles.
        
2. The minimum value of the down payment is automatically calculated depending on the value of the "Property value" field and **is 10% of the property value.**
        
        After entering the value of the property, the **minimum value** of the down payment is automatically entered.
        
        The value is entered both in the numeric field (in rubles) and in the "slider" value (in percent). The data entered in the field is linked to the "slider". You need to change the percentage depending on the value.
        
        The value of the down payment can be changed in the numeric field or using the "slider" (%).
        
Step "slider" - 5%. If you enter a value less than (10%) in the field, it **automatically changes to the minimum possible.**
        
        
    3. The minimum amount of the down payment is 10%, the maximum amount of the down payment is any, ** but the amount of the mortgage loan must be at least 500,000 rubles ** (* the maximum amount is equal to the cost of the apartment minus the financial capital (if there is a tick in the checkbox ) minus 500,000 rubles*). If the loan amount is less than 500,000 rubles, a corresponding message is displayed *(see below).*
    
	3.2. Loan term from 5 to 30 years. The value can be changed in the numeric field or using the “slider”. Slider step - 1 year. If you enter values less than 5 or greater than 30 in the field, the value automatically changes to the minimum or maximum possible, respectively. The word "years" must be conjugated.
        
    	3.3. Use of maternity capital - checkbox. (The amount of financial capital is 470,000 rubles). Mat capital is deducted from the loan amount. Loan settlement is instant. The results of the calculation are displayed in the "Our offer" section. The amount of the mortgage is calculated based on the value of the property and the down payment. If there is maternity capital, its amount is also deducted. 
        
	3.4. The interest rate depends on the amount of the down payment.
        - Down payment up to 15%, interest rate - 9.40%
        - Down payment of 15% or more, interest rate - 8.50%

Required income is calculated from the condition that the monthly payment should not exceed 45% of the required income. When you click on the "Submit Application" button, a window with a form will appear. The information is filled in from the calculation automatically, and is not edited.
    
•	Application number No. 0011 (The application number increases by one after each application is sent).
•	Purpose of the loan
•	Real estate value
•	An initial fee
•	Loan terms
    
    When opening the form, the focus is in the field "Name". 
The data of the fields Full Name, E-mail, Phone is stored in Local Storage.
    When submitting the form, all fields must be completed. If the fields are empty, the form is not submitted. All fields must have basic HTML validation by field type, the "Phone" field is implemented using a "mask".
     When you click on the "Send" button, a pop-up "Thank you for contacting" appears. Closing the modal window by the "X" button, by pressing the Esc key. 
    
Purpose of the car loan
    
    1. The cost of the car. In the field you can enter only numerical values from 500,000 rubles to 5,000,000 rubles. Data can be entered from the keyboard and using the "+" "-" buttons. When an incorrect value is entered, the field is highlighted in red and a message is displayed inside: "Incorrect value". Clicking on "+" and "-" changes the values. Step - 50,000 rubles.        
2. The minimum value of the down payment is automatically calculated depending on the value of the "Car cost" field and is 20% of the car cost. After entering the cost of the car, the minimum value of the down payment is automatically entered. The value is entered both in the numeric field (in rubles) and in the "slider" value (in percent). The data entered in the field is linked to the "slider". You need to change the percentage depending on the value. The value of the down payment can be changed in the numeric field or using the "slider" (%). Step "slider" - 5%. If you enter a value less than (20%) in the field, it is automatically changed to the minimum possible.

    3. The minimum amount of the down payment is 20%, the maximum amount of the down payment is any, but the amount of the car loan must be at least 200,000 rubles (the maximum amount is the cost of the car minus 200,000 rubles). If the loan amount is less than 200,000 rubles, a corresponding message is displayed *(see below).
    4. Loan term from 1 to 5 years. The value can be changed in the numeric field or using the “slider”. The "slider" step is 1 year. When you enter values less than 1 or greater than 5 in the field, the value automatically changes to the minimum or maximum possible, respectively. The word "years" must be conjugated.        
        
5. Two Checkboxes:
         - Issue CASCO in our bank - checkbox.
         - Get life insurance in our bank - checkbox.      
     Loan settlement is instant. The results of the calculation are displayed in the section Our offer.
1. The amount of a car loan is calculated based on the cost of the car and the down payment.
    	2. If the loan amount is less than 200,000 rubles, instead of the section our offer, a message appears (replace mortgage loans with car loans):
       3. The interest rate depends on the value of the car and insurance coverage.
        - Up to 2,000,000 rubles - 16%
        - 2,000,000 rubles and more - 15%
        - When applying for CASCO or life insurance - 8.5%
        - When applying for CASCO and life insurance - 3.5%
    
    	4. Required income is calculated from the condition that the monthly payment should not exceed 45% of the required income. When you click on the "Submit Application" button, a window with a form will appear.    
    The information is filled in from the calculation automatically, and is not edited. Replace selected fields (Mortgage → Car loan; Real estate value → Car cost).    
- Application number No. 0011 (The application number increases by one after each application is sent).
•	Purpose of the loan
•	The cost of the car
•	An initial fee
•	Loan terms
When opening the form, the focus is in the field "Name". The data of the fields Full Name, E-mail, Phone is stored in Local Storage. When submitting the form, all fields must be completed. If the fields are empty, the form is not submitted (add animation). When you click on the "Send" button, a pop-up "Thank you for contacting" appears. Implementation of a modal window through JavaScript. Closing the modal window by the "X" button, by pressing the Esc key.
