({
    getAccounts : function(component,event,helper) {
        var action = component.get("c.getAccounts");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.accountList', response.getReturnValue());
                console.log('accountList: ' + component.get("v.accountList"));
            } else if (state === "INCOMPLETE") {
                console.log("Incompleted");

            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    component.set('v.messageFromWebservice', errors[0].message);
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }


        });
        $A.enqueueAction(action);
    }
})
