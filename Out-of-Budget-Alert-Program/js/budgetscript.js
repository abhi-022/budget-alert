$(function() {
    
    // Set the texts to display as Alerts
    
    var alertText = "Sorry Pal! You just crossed your Budget! :(";
    var defaultText = "You're all set with your wonderful budget! :)";
    var endedText = "You've just ended with your budget!";
    
    // Set the default value of Budget to zero if it's empty
    
    var checkBudget = $('#totalBudget').html();
    if(checkBudget === "") {
        $('#totalBudget').text('0');
    }
    
    // Set the input field border to lightblue on entering value
    
    $('#setBudget').keydown(function() {
        $('#alertBox').text("Hmm Hmm.. Dil khol ke daal.. :D");
        $(this).css('border','2px solid lightblue');
        $('#alertBox').css('color','blue');
    });
       
    // Entering the Budget, doing quick validations, and setting the Final Budget
    
    $('#setLimit').click(function() {
        var budgetX = $('#setBudget').val();
        if(budgetX === "" || budgetX == 0) {
            budgetX = 0;
            $('#alertBox').text("Badmash Ladka! Chal theek se daal! :/");
            $('#alertBox').css('color','red');
            $('#setBudget').css('border','2px solid red');
        } else if(budgetX < 0) {
            budgetX = 0;
            $('#alertBox').text("Ullu banata hai! Minus me paisa dalta hai! :/");
            $('#alertBox').css('color','red');
            $('#setBudget').css('border','2px solid red');
        } else {
            $('#setBudget').css('border','2px solid orange');
            var budgetY = $('#totalBudget').html();
            var budgetZ = parseInt(budgetX) + parseInt(budgetY);
            //$('#totalBudget').text('');
            $('#totalBudget').text(budgetZ);
            $('#setBudget').val('');

            // Display the default text on reloading Budget
            var budgetLeft = $('#totalBudget').html();
                if(budgetLeft > 0) {
                $('#alertBox').text(defaultText);
                $('#alertBox').css('color','green');
                $('#totalBudget').css('border','2px solid green');
            } else if(budgetLeft == 0) {
                $('#alertBox').text("Congrats! You just cleared all your dues!");
                $('#alertBox').css('color','green');
                $('#totalBudget').css('border','2px solid green');
            } else {
                $('#alertBox').text("You're still out of your budget..");
                $('#alertBox').css('color','red');
            }
        }
    });
    
    // Calculating the Amount for each product
    
    $('#item-1x').change(function() {
        var itemPrice = $('#itemp1x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-01').text(itemAmount);
    });
    
    $('#item-2x').change(function() {
        var itemPrice = $('#itemp2x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-02').text(itemAmount);
    });
    
    $('#item-3x').change(function() {
        var itemPrice = $('#itemp3x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-03').text(itemAmount);
    });
    
    $('#item-4x').change(function() {
        var itemPrice = $('#itemp4x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-04').text(itemAmount);
    });
    
    $('#item-5x').change(function() {
        var itemPrice = $('#itemp5x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-05').text(itemAmount);
    });
    
    $('#item-6x').change(function() {
        var itemPrice = $('#itemp6x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-06').text(itemAmount);
    });
    
    $('#item-7x').change(function() {
        var itemPrice = $('#itemp7x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-07').text(itemAmount);
    });
    
    $('#item-8x').change(function() {
        var itemPrice = $('#itemp8x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-08').text(itemAmount);
    });
    
    $('#item-9x').change(function() {
        var itemPrice = $('#itemp9x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-09').text(itemAmount);
    });
    
    $('#item-10x').change(function() {
        var itemPrice = $('#itemp10x').html();
        var itemQuantity = $(this).val();
        var itemAmount = itemPrice * itemQuantity;
        $('#total-10').text(itemAmount);
    });
    
    // Deducting the amounts from the budget on purchase
    
    $('#calculate-01').click(function() {
        var buyAmount = $('#total-01').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').text("You're still within your budget");
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-02').click(function() {
        var buyAmount = $('#total-02').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-03').click(function() {
        var buyAmount = $('#total-03').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-04').click(function() {
        var buyAmount = $('#total-04').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-05').click(function() {
        var buyAmount = $('#total-05').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-06').click(function() {
        var buyAmount = $('#total-06').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-07').click(function() {
        var buyAmount = $('#total-07').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-08').click(function() {
        var buyAmount = $('#total-08').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-09').click(function() {
        var buyAmount = $('#total-09').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
    $('#calculate-10').click(function() {
        var buyAmount = $('#total-10').html();
        var remainingBudget = $('#totalBudget').html();
        var updatedBudget = remainingBudget - buyAmount;
        $('#totalBudget').text(updatedBudget);
        
        // Display an Alert on being out of Budget
        var budgetLeft = $('#totalBudget').html();
            if(budgetLeft < 0) {
            $('#alertBox').text(alertText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else if (budgetLeft == 0) {
            $('#alertBox').text(endedText);
            $('#alertBox').css('color','red');
            $('#totalBudget').css('border','2px solid red');
        } else {
            $('#alertBox').css('color','green');
            $('#totalBudget').css('border','2px solid green');
        }
    });
    
});